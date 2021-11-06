import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Credentials } from 'app/users/models/credentials';
import { AppData, PersonalData, Sex, User } from 'app/users/models/user';
import { isNil } from 'lodash';
import * as fromRoot from 'store';

@Injectable({
  providedIn: 'root'
})
export class UserUtils {
  constructor(private store: Store<fromRoot.RootState>) {}

  getAppDataForm(appData?: AppData): FormGroup {
    return this.initAppDataForm(appData || this.initAppDataModel());
  }

  getPersonalDataForm(personalData?: PersonalData): FormGroup {
    return this.initPersonalDataForm(personalData || this.initPersonalDataModel());
  }

  login(credentials: Credentials) {
    this.store.dispatch(fromRoot.doLogin({ credentials }));
  }

  public getUserForm(user?: User): FormGroup {
    return this.initUserForm(user || this.initUserModel());
  }

  private initUserForm(user: User): FormGroup {
    const personalDataForm = this.initPersonalDataForm(user.personalData);
    const appDataForm = this.initAppDataForm(user.appData);
    return new FormGroup({
      personalDataForm,
      appDataForm
    });
  }

  private initPersonalDataForm(personalData: PersonalData): FormGroup {
    return new FormGroup({
      name: new FormControl(personalData.name, {
        validators: Validators.required,
        updateOn: 'blur'
      }),
      surname: new FormControl(personalData.surname),
      lastName: new FormControl(personalData.lastName)
    });
  }

  private initAppDataForm(appData: AppData): FormGroup {
    return new FormGroup(
      {
        email: new FormControl(appData.email, [Validators.email, Validators.required]),
        nickName: new FormControl(appData.nickName, Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      },
      { validators: this.checkPasswordsValidator }
    );
  }

  private checkPasswordsValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return isNil(password) || isNil(confirmPassword) || password === confirmPassword ? null : { notSame: true };
  }

  private initUserModel(): User {
    const personalData: PersonalData = this.initPersonalDataModel();
    const appData: AppData = this.initAppDataModel();
    return {
      personalData,
      appData
    };
  }

  private initPersonalDataModel(): PersonalData {
    return {
      name: '',
      surname: '',
      lastName: '',
      birthDay: new Date(),
      sex: Sex.undefined
    };
  }

  private initAppDataModel(): AppData {
    return {
      nickName: '',
      email: '',
      password: ''
    };
  }

  public castUserToRequest(user: User) {
    return user;
  }
}

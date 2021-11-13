import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TokenData } from 'app/users/models/auth';
import { Credentials } from 'app/users/models/credentials';
import { AppData, PersonalData, Sex, User, UserRequest } from 'app/users/models/user';
import jwtDecode from 'jwt-decode';
import { isNil } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromRoot from 'store';
import { TOKEN_KEY } from '../storage/storage-constants';

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
    const personalData = this.initPersonalDataForm(user.personalData);
    const appData = this.initAppDataForm(user.appData);
    return new FormGroup({
      personalData,
      appData
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
        confirmEmail: new FormControl(appData.email, [Validators.email, Validators.required]),
        nickName: new FormControl(appData.nickName, Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      },
      { validators: [this.checkEmailsValidator, this.checkPasswordsValidator] }
    );
  }

  private checkEmailsValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const confirmEmail = control.get('confirmEmail')?.value;
    return isNil(email) || isNil(confirmEmail) || email === confirmEmail ? null : { notSameEmail: true };
  }

  private checkPasswordsValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return isNil(password) || isNil(confirmPassword) || password === confirmPassword ? null : { notSamePassword: true };
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

  public castUserToRequest(user: User): UserRequest {
    return <UserRequest>{
      alias: user.appData.nickName,
      email: user.appData.email,
      password: user.appData.password,
      people: {
        firstName: user.personalData.name,
        surname: user.personalData.surname,
        lastName: user.personalData.lastName
      }
    };
  }

  public getTokenUserInfo(): Observable<TokenData | undefined> {
    return this.store.select(fromRoot.getUser).pipe(
      map(user => {
        const token = sessionStorage.getItem(TOKEN_KEY);
        const tokenData: any = token && jwtDecode(token);
        console.log(tokenData);
        return !!tokenData ? <TokenData>{ roles: tokenData.Roles, email: tokenData.sub } : undefined;
        // const userData: any = jwtDecode(user.signInUserSession.idToken.jwtToken);
        // const userName = userData['custom:override_userid'] ? userData['custom:override_userid'] : userData['cognito:username'];
        // const { email, family_name: surname, given_name: name } = user.attributes;
        // return {
        //   userName,
        //   email,
        //   surname,
        //   name
        // };
      })
    );
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from 'app/shared/utils/my-error-state-matcher/my-error-state-matcher';
import { UserUtils } from 'app/users/services/utils/userUtils.service';

import { isNil } from 'lodash';

@Component({
  selector: 'app-app-data-form',
  templateUrl: './app-data-form.component.html',
  styleUrls: ['./app-data-form.component.scss']
})
export class AppDataFormComponent implements OnInit {
  @Input() appDataForm!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private userUtils: UserUtils) {}

  ngOnInit(): void {
    this.initDefaultParams();
  }

  private initDefaultParams() {
    if (isNil(this.appDataForm)) {
      this.appDataForm = this.userUtils.getAppDataForm();
    }
  }

  get email() {
    return this.appDataForm?.get('email');
  }

  get nickName() {
    return this.appDataForm?.get('nickName');
  }

  get password() {
    return this.appDataForm?.get('password');
  }

  get confirmPassword() {
    return this.appDataForm?.get('confirmPassword');
  }
}

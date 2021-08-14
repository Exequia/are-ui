import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'app/users/models/loginRequest';
import { isNil } from 'lodash';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  @Input() loginRequest!: LoginRequest;
  @Output() validForm: EventEmitter<LoginRequest> = new EventEmitter();

  constructor() {
    this.initDefaultParams();
  }

  ngOnInit(): void {}

  private initDefaultParams() {
    this.initDefaultModel();
    this.initDefaultForm();
  }

  private initDefaultModel() {
    if (isNil(this.loginRequest)) {
      this.loginRequest = {
        email: '',
        password: ''
      };
    }
  }

  private initDefaultForm() {
    if (isNil(this.loginForm)) {
      this.loginForm = new FormGroup({
        email: new FormControl(this.loginRequest?.email, [Validators.email, Validators.required]),
        password: new FormControl(this.loginRequest?.password, Validators.required)
      });
    }
  }

  get email() {
    return this.loginForm?.get('email');
  }

  get password() {
    return this.loginForm?.get('password');
  }

  onSubmit() {
    this.loginForm?.updateValueAndValidity();
    if (this.loginForm?.valid) {
      this.validForm.emit(this.loginForm?.value);
    }
  }
}

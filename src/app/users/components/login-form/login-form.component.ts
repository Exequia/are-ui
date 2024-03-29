import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'app/users/models/credentials';
import { isNil } from 'lodash';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup | undefined;
  @Input() credentials!: Credentials;
  @Output() validForm: EventEmitter<Credentials> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.initDefaultParams();
  }

  private initDefaultParams() {
    this.initDefaultModel();
    this.initDefaultForm();
  }

  private initDefaultModel() {
    if (isNil(this.credentials)) {
      this.credentials = {
        email: '',
        password: ''
      };
    }
  }

  private initDefaultForm() {
    if (isNil(this.loginForm) && this.credentials) {
      this.loginForm = new FormGroup({
        email: new FormControl(this.credentials?.email, [Validators.email, Validators.required]),
        password: new FormControl(this.credentials?.password, Validators.required),
        rememberMe: new FormControl(this.credentials?.rememberMe)
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

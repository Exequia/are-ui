import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from 'app/users/components/login-form/login-form.component';
import { LoginRequest } from 'app/users/models/loginRequest';
import { Token } from 'app/users/models/token';
import { UserUtils } from 'app/users/services/utils/userUtils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: LoginFormComponent;
  loginRequest!: LoginRequest;

  constructor(private userService: UserUtils) {
    // this.loginForm = undefined;

    this.loginRequest = {
      email: 'fnx@gmail.com',
      password: 'pass'
    };
  }

  ngOnInit(): void {}

  submit() {
    this.loginForm?.onSubmit();
  }

  cancel() {
    this.loginForm?.loginForm?.reset();
  }

  handelValidForm(login: LoginRequest) {
    this.userService.login(login).subscribe((token: Token) => {
      console.log(token);
      // this.app.areService.token = token.accessToken;
    });
  }
}

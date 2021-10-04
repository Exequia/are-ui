import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from 'app/users/components/login-form/login-form.component';
import { Credentials } from 'app/users/models/credentials';
import { Token } from 'app/users/models/token';
import { StorageService } from 'app/users/services/storage/storage.service';
import { UserUtils } from 'app/users/services/utils/userUtils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: LoginFormComponent;
  credentials!: Credentials;

  constructor(private userService: UserUtils, private storageService: StorageService) {
    this.credentials = this.storageService.getCredentials();
  }

  ngOnInit(): void {}

  submit() {
    this.loginForm?.onSubmit();
  }

  cancel() {
    this.loginForm?.loginForm?.reset();
  }

  handelValidForm(login: Credentials) {
    this.userService.login(login).subscribe((token: Token) => {
      console.log(token);
      this.storageService.setCredentials(login, token);
      // this.app.areService.token = token.accessToken;
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from 'app/users/components/login-form/login-form.component';
import { Credentials } from 'app/users/models/credentials';
import { AuthResponse } from 'app/users/models/auth';
import { StorageService } from 'app/users/services/storage/storage.service';
import { UserUtils } from 'app/users/services/utils/userUtils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginComponent') loginComponent: LoginFormComponent | undefined;
  credentials: Credentials | undefined;

  constructor(private userService: UserUtils, private storageService: StorageService) {}

  ngOnInit(): void {
    this.credentials = this.storageService.getCredentials();
  }

  submit() {
    this.loginComponent?.onSubmit();
  }

  cancel() {
    this.loginComponent?.loginForm?.reset();
  }

  handelValidForm(credentials: Credentials) {
    this.userService.login(credentials);
  }
}

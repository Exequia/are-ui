import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { UsersRoutingModule } from './usersRouting.module';
import { LoginComponent } from './views/login/login.component';
import { SingUpComponent } from './views/sing-up/sing-up.component';
import { AppDataFormComponent } from './components/app-data-form/app-data-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PersonalDataFormComponent } from './components/personal-data-form/personal-data-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SingUpComponent, AppDataFormComponent, LoginFormComponent, PersonalDataFormComponent, UserFormComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule, FormsModule, ReactiveFormsModule]
})
export class UsersModule {}

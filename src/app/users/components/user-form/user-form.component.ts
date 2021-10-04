import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserUtils } from 'app/users/services/utils/userUtils.service';
import { isNil } from 'lodash';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() userForm!: FormGroup;

  constructor(private userUtils: UserUtils) {}

  ngOnInit(): void {
    this.initDefaultParams();
  }

  private initDefaultParams() {
    if (isNil(this.userForm)) {
      this.userForm = this.userUtils.getUserForm();
    }
  }

  doUpdate(formName: string, formValues: any) {
    this.userForm?.get(formName)?.setValue(formValues);
  }

  get personalDataForm() {
    return <FormGroup>this.userForm?.get('personalDataForm');
  }

  get appDataForm() {
    return <FormGroup>this.userForm?.get('appDataForm');
  }
}

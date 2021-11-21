import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { UserUtils } from 'app/users/services/utils/userUtils.service';
import { isNil } from 'lodash';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() userForm!: FormGroup;
  @ViewChild('stepper') stepper: MatStepper | undefined;

  constructor(private userUtils: UserUtils) {}

  ngOnInit(): void {
    this.initDefaultParams();
  }

  private initDefaultParams() {
    if (isNil(this.userForm)) {
      this.userForm = this.userUtils.getUserForm();
    }

    this.personalData?.statusChanges?.subscribe(status => {
      if (status === 'VALID') {
        this.stepper?.next();
      }
    });
  }

  get personalData() {
    return <FormGroup>this.userForm?.get('personalData');
  }

  get appData() {
    return <FormGroup>this.userForm?.get('appData');
  }
}

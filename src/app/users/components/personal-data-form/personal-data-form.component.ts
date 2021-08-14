import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserUtils } from 'app/users/services/utils/userUtils.service';

import { isNil } from 'lodash';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {
  @Input() personalDataForm!: FormGroup;

  constructor(private userUtils: UserUtils) {}

  ngOnInit(): void {
    this.initDefaultParams();
  }

  private initDefaultParams() {
    this.initDefaultForm();
  }

  private initDefaultForm() {
    if (isNil(this.personalDataForm)) {
      console.error('nuevo form');
      this.personalDataForm = this.userUtils.getPersonalDataForm();
    }
  }

  get name() {
    return this.personalDataForm?.get('name');
  }

  get surname() {
    return this.personalDataForm?.get('surname');
  }

  get lastName() {
    return this.personalDataForm?.get('lastName');
  }
}

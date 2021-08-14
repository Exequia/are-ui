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
      console.error('nuevo userForm');
      this.userForm = this.userUtils.getUserForm();
    }
    console.error('nuevo userForm', this.userForm.get('appData'));
  }
}

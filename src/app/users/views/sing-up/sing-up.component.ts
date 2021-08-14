import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserUtils } from 'app/users/services/utils/userUtils.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  userForm: FormGroup;

  constructor(private userUtils: UserUtils) {
    this.userForm = this.userUtils.getUserForm();
  }

  ngOnInit(): void {}

  cancel() {
    this.userForm?.reset();
  }

  submit() {
    this.userForm.updateValueAndValidity();
    if (this.userForm?.valid) {
      // this.app.store.dispatch();
    }
  }
}

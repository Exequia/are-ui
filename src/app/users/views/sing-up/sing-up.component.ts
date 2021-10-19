import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserUtils } from 'app/users/services/utils/userUtils.service';
import * as fromRoot from 'store';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  userForm: FormGroup;

  constructor(private store: Store<fromRoot.RootState>, private userUtils: UserUtils) {
    this.userForm = this.userUtils.getUserForm();
  }

  ngOnInit(): void {}

  cancel() {
    this.userForm?.reset();
  }

  submit() {
    this.userForm.updateValueAndValidity();
    if (this.userForm?.valid) {
      this.store.dispatch(fromRoot.doCreateUser(this.userForm.value));
    }
  }
}

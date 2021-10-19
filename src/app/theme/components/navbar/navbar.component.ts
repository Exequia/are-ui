import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppData, User } from 'app/users/models/user';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';
import { toggleSidenav } from 'store/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user: Observable<AppData | undefined> = this.store.pipe(select(fromRoot.getUser));
  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.store.dispatch(toggleSidenav());
  }

  doLogout() {
    this.store.dispatch(fromRoot.doLogOut());
  }
}

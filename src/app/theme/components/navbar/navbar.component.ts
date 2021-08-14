import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from 'store';
import { toggleSidenav } from 'store/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.store.dispatch(toggleSidenav());
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidenav } from 'store/actions';
import * as fromRoot from 'store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.store.dispatch(toggleSidenav());
  }
}

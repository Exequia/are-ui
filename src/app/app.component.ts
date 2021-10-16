import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import * as fromRoot from 'store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private store: Store<fromRoot.RootState>) {}

  ngAfterViewInit() {
    this.store.select(fromRoot.isSideBarOpen).subscribe((isOpen: boolean | undefined) => {
      isOpen !== undefined && this.sidenav?.toggle();
    });
  }
}

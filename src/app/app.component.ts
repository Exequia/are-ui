import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as fromRoot from 'store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(private store: Store<fromRoot.RootState>) {}

  ngAfterViewInit() {
    this.store
      .pipe(select(fromRoot.isSideBarOpen))
      .subscribe((isOpen: boolean | undefined) => {
        isOpen !== undefined && this.sidenav?.toggle();
      });
  }
}

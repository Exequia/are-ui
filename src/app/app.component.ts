import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { get } from 'lodash';
import { Subscription } from 'rxjs';
import * as fromRoot from 'store';
import { SnackBarConfiguration } from 'store';
import { SnackBarTemplateComponent } from './theme/components/snackbar-template/snackbar-template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  private snackBarSubscription: Subscription | undefined;
  private snackBarDismissedSubscription: Subscription | undefined;

  constructor(private store: Store<fromRoot.RootState>, private snackBar: MatSnackBar) {}

  ngAfterViewInit() {
    this.store.select(fromRoot.isSideBarOpen).subscribe((isOpen: boolean | undefined) => {
      isOpen !== undefined && this.sidenav?.toggle();
    });

    this.snackBarSubscription = this.store.select(fromRoot.getSnackBar).subscribe(snackBar => {
      if (snackBar && snackBar.visible && snackBar.configuration) {
        this.openSnackBar(snackBar.configuration);
      }
    });
  }

  private openSnackBar(config: SnackBarConfiguration) {
    const horizontalPosition = get(config, 'position.horizontalPosition', 'center');
    const verticalPosition = get(config, 'position.verticalPosition', 'top');
    const duration = get(config, 'duration', 3000);
    const icon = get(config, 'icon', null);
    const snackBarConf = {
      duration,
      horizontalPosition,
      verticalPosition,
      data: {
        message: config.message,
        icon
      }
    };

    this.snackBarDismissedSubscription = this.snackBar
      .openFromComponent(SnackBarTemplateComponent, snackBarConf)
      .afterDismissed()
      .subscribe(() => {
        this.store.dispatch(fromRoot.resetSnackBar());
        this.snackBarDismissedSubscription?.unsubscribe();
      });
  }

  ngOnDestroy() {
    this.snackBarSubscription?.unsubscribe();
    this.snackBarDismissedSubscription?.unsubscribe();
  }
}

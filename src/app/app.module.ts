import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
/* STORE */
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';
import { effects, RootState } from 'store';
import { environment } from '../environments/environment';
import * as fromReducers from '../store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './theme/components/navbar/navbar.component';
import { SidebarComponent } from './theme/components/sidebar/sidebar.component';
import { SnackbarTemplateModule } from './theme/components/snackbar-template/snackbar-template.module';
import { HomeComponent } from './theme/views/home/home.component';
import { PageNotFoundComponent } from './theme/views/page-not-found/page-not-found.component';

export const reducers: ActionReducerMap<RootState> = {
  auth: fromReducers.authReducer,
  ui: fromReducers.uiReducer,
  bets: fromReducers.betsReducer
};

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      name: 'ARE ui Store DevTools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
    SharedModule,
    HttpClientModule,
    TranslateModule,
    StoreRouterConnectingModule.forRoot(),
    SnackbarTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

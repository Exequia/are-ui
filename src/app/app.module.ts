import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';

/* STORE */
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { effects, RootState } from 'store';
import * as fromReducers from '../store/reducers';
import { NavbarComponent } from './theme/components/navbar/navbar.component';
import { SidebarComponent } from './theme/components/sidebar/sidebar.component';

import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './theme/views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PageNotFoundComponent } from './theme/views/page-not-found/page-not-found.component';

export const reducers: ActionReducerMap<RootState> = {
  auth: fromReducers.authReducer,
  ui: fromReducers.uiReducer,
  user: fromReducers.userReducer,
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
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

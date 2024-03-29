import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '../material/material.module';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ButtonComponent } from './components/button/button.component';
import { FormlyFieldTimeInputComponent } from './components/formly-field-time-input/formly-field-time-input.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { AuthGuard } from './services/auth/auth.guard';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const formlyComponents = [BasicFormComponent, FormlyFieldTimeInputComponent, ButtonComponent];
const formlyModules = [FormlyMaterialModule, FormlyMatDatepickerModule, FormlyMatSliderModule];

@NgModule({
  declarations: formlyComponents,
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    FlexLayoutModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      types: [{ name: 'time', component: FormlyFieldTimeInputComponent, wrappers: ['form-field'] }]
      // validators: [{ name: 'email', validation: EmailValidatorFormly.emailValidator }],
      // validationMessages: [{ name: 'email', message: EmailValidatorFormly.emailValidatorMessage }]
    }),
    ...formlyModules,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No hay datos para mostrar', // Message to show when array is presented, but contains no values
        totalMessage: 'Total', // Footer total message
        selectedMessage: 'Seleccionado' // Footer selected message
      }
    })
  ],
  providers: [authInterceptorProviders, AuthGuard],
  exports: [...formlyComponents, MaterialModule, HttpClientModule, TranslateModule, FlexLayoutModule, ReactiveFormsModule, FormlyModule, ...formlyModules, NgxDatatableModule]
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { SnackBarTemplateComponent } from './snackbar-template.component';

@NgModule({
  declarations: [SnackBarTemplateComponent],
  imports: [CommonModule, MatIconModule],
  entryComponents: [SnackBarTemplateComponent]
})
export class SnackbarTemplateModule {}

import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'ice-snackbar-template',
  templateUrl: 'snackbar-template.component.html',
  styleUrls: ['snackbar-template.component.scss']
})
export class SnackBarTemplateComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}

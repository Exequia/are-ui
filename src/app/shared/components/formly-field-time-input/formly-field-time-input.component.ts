import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'are-formly-field-time-input',
  templateUrl: './formly-field-time-input.component.html',
  styleUrls: ['./formly-field-time-input.component.scss']
})
export class FormlyFieldTimeInputComponent extends FieldType {
  get type() {
    return this.to.type || 'time';
  }

  get control(): FormControl {
    return this.formControl as FormControl;
  }
}

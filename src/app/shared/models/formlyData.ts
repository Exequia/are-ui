import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface FormlyData {
  id: number;
  fields: FormlyFieldConfig[];
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
}

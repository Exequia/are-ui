import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface FormlyData {
  id: string;
  fields: FormlyFieldConfig[];
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
}

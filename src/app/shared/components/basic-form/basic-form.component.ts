import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormlyData } from 'app/shared/models/formlyData';

@Component({
  selector: 'are-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicFormComponent implements OnInit {
  @Input() formlyData: FormlyData | undefined;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.formlyData?.form.valid) {
      alert(JSON.stringify(this.formlyData?.model));
    }
  }
}

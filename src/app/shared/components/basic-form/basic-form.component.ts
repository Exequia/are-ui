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

  reset() {
    // if (this.formlyData && !this.formlyData?.options) {
    //   this.formlyData?.options = {} as FormlyFormOptions;
    // }
    // this.formlyData.options.resetModel();
    this.formlyData?.form?.reset();
  }
}

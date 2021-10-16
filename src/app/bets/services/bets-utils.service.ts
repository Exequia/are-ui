import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { BetId } from '../models/betType';

@Injectable({
  providedIn: 'root'
})
export class BetsUtilsService {
  constructor(private translate: TranslateService) {}

  getBetProfileFields(profile: BetId): FormlyFieldConfig[] {
    const now = Date.now();
    let fields: FormlyFieldConfig[];
    switch (profile) {
      case BetId.pregnancy:
        fields = [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: this.translate.instant('bets.type.pregnancy.fields.name.label'),
              placeholder: this.translate.instant('bets.type.pregnancy.fields.name.placeholder'),
              required: true
            }
          },
          {
            key: 'sex',
            type: 'select',
            templateOptions: {
              label: this.translate.instant('bets.type.pregnancy.fields.sex.label'),
              placeholder: this.translate.instant('bets.type.pregnancy.fields.sex.placeholder'),
              description: this.translate.instant('bets.type.pregnancy.fields.sex.description'),
              options: [
                { label: this.translate.instant('bets.type.pregnancy.fields.sex.options.male'), value: 'male' },
                { label: this.translate.instant('bets.type.pregnancy.fields.sex.options.female'), value: 'female' }
              ],
              required: true
            }
          },
          {
            fieldGroup: [
              {
                key: 'birthDate',
                type: 'datepicker',
                templateOptions: {
                  label: this.translate.instant('bets.type.pregnancy.fields.birthDate.label'),
                  placeholder: this.translate.instant('bets.type.pregnancy.fields.birthDate.placeholder'),
                  description: this.translate.instant('bets.type.pregnancy.fields.birthDate.description'),
                  required: true,
                  datepickerOptions: {
                    min: new Date()
                  }
                }
              },
              {
                key: 'birthTime',
                type: 'time',
                defaultValue: '0',
                templateOptions: {
                  label: this.translate.instant('bets.type.pregnancy.fields.birthTime.label'),
                  placeholder: this.translate.instant('bets.type.pregnancy.fields.birthTime.placeholder'),
                  description: this.translate.instant('bets.type.pregnancy.fields.birthTime.description'),
                  required: true
                }
              }
            ]
          },
          {
            key: 'weight',
            type: 'slider',
            defaultValue: 0,
            templateOptions: {
              label: this.translate.instant('bets.type.pregnancy.fields.weight.label'),
              description: this.translate.instant('bets.type.pregnancy.fields.weight.description'),
              thumbLabel: true,
              step: 0.1,
              max: 10,
              required: true
            },
            expressionProperties: {
              'templateOptions.label': model => `${this.translate.instant('bets.type.pregnancy.fields.weight.label')}: ${model?.weight}`
            }
          },
          {
            key: 'height',
            type: 'slider',
            defaultValue: 0,
            templateOptions: {
              label: this.translate.instant('bets.type.pregnancy.fields.height.label'),
              description: this.translate.instant('bets.type.pregnancy.fields.height.description'),
              thumbLabel: true,
              step: 1,
              max: 100,
              required: true
            },
            expressionProperties: {
              'templateOptions.label': model => `${this.translate.instant('bets.type.pregnancy.fields.height.label')}: ${model?.height}`
            }
          }
        ];
        break;
      default:
        fields = [];
        break;
    }
    return fields;
  }
}

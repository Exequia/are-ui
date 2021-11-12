import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { FormlyData } from 'app/shared/models/formlyData';
import { AppData } from 'app/users/models/user';
import { take } from 'rxjs/operators';
import * as fromRoot from 'store';
import { getBetsProfiles } from 'store';
import { Bet, BetResponse } from '../models/bet';
import { BetConfig } from '../models/betConfig';
import { BetId, BetProfile } from '../models/betProfile';

@Injectable({
  providedIn: 'root'
})
export class BetsUtilsService {
  private betsProfiles: BetProfile[] | undefined;

  constructor(private translate: TranslateService, private store: Store<fromRoot.RootState>) {
    this.store.pipe(select(getBetsProfiles), take(1)).subscribe(betsProfiles => (this.betsProfiles = betsProfiles));
  }

  getBetFromProfile(profile: BetProfile | undefined, user?: AppData | undefined) {
    const formlyData: FormlyData = this.getFormlyDataFromProfile(profile);
    const config: BetConfig = this.getDefaultFormlyConfig(formlyData, user);
    const bet: Bet = { profile, config };
    return bet;
  }

  getDefaultFormlyConfig(formlyData: FormlyData, user: AppData | undefined): BetConfig {
    return {
      id: '',
      formlyData,
      name: '',
      ownerName: user?.nickName,
      startDate: new Date(),
      status: {
        id: 0,
        name: 'active'
      },
      model: {
        id: 0,
        fields: [],
        form: new FormGroup({}),
        model: {},
        options: {}
      }
    };
  }

  getFormlyDataFromProfile(profile: BetProfile | undefined): FormlyData {
    return {
      id: 0,
      fields: this.getBetProfileFields(profile!.id),
      form: new FormGroup({}),
      model: {},
      options: {}
    };
  }

  getBetProfileFields(profile: BetId | string): FormlyFieldConfig[] {
    let fields: FormlyFieldConfig[];
    switch (profile) {
      case BetId.pregnancy:
        fields = this.getPregnancyFields();
        break;
      default:
        fields = [];
        break;
    }
    return fields;
  }

  private getPregnancyFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: this.translate.instant('bets.profile.pregnancy.fields.name.label'),
          placeholder: this.translate.instant('bets.profile.pregnancy.fields.name.placeholder'),
          required: true
        }
      },
      {
        key: 'sex',
        type: 'select',
        templateOptions: {
          label: this.translate.instant('bets.profile.pregnancy.fields.sex.label'),
          placeholder: this.translate.instant('bets.profile.pregnancy.fields.sex.placeholder'),
          description: this.translate.instant('bets.profile.pregnancy.fields.sex.description'),
          options: [
            { label: this.translate.instant('bets.profile.pregnancy.fields.sex.options.male'), value: 'male' },
            { label: this.translate.instant('bets.profile.pregnancy.fields.sex.options.female'), value: 'female' }
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
              label: this.translate.instant('bets.profile.pregnancy.fields.birthDate.label'),
              placeholder: this.translate.instant('bets.profile.pregnancy.fields.birthDate.placeholder'),
              description: this.translate.instant('bets.profile.pregnancy.fields.birthDate.description'),
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
              label: this.translate.instant('bets.profile.pregnancy.fields.birthTime.label'),
              placeholder: this.translate.instant('bets.profile.pregnancy.fields.birthTime.placeholder'),
              description: this.translate.instant('bets.profile.pregnancy.fields.birthTime.description'),
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
          label: this.translate.instant('bets.profile.pregnancy.fields.weight.label'),
          description: this.translate.instant('bets.profile.pregnancy.fields.weight.description'),
          thumbLabel: true,
          step: 0.1,
          max: 10,
          required: true
        },
        expressionProperties: {
          'templateOptions.label': model => `${this.translate.instant('bets.profile.pregnancy.fields.weight.label')}: ${model?.weight}`
        }
      },
      {
        key: 'height',
        type: 'slider',
        defaultValue: 0,
        templateOptions: {
          label: this.translate.instant('bets.profile.pregnancy.fields.height.label'),
          description: this.translate.instant('bets.profile.pregnancy.fields.height.description'),
          thumbLabel: true,
          step: 1,
          max: 100,
          required: true
        },
        expressionProperties: {
          'templateOptions.label': model => `${this.translate.instant('bets.profile.pregnancy.fields.height.label')}: ${model?.height}`
        }
      }
    ];
  }

  completeBet(openBetsData: BetResponse[]): Bet[] {
    const result: Bet[] = (openBetsData || []).map(betData => {
      return <Bet>{
        profile: this.getProfile(betData.profileId),
        config: {
          id: 'fdlkajsdlfjasdlfjalksdjflkjasdklfjakdsjfljasdkjflka',
          ownerName: 'Fénix',
          startDate: new Date(),
          endDate: new Date(),
          name: 'Embarazo Laura y Miki',
          status: {
            id: 1,
            name: 'active'
          },
          formlyData: {
            id: 0,
            model: betData.model,
            fields: this.getBetProfileFields(betData.profileId),
            form: new FormGroup({}),
            options: {}
          }
        }
      };
    });
    return result;
  }

  getProfile(profileId: string): BetProfile | undefined {
    return this.betsProfiles?.find(profile => profile?.id === profileId);
  }

  getBetConfigFormly(): FormlyData {
    return {
      id: 0,
      fields: this.getBetConfigFormlyFields(),
      form: new FormGroup({}),
      model: {},
      options: {}
    };
  }

  getBetConfigFormlyFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'ownerName',
        type: 'input',
        templateOptions: {
          label: this.translate.instant('bets.creation.fields.ownerName.label'),
          placeholder: this.translate.instant('bets.creation.fields.ownerName.placeholder'),
          description: this.translate.instant('bets.creation.fields.ownerName.description'),
          readonly: true,
          required: true
        }
      },
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: this.translate.instant('bets.creation.fields.name.label'),
          placeholder: this.translate.instant('bets.creation.fields.name.placeholder'),
          description: this.translate.instant('bets.creation.fields.name.description'),
          max: 50,
          required: true
        }
      },
      {
        fieldGroup: [
          {
            key: 'startDate',
            type: 'datepicker',
            templateOptions: {
              label: this.translate.instant('bets.creation.fields.startDate.label'),
              placeholder: this.translate.instant('bets.creation.fields.startDate.placeholder'),
              description: this.translate.instant('bets.creation.fields.startDate.description'),
              required: true,
              datepickerOptions: {
                min: new Date()
              }
            }
          },
          {
            key: 'endDate',
            type: 'datepicker',
            templateOptions: {
              label: this.translate.instant('bets.creation.fields.endDate.label'),
              placeholder: this.translate.instant('bets.creation.fields.endDate.placeholder'),
              description: this.translate.instant('bets.creation.fields.endDate.description'),
              datepickerOptions: {
                min: new Date()
              }
            }
          }
        ]
      }
    ];
  }
}

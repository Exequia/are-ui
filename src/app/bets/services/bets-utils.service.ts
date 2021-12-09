import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { DataTable } from 'app/shared/models/dataTable';
import { FormlyData } from 'app/shared/models/formlyData';
import { UtilsService } from 'app/shared/services/utils/utils.service';
import { AppData } from 'app/users/models/user';
import { has, isArray, isEqual } from 'lodash';
import { take } from 'rxjs/operators';
import * as fromRoot from 'store';
import { getBetsProfiles } from 'store';
import { AllBetResponse, Bet, BetResponse } from '../models/bet';
import { BetConfig } from '../models/betConfig';
import { BetProfile, BetProfileId } from '../models/betProfile';

@Injectable({
  providedIn: 'root'
})
export class BetsUtilsService {
  private betsProfiles: BetProfile[] | undefined;

  constructor(private translate: TranslateService, private store: Store<fromRoot.RootState>, private utils: UtilsService) {
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
      id: 0,
      formlyData,
      name: '',
      ownerName: user?.alias,
      startDate: new Date(),
      statusId: 0,
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

  getBetProfileFields(profile: BetProfileId | string): FormlyFieldConfig[] {
    let fields: FormlyFieldConfig[];
    switch (profile) {
      case BetProfileId.pregnancy:
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
          label: this.translate.instant('bets.fields.name.label'),
          placeholder: this.translate.instant('bets.fields.name.placeholder'),
          required: true
        }
      },
      {
        key: 'sex',
        type: 'select',
        templateOptions: {
          label: this.translate.instant('bets.fields.sex.label'),
          placeholder: this.translate.instant('bets.fields.sex.placeholder'),
          description: this.translate.instant('bets.fields.sex.description'),
          options: [
            { label: this.translate.instant('bets.fields.sex.options.male'), value: 'male' },
            { label: this.translate.instant('bets.fields.sex.options.female'), value: 'female' }
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
              label: this.translate.instant('bets.fields.birthDate.label'),
              placeholder: this.translate.instant('bets.fields.birthDate.placeholder'),
              description: this.translate.instant('bets.fields.birthDate.description'),
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
              label: this.translate.instant('bets.fields.birthTime.label'),
              placeholder: this.translate.instant('bets.fields.birthTime.placeholder'),
              description: this.translate.instant('bets.fields.birthTime.description'),
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
          label: this.translate.instant('bets.fields.weight.label'),
          description: this.translate.instant('bets.fields.weight.description'),
          thumbLabel: true,
          step: 0.1,
          max: 10,
          required: true
        },
        expressionProperties: {
          'templateOptions.label': model => `${this.translate.instant('bets.fields.weight.label')}: ${model?.weight}`
        }
      },
      {
        key: 'height',
        type: 'slider',
        defaultValue: 0,
        templateOptions: {
          label: this.translate.instant('bets.fields.height.label'),
          description: this.translate.instant('bets.fields.height.description'),
          thumbLabel: true,
          step: 1,
          max: 100,
          required: true
        },
        expressionProperties: {
          'templateOptions.label': model => `${this.translate.instant('bets.fields.height.label')}: ${model?.height}`
        }
      }
    ];
  }

  completeBets(openBetsData: BetResponse[]): Bet[] {
    const result: Bet[] = (openBetsData || []).map(betData => {
      const model = this.utils.parseResponseString(betData?.model);
      const fields = this.updateLabels(this.utils.parseResponseString(betData?.fields));
      const betModel = !!betData.addedBet ? this.utils.parseResponseString(betData.addedBet) : {};
      return <Bet>{
        profile: this.getProfile(betData.profileId),
        config: {
          id: betData.id,
          startDate: new Date(model.startDate),
          endDate: model.endDate,
          name: model.name,
          ownerName: model.ownerName,
          statusId: betData.statusId,
          isNew: isEqual(betModel, {}),
          formlyData: {
            id: 0,
            model: betModel,
            fields,
            form: new FormGroup({}),
            options: {}
          },
          isMyBet: 0 === betData.ownerId
        }
      };
    });
    const sort = result.sort(this.compareDate);
    return sort;
  }

  updateLabels(dirtyFields: FormlyFieldConfig[]): FormlyFieldConfig[] {
    return (dirtyFields || []).map(field => {
      if (has(field, 'fieldGroup')) {
        field.fieldGroup = field.fieldGroup && this.updateLabels(field.fieldGroup);
      } else {
        field.templateOptions = this.updateFieldLabels(field.key?.toString(), field.templateOptions);
      }
      return field;
    });
  }

  updateFieldLabels(fieldKey: string = '', templateOptions: FormlyTemplateOptions | undefined): FormlyTemplateOptions | undefined {
    if (!!templateOptions?.label) {
      templateOptions.label = this.translate.instant(`bets.fields.${fieldKey}.label`);
    }
    if (!!templateOptions?.placeholder) {
      templateOptions.placeholder = this.translate.instant(`bets.fields.${fieldKey}.placeholder`);
    }
    if (!!templateOptions?.description) {
      templateOptions.description = this.translate.instant(`bets.fields.${fieldKey}.description`);
    }
    if (!!templateOptions?.options && isArray(templateOptions.options)) {
      templateOptions.options = (templateOptions.options || []).map(option => ({
        ...option,
        label: this.translate.instant(`bets.fields.${fieldKey}.options.${option.value}`)
      }));
    }
    return templateOptions;
  }

  parseAllBetsResponse(betReponse: BetResponse): BetResponse {
    const cleanBet = { ...betReponse, allBets: this.parseAllBets(betReponse?.allBets) };
    if (betReponse?.results) {
      const result = this.parseAllBetsModel(betReponse?.results);
      const betResult: AllBetResponse = {
        userName: this.translate.instant(`bets.dashboard.results.title`),
        model: result,
        isResult: true
      };
      cleanBet.allBets = [betResult, ...(cleanBet?.allBets || [])];
    }
    return cleanBet;
  }

  parseAllBets(allBets: AllBetResponse[] | undefined): AllBetResponse[] {
    return (allBets || []).map(bet => {
      return <AllBetResponse>{ ...bet, model: this.parseAllBetsModel(bet?.model) };
    });
  }

  parseAllBetsModel(model: any): string {
    const modelObject = this.utils.parseResponseString(model);
    if (!!modelObject.sex) {
      modelObject.sex = this.translate.instant(`bets.fields.sex.options.${modelObject.sex}`);
    }
    return JSON.stringify(modelObject);
  }

  private sortByStartDate(a: Bet, b: Bet) {
    return b.config.startDate!.getTime() > a.config.startDate!.getTime() ? 1 : 0;
  }

  private compareDate(a: Bet, b: Bet): number {
    let d1 = a.config.startDate!;
    let d2 = b.config.startDate!;

    let same = d1.getTime() === d2.getTime();
    if (same) return 0;
    if (d1 > d2) return -1;
    return 1;
  }

  getProfile(profileId: BetProfileId): BetProfile | undefined {
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
    const today = new Date();
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
            defaultValue: today,
            templateOptions: {
              label: this.translate.instant('bets.creation.fields.startDate.label'),
              placeholder: this.translate.instant('bets.creation.fields.startDate.placeholder'),
              description: this.translate.instant('bets.creation.fields.startDate.description'),
              required: true,
              datepickerOptions: {
                min: today
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
                min: today
              }
            }
          }
        ]
      }
    ];
  }

  castBetResponseToTableData(betResponse: BetResponse | undefined): DataTable {
    const model: any = betResponse?.allBets ? betResponse?.allBets[0]?.model : '{}';
    const columnsNames: string[] = ['userName', ...Object.keys(this.utils.parseResponseString(model))];
    const columns: TableColumn[] = columnsNames.map(columnName => ({ prop: columnName, name: this.translate.instant(`bets.fields.${columnName}.label`) } as TableColumn));
    columns[0].frozenLeft = true;
    const rows = (betResponse?.allBets || []).map(bet => ({
      userName: bet?.userName || '',
      ...this.utils.parseModel(bet?.model || '{}'),
      isMyBet: bet?.isMyBet || false,
      isResult: bet?.isResult || false
    }));
    return <DataTable>{ columns, rows };
  }
}

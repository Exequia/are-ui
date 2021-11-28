import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  parseResponseString(response: string): any {
    return JSON.parse((response || '{}').replace(/'/g, '"'));
  }

  parseModel(modelString: string): any {
    const basicModel = this.parseResponseString(modelString);
    let model: any = {};
    for (const [key, value] of Object.entries(basicModel)) {
      model[key] = this.parseValue(value);
    }
    return model;
  }

  parseValue(value: any): any {
    if (isNaN(value)) {
      return this.parseStringDateToDate(value.toString());
    } else {
      return value;
    }
  }

  parseStringDateToDate(stringDate: string): any {
    const date: any = stringDate.length - 1 === stringDate.indexOf('Z') ? new Date(stringDate.toString()) : stringDate;
    return isNaN(date) ? stringDate : (date as Date).toLocaleDateString();
  }
}

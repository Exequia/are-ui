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
    return this.parseStringDateToDate(value);
  }

  parseStringDateToDate(stringDate: string): any {
    const date: any = new Date(stringDate);
    return isNaN(date) ? stringDate : (date as Date).toLocaleDateString();
  }
}

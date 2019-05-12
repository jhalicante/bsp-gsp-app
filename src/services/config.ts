import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  public apiUrl    : string;

  constructor() {
    this.apiUrl = 'http://localhost:8888/bsp-gsp-web/api/v1';
  }

}

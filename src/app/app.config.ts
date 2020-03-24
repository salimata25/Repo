import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { IAppConfig } from './model/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  static settings: IAppConfig;

  constructor(private http: HttpClient) {
    console.log("----RESPONSIVE --- tscreen: ", window.innerWidth)
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  /******** RESPONSIVES *********/
    
  private isMobileResolution: boolean;


  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  load() {
    const jsonFile = `assets/config/config.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
        AppConfig.settings = <IAppConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }

}

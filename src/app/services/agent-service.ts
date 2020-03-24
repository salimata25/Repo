/**
 * Created by PC on 28/03/2019.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { SessionService } from "./sessionService";
import { Observable } from "rxjs";
import { AppService } from '../app-service';

@Injectable()
export class AgentProvider  extends AppService {

  _api: string = this._url + "agent/";

  constructor( public http: HttpClient, private sessPrv: SessionService ) { 
    super();
  }

  /// Consumers timbre
  findTimbre(body: any): Observable<any> {
    body.token = this.sessPrv.getTheToken();
    return this.http.post<any>(this._api+"find/timbre", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 findTimbre", data)
      }),
      map(res => {
        return res;
      })
    )
  }

  consommerTimbre(body: any): Observable<any> {
    body.token = this.sessPrv.getTheToken();
    return this.http.post<any>(this._api+"consommer/timbre", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 consommerTimbre", data)
      }),
      map(res => {
        return res;
      })
    )
  }





}

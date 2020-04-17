/** 
 * Created by PC on 28/03/2019.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import {SessionService} from "./sessionService";
import {Observable} from "rxjs";
import { AppService } from '../app-service';

@Injectable()
export class TransactionsProvider extends AppService {
 
  _api: string = this._url + "agent/";

  constructor( public http: HttpClient, private sessPrv: SessionService ) { 
    super();
  }

  findTimbre(body: any): Observable<any> {
    body.token = this.sessPrv.getTokenAndLogin().token;
    body.login = this.sessPrv.getTokenAndLogin().login;
    console.log("findTimbre ", body)
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
    body.token = this.sessPrv.getTokenAndLogin().token;
    body.login = this.sessPrv.getTokenAndLogin().login;
    console.log("consommerTimbre ", body)
    return this.http.post<any>(this._api+"consommer/timbre", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 findTimbre", data)
      }),
      map(res => {
        return res;
      })
    )
  }

  vendreTimbre(body: any): Observable<any> {
    body.token = this.sessPrv.getTokenAndLogin().token;
    body.login = this.sessPrv.getTokenAndLogin().login;
    console.log("vendreTimbre ", body)
    return this.http.post<any>(this._api+"acheter/timbre", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 vendreTimbre", data)
      }),
      map(res => {
        return res;
      })
    )
  }

  vendreQuittance(body: any): Observable<any> {
    body.token = this.sessPrv.getTokenAndLogin().token;
    body.login = this.sessPrv.getTokenAndLogin().login;
    console.log("vendreQuittance ", body)
    return this.http.post<any>(this._api+"acheter/quittance", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 vendreQuittance", data)
      }),
      map(res => {
        return res;
      })
    )
  }

  envoyerMail(body: any): Observable<any> {
    body.token = this.sessPrv.getTokenAndLogin().token;
    body.login = this.sessPrv.getTokenAndLogin().login;
    console.log("findTimbre ", body)
    return this.http.post<any>(this._api+"envoi/recu", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 findTimbre", data)
      }),
      map(res => {
        return res;
      })
    )
  }
  
  listTransactionUsagerGlobal(body: any): Observable<any> {
    body.token = this.sessPrv.getTheToken();
    console.log("listTransactionUsagerGlobal ", body)
    return this.http.post<any>(this._api+"listTransactionUsagerGlobal", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 listTransactionUsagerGlobal", data)
      }),
      map(res => {
        return res;
      })
    )
  }
  
  listTransactionTfeGlobal(body: any): Observable<any> {
    body.token = this.sessPrv.getTheToken();
    console.log("listTransactionTfeGlobal ", body)
    return this.http.post<any>(this._api+"listTransactionTfeGlobal", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 listTransactionTfeGlobal", data)
      }),
      map(res => {
        return res;
      })
    )
  }
  
  listTransactionQuittances(body: any): Observable<any> {
  body.token = this.sessPrv.getTheToken();
  console.log("listTransactionQuittances ", body)
  return this.http.post<any>(this._api+"listTransactionQuittances", body, { headers: this._headers }).pipe(
    tap((data:any) => {
      console.log("Test 3 listTransactionQuittances", data)
    }),
    map(res => {
      return res;
    })
  )
}

listTransactionTimbres(body: any): Observable<any> {
  body.token = this.sessPrv.getTheToken();
  console.log("listTransactionTimbres ", body)
  return this.http.post<any>(this._api+"listTransactionTimbres", body, { headers: this._headers }).pipe(
    tap((data:any) => {
      console.log("Test 3 listTransactionTimbres", data)
    }),
    map(res => {
      return res;
    })
  )
}

dashboardTotalForAgent(): Observable<any> {
  let body:any = {token:this.sessPrv.getTheToken()};
  console.log("dashboardTotalForAgent ", body)
  return this.http.post<any>(this._api+"dashboard-total-for-agent", body, { headers: this._headers }).pipe(
    tap((data:any) => {
      console.log("Test dashboardTotalForAgent ", data)
    }),
    map(res => {
      return res;
    })
  )
}




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { SessionService } from "./sessionService";
import { Observable } from "rxjs";
import { iSession } from "../interfaces/iSession";
import { AppService } from '../app-service';

@Injectable()
export class AuthProvider extends AppService {

  _api: string = this._url + "web/";

  constructor( public http: HttpClient, private sessPrv: SessionService ) { 
    super();
  }

  
  signin(body: {login: string, password: string}): Observable<iSession> {
    console.log('AuthProvider ', body, this._api+"connexion");
    return this.http.post<iSession>(this._api+"connexion", body, { headers: this._headers }).pipe(
      tap((auth:iSession) => {
        this.sessPrv.setSession({
          status: auth.status, 
          message: auth.message, 
          login: auth.login, 
          role: auth.role,
          firstName: auth.firstName,
          lastName: auth.lastName,
          token: auth.token 
        });

        console.log("signin", this.sessPrv.parseSession())
      }),
      map(res => {
        return res;
      })
    )
  }


  getUserInfo(): Observable<any> {
    let body = this.sessPrv.getToken();
    return this.http.post<any>(this._api+"userinfo", body, { headers: this._headers }).pipe(
      tap((data:any) => {
        console.log("Test 3 getUserInfo", data)
      }),
      map(res => {
        return res;
      })
    )
  }

  
  signout() {
      this.sessPrv.deleteSession();
  }

}

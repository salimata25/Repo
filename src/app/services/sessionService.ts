/**
 * Created by PC on 28/03/2019.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject, of} from 'rxjs';
import { iSession } from '../interfaces/iSession';

@Injectable()
export class SessionService {

  m_session$: Observable<iSession>;

  constructor() {
    this.m_session$ = new Subject<iSession>();
  }

  initSession() {
    this.m_session$ = of<iSession>(this.parseSession());
  }

  public parseSession(): iSession {
    let guid = localStorage.getItem('guid');
    return guid ? JSON.parse(guid) : null;
  }

  public getToken(): any {
    let guid = localStorage.getItem('guid');
    return guid ? {token:JSON.parse(guid).token} : {};
  }

  public getTheToken(): any {
    let guid = localStorage.getItem('guid');
    return guid ? JSON.parse(guid).token : null;
  }

  getSession(): Observable<iSession> {
    let guid = localStorage.getItem('guid');
    if (guid) {
      this.initSession();
    }
    return this.m_session$
  }

  setSession(sess: iSession) {
    localStorage.setItem('guid', JSON.stringify(sess));
  }

  deleteSession() {
    localStorage.removeItem('guid')
  }


}

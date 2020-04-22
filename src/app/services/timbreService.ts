/**
 * Created by PC on 28/03/2019.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject, of} from 'rxjs';
import { TimbreModel } from '../model/timbreModel';

@Injectable()
export class TimbreService {

  m_timbre$: Observable<TimbreModel>;

  initierTimbre = {
    type: null,
    libelle: null,
    prixU: null,
    quantite: null,
    prixTotal:  null
  }

  constructor() {
    this.m_timbre$ = new Subject<TimbreModel>();
  }

  initTimbre() {
    this.m_timbre$ = of<TimbreModel>(this.parseTimbre());
  }

  public parseTimbre(): TimbreModel {
    let timbre = localStorage.getItem('timbre');
    return timbre ? JSON.parse(timbre) : this.initierTimbre;
  }

  public getTimbre(): any {
    let timbre = localStorage.getItem('timbre');
    return timbre ? {operation:JSON.parse(timbre)} : {};
  }

  getTimbres(): Observable<TimbreModel> {
    let timbre = localStorage.getItem('timbre');
    if (timbre) {
      this.initTimbre();
    }
    return this.m_timbre$
  }
 
  setTimbre(sess:TimbreModel) {
    localStorage.setItem('timbre', JSON.stringify(sess));
  }

  deleteTimbre() {
    localStorage.removeItem('timbre')
  }

}

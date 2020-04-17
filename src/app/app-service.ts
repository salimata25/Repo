import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppConfig } from './app.config';
import { Session } from './model/Session';

@Injectable({
  providedIn: 'root'
})
export class AppService{

  _headers: HttpHeaders = new HttpHeaders();
  _url: string = AppConfig.settings.env.ipAddress +"/tfe/";

  constructor() { 
    this._headers = this._headers.set('Content-Type', 'application/json');
    this._headers = this._headers.set('Access-Control-Allow-Origin', '*');
  }

  

  
  convertDate(date: string) {
    function format(num) { return (num < 10) ? '0' + num : num; }
    const d = new Date(date);
    return [format(d.getDate()), format(d.getMonth() + 1), d.getFullYear()].join('-');
  }
  
  formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();
    function format(num) { return (num < 10) ? '0' + num : num; }
    day = format(day);
    month = format(month + 1);
    return [day, month, year].join('-');
  }
 

language = {
  'lengthMenu': 'Afficher _MENU_ lignes par page',
  'zeroRecords': 'Pas de données correspondant',
  'info': 'Affichage de _PAGE_ de _PAGES_',
  'infoEmpty': 'Pas de données disponible',
  'search': 'Rechercher&nbsp;:',
  'infoFiltered': '(filtered from _MAX_ total records)',
  'paginate': {
    'first': 'Premier',
    'previous': 'Pr&eacute;c&eacute;dent',
    'next': 'Suivant',
    'last': 'Dernier'
  }
};



}

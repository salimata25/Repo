/**
 * Created by PC on 28/03/2019.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject, of} from 'rxjs';
import { iOperation } from '../interfaces/iOperation';

@Injectable()
export class OperationService {

  m_operation$: Observable<iOperation>;

  initOp = {
    status: null,
    message: null,
    numeroTransaction: null,
    numeroDossier: null,
    codeVendeur : null,
    expirationDate : null,
    libelle : null,
    numero : null,
    prixU : null,
    quantite : null,
    transactionDate : null
  }

  constructor() {
    this.m_operation$ = new Subject<iOperation>();
  }

  initOperation() {
    this.m_operation$ = of<iOperation>(this.parseOperation());
  }

  public parseOperation(): iOperation {
    let op = localStorage.getItem('operation');
    return op ? JSON.parse(op) : this.initOp;
  }

  public getOperation(): any {
    let op = localStorage.getItem('operation');
    return op ? {operation:JSON.parse(op)} : {};
  }

  getOperations(): Observable<iOperation> {
    let op = localStorage.getItem('operation');
    if (op) {
      this.initOperation();
    }
    return this.m_operation$
  }
 
  setOperation(sess:iOperation) {
    localStorage.setItem('operation', JSON.stringify(sess));
  }

  deleteOperation() {
    localStorage.removeItem('operation')
  }

}

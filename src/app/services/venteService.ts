/**
 * Created by PC on 28/03/2019.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject, of} from 'rxjs';
import { iTransaction } from '../interfaces/iTransaction';

@Injectable()
export class VenteService {

  m_transaction$: Observable<iTransaction>;

  initTrans = {
    transactionType: null, //1
    
    moyenReception:null, //3
    emailReception:null,
    telReception:null,

    montantTotal: null,

    infoQuittance:  [], //2
    panierTimbre:  [],
    reponseTimbre: [],
    reponseQuittance: [],
    
    modePaiement:null,
    moyenPaiement:null,

    codeServer:null,
    messageServer:null,

    codeVendeur: null
  }

  constructor() {
    this.m_transaction$ = new Subject<iTransaction>();
  }

  initTransaction() {
    this.m_transaction$ = of<iTransaction>(this.parseTransaction());
  }

  public parseTransaction(): iTransaction {
    let transaction = localStorage.getItem('transaction');
    return transaction ? JSON.parse(transaction) : this.initTrans;
  }

  public getTransaction(): any {
    let transaction = localStorage.getItem('transaction');
    return transaction ? {operation:JSON.parse(transaction)} : {};
  }

  getTransactions(): Observable<iTransaction> {
    let transaction = localStorage.getItem('transaction');
    if (transaction) {
      this.initTransaction();
    }
    return this.m_transaction$
  }
 
  setTransaction(sess:iTransaction) {
    localStorage.setItem('transaction', JSON.stringify(sess));
  }

  deleteTransaction() {
    localStorage.removeItem('transaction')
  }

}

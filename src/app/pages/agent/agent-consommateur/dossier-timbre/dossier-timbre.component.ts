import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../../../../services/operationService';
import { FormGroup } from '@angular/forms';
import { TransactionsProvider } from '../../../../services/transactions-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from '../../../../services/sessionService';

@Component({
  selector: 'app-dossier-timbre',
  templateUrl: './dossier-timbre.component.html',
  styleUrls: ['./dossier-timbre.component.scss']
})
export class DossierTimbreComponent implements OnInit {
  contenu = 0;
  error =  false;
  message =  "";

  dataOperation: any = {};
  dataUser: any = {};
  numeroDossier:number;

  constructor (private spinner: NgxSpinnerService, private router: Router, private opPrv: OperationService, public api: TransactionsProvider, private sessPrv: SessionService) { 
    this.dataOperation = this.opPrv.parseOperation();
    this.dataUser = this.sessPrv.parseSession();
  }

  retour() {
    this.router.navigate(['/consommateur/numero-timbre']);
  }

  valider() {
    this.dataOperation.numeroDossier = this.numeroDossier;
    console.log("dataOperation ",this.dataOperation);
    this.opPrv.setOperation(this.dataOperation);
    this.onSelected(2);
  }


  affecterDossier() {
    console.log("numeroDossier", this.numeroDossier)
    this.error = false;
    this.spinner.show();
    this.api.consommerTimbre({numeroTransaction: this.dataOperation.numeroTransaction})
      .subscribe(
        data => {
          console.log("consommerTimbre ",data);
          if(data==null || data.status!=0) {
            console.log('error  ', data);
            this.error = true;
            this.message = data.message;
          }else {
            
            this.router.navigate(['/consommateur/impression']);
            
          }
        },
        error => {
          console.log('error  ', error)
          this.error = true;
          this.message = "Erreur server. veuillez reessayer ulterieurement"
        },
        () => this.spinner.hide()
      );
  }

  
  onSelected (contenu) {
    this.contenu = contenu; 
  }

  ngOnInit() {
  }

}

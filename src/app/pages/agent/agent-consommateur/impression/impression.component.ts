import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../../../../services/operationService';
import { NgxSpinnerService } from 'ngx-spinner';
import { TransactionsProvider } from '../../../../services/transactions-service';
import { SessionService } from '../../../../services/sessionService';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.scss']
})
export class ImpressionComponent implements OnInit {
  error =  false;
  message =  "";
  receptionRecu: string;
  dataOperation: any = {};
  dataUser: any = {};
  
  constructor (private spinner: NgxSpinnerService, private router: Router, private opPrv: OperationService, public api: TransactionsProvider, private sessPrv: SessionService) {
    this.dataOperation = this.opPrv.parseOperation();
   }

   affecterDossier() {
    console.log("numeroDossier", this.receptionRecu)
    this.error = false;
    this.spinner.show();
    this.api.envoyerMail({numeroTransaction: this.dataOperation.numeroTransaction})
      .subscribe(
        data => {
          console.log("consommerTimbre ",data);
          if(data==null || data.status!=0) {
            console.log('error  ', data);
            this.error = true;
            this.message = data.message;
          }else {
            
            this.router.navigate(['/impression']);
            
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

  retour() {
    this.router.navigate(['/dossier-timbre']);
  }

  ngOnInit() {
  }

  

}

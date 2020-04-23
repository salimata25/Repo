import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../../../../services/operationService';
import { NgxSpinnerService } from 'ngx-spinner';
import { TransactionsProvider } from '../../../../services/transactions-service';
import { SessionService } from '../../../../services/sessionService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.scss']
})
export class ImpressionComponent implements OnInit {
  error =  false;
  message =  "";
  
  EmailForm: FormGroup;

  moyenReceptionRecuConsumer: "email";
  dataOperation: any = {};
  dataUser: any = {};
  
  constructor (private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private router: Router, private opPrv: OperationService, public api: TransactionsProvider, private sessPrv: SessionService) {
    this.dataOperation = this.opPrv.parseOperation();
    this.EmailForm = this.formBuilder.group({ 
      receptionRecuConsumer: [ '', Validators.required ]
    })
   }

   envoiMail() {
    console.log("emailForm", this.EmailForm.value)
    this.error = false;
    if(this.EmailForm.valid) {
      this.spinner.show();
      this.api.envoyerMail({receptionRecuConsumer: this.EmailForm.value[0], numeroTransaction: this.dataOperation.numeroTransaction, moyenReceptionRecuConsumer: this.moyenReceptionRecuConsumer})
        .subscribe(
          data => {
            console.log("envoyerEmail ",data);
            if(data==null || data.status!=0) {
              console.log('error  ', data);
              this.error = true;
              this.message = data.message;
            }else {
              // this.dataOperation.receptionRecuConsumer = this.EmailForm.value;
              // this.dataOperation.moyenReceptionRecuConsumer = this.moyenReceptionRecuConsumer;

              console.log("dataOperation ",this.dataOperation);
              //this.opPrv.setOperation(this.dataOperation);
            }
          },
          error => {
            console.log('error  ', error)
            this.error = true;
            this.message = "Erreur server. veuillez reessayer ulterieurement"
          },
          () => this.spinner.hide()
        );
    }else{
      alert("Veuillez remplir correctement les champs");
    }
  }

  retour() {
    this.router.navigate(['/consommateur/dossier-timbre']);
  }

  ngOnInit() {
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('imprimer').innerHTML;
    popupWin = window.open("", "ZoneImpr", "height=680, width=980,toolbar=0, menubar=0, scrollbars=1, resizable=1,status=0, location=0, left=10, top=10");
    popupWin.document.write(`
      <html>
        <head>
          <style>
            
            fieldset.ticket{
              margin: 0 auto; text-align:center;
            }
            fieldset.info_ticket{
              margin: 0 auto; text-align:left;
            }
            
                      
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}

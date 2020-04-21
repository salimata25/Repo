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
            //........Customized style.......
            // table.report-container {
            //   page-break-after:always;
            // }
            // thead.report-header {
            //   display:table-header-group;
            // }
            // tfoot.report-footer {
            //   display:table-footer-group;
            //   display: block;
            //   position: fixed;
            //   bottom: 0; left: 0; right: 0;
            // }
            // td.report-content-cell * table {
            //   border-collapse: collapse;
            // }
            // td.report-content-cell * table {
            //   border: 1px solid black;
            // }
            // td.report-content-cell * th {
            //   border: 1px solid black;
            // }
            // td.report-content-cell * td {
            //   border: 1px solid black;
            // }    

            //             /*
            // jksdddfjsfhjfhjghfjzhfjfjfhjfhjfjfhjhfjhf
            // jksdddfjsfhjfhjghfjzhfjfjfhjfhjfjfhjhfjhf
            // jksdddfjsfhjfhjghfjzhfjfjfhjfhjfjfhjhfjhf
            // jksdddfjsfhjfhjghfjzhfjfjfhjfhjfjfhjhfjhf
            // */
            // main *{
            //   margin: 10px;
            // }
            // main img {
            //   height: 100px;
            // }
            // main .clearfix:after {
            //   content: "";
            //   display: table;
            //   clear: both;
            // }
            // main #company {
            //   float: right;
            //   text-align: right;
            // }
            // main #client {
            //   padding-left: 6px;
            //   float: left;
            // }
            // main .name {
            //   font-size: 18px;
            //   font-weight: normal;
            // }
            // main div.name {
            //   margin-bottom: 15px;
            // }
            // main #invoice {
            //   float: right;
            //   text-align: right;
            // }
            // main table {
            //   width: 99%;
            //   border-collapse: collapse;
            //   border-spacing: 0;
            //   margin-bottom: 20px;
            //   border-bottom: 1px solid #FFFFFF;
            // }
            // main table th, main table td {
            //   padding: 20px;
            //   background: #EEEEEE;
            //   border-bottom: 1px solid #FFFFFF;
            //   font-size: 1.2em;
            //   text-align: right;
            //   border: 1px solid black;
            // }
            // main table tfoot td {
            //   padding: 10px 20px;
            //   background: #FFFFFF;
            //   border-bottom: none;
            //   font-size: 1.2em;
            //   white-space: nowrap;
            //   border-top: 1px solid #AAAAAA;
            // }
            // main table tfoot tr:last-child td {
            //   font-size: 1.4em;
            // }
            // main table tfoot tr td {
            //   border: none;
            // }
                      
                      </style>
                    </head>
                    <body onload="window.print();window.close()">${printContents}</body>
                  </html>`
    );
    popupWin.document.close();
  }

}

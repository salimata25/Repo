import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionsProvider } from '../../../../services/transactions-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OperationService } from '../../../../services/operationService';
//import { iOperation } from '../../../../interfaces/iOperation';


@Component({
  selector: 'app-numero-timbre',
  templateUrl: './numero-timbre.component.html',
  styleUrls: ['./numero-timbre.component.scss']
})
export class NumeroTimbreComponent implements OnInit {
  error =  false;
  message =  "";
  TimbreForm: FormGroup;
  dataOperation: any = {};
  contenu = 0;

  constructor(private spinner: NgxSpinnerService, private router: Router, private formBuilder: FormBuilder, public api: TransactionsProvider, private opPrv: OperationService) {
    this.dataOperation = this.opPrv.parseOperation();
    this.TimbreForm = this.formBuilder.group({ 
      numeroTransaction: [ '', Validators.required ]
    })
  }

  onSelected(contenu) {
    this.contenu = contenu;
  }

  findTimbre() {
    this.error = false;
    console.log(" this.TimbreForm.valu", this.TimbreForm.value);
    if(this.TimbreForm.valid) {
      this.spinner.show();
      if(this.dataOperation.typeDossier.indexOf("Passports") == -1) {
        this.api.findTimbre(this.TimbreForm.value)
        .subscribe(
          data => {
            console.log("findTimbre ",data);
            if(data==null || data.status!=0){
              console.log('error  ', data)
              this.error = true;
              this.message = data.message
            }else{
              if(this.dataOperation.montantDossier === data.prixU) {
                //stock
                this.dataOperation.codeVendeur = data.codeVendeur.substring(1,data.codeVendeur.length)
                this.dataOperation.expirationDate = data.expirationDate
                this.dataOperation.libelle = data.libelle
                this.dataOperation.numero = data.numero.substring(1,data.numero.length)
                this.dataOperation.numeroTransaction = data.numeroTransaction
                this.dataOperation.prixU = data.prixU
                this.dataOperation.quantite = data.quantite
                this.dataOperation.transactionDate = data.transactionDate.split(" ")[0]
                console.log("dataOperation ",this.dataOperation);
                this.opPrv.setOperation(this.dataOperation);
                this.router.navigate(['/consommateur/dossier-timbre']);
              } else {
                this.message = "Le montant est insuffisant";
                this.onSelected(1);
                setTimeout(
                  () => {
                    this.onSelected(0);
                  }, 3000
                );
              }
              
              
            }
          },
          error => {
            console.log('error  ', error)
            this.error = true;
            this.message = "Erreur server. veuillez reessayer ulterieurement"
          },
          () => this.spinner.hide()
        );
      } else {
        this.api.findQuittance(this.TimbreForm.value)
        .subscribe(
          data => {
            console.log("findQuittance ",data);
            if(data==null || data.status!=0){
              console.log('error  ', data)
              this.error = true;
              this.message = data.message
            }else{
              if(this.dataOperation.montantDossier === 20000) {
                //stock
                this.dataOperation.codeVendeur = data.codeVendeur.substring(1,data.codeVendeur.length)
                this.dataOperation.expirationDate = data.expirationDate
                this.dataOperation.libelle = data.libelle
                this.dataOperation.numero = data.numero.substring(1,data.numero.length)
                this.dataOperation.numeroTransaction = data.numeroTransaction
                this.dataOperation.prixU = 20000
                this.dataOperation.quantite = data.quantite
                this.dataOperation.transactionDate = data.transactionDate.split(" ")[0]
                console.log("dataOperation ",this.dataOperation);
                this.opPrv.setOperation(this.dataOperation);
                this.router.navigate(['/consommateur/dossier-timbre']);
              } else {
                this.message = "Le montant est insuffisant";
                this.onSelected(1);
                setTimeout(
                  () => {
                    this.onSelected(0);;
                  }, 3000
                );
              }
              
              
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
      
    }else{
      alert("Veuillez remplir correctement les champs");
    }
  }

  retour() {
    this.router.navigate(['/consommateur/type-consommation']);
  }

  valider() {
    
  }

  ngOnInit() {
  }

}

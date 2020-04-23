import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VenteService } from '../../../../services/venteService';
import { TransactionsProvider } from '../../../../services/transactions-service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {
  contenu = 0;
  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true
  };

  initTrans = {
    transactionType: null, //1
    
    moyenReception:null, //3
    emailReception:null,
    telReception:null,

    montantTotal: null,

    infoQuittance:  [], //2
    panierTimbre:  [],
    
    modePaiement:"CASH",
    moyenPaiement:"CASH",

    codeServer:null,
    messageServer:null
  }

  error =  false;
  message =  "";

  dataVente: any = {};

  constructor( private spinner: NgxSpinnerService, private modalService: BsModalService, private router: Router, private venteServ: VenteService, public api: TransactionsProvider) {
    this.dataVente = this.venteServ.parseTransaction();
    console.log("RecapitulatifComponent", this.dataVente)
  } 

  onSelected(contenu) {
    this.contenu = contenu;
  }

  retour() {
    this.router.navigate(['/vendeur/finalisation']);
  }

  retourAccueil() { 
    this.modalRef.hide();
    this.router.navigate(['/vendeur/list-timbres']);
  }

  ngOnInit() {
  }

  acheterTimbre() {
    console.log("RecapitulatifComponent donnees timbres", this.dataVente);
    this.error = false;
    this.spinner.show();
    if(this.dataVente.transactionType === "Timbres pour fiscal" || this.dataVente.transactionType === "Droits d'enregistrement" || this.dataVente.transactionType === "Mutation de véhicule"){
      this.api.vendreTimbre(this.dataVente)
      .subscribe(
        data => {
          this.spinner.hide()
          console.log("acheterTimbre ",data);
          if(data==null || data.status!=0) {
            console.log('error  ', data);
            this.error = true;
            this.message = data.message;
          }else {
            this.dataVente.reponseTimbre = data.respTimbres;
            this.dataVente.codeVendeur = data.codeVendeur.substring(2,data.codeVendeur.length)
            this.venteServ.setTransaction(this.dataVente);
            console.log("reponseTimbre ",this.dataVente.reponseTimbre);
            
            this.onSelected(1);
            setTimeout(
              () => {
                this.router.navigate(['/vendeur/impression']);
              }, 3000
            );

            // this.modalRef = this.modalService.show(
            //   template, 
            //   this.config
            //   // {class: 'modal-dialog-centered'},
            // );
            
          }
          
        },
        error => {
          console.log('error  ', error)
          this.error = true;
          this.message = "Erreur server. veuillez reessayer ulterieurement"
          this.spinner.hide()
        }
      );
    } else {
      this.api.vendreQuittance(this.dataVente)
      .subscribe(
        data => {
          this.spinner.hide()
          console.log("acheterQuittance ",data);
          if(data==null || data.codeServer!=0) {
            console.log('error  ', data);
            this.error = true;
            this.message = data.messageServer;
          }else {
            
            this.dataVente.reponseQuittance = data.infoQuittance;
            this.dataVente.reponseQuittance[0].codeVendeur = data.codeVendeur;
            this.venteServ.setTransaction(this.dataVente);
            console.log("reponseQuittance ",this.dataVente.reponseQuittance);
            this.onSelected(1);
            setTimeout(
              () => {
                this.router.navigate(['/vendeur/impression']);
              }, 3000
            );
            
            // this.modalRef = this.modalService.show(
            //   template, 
            //   this.config
            //   // {class: 'modal-dialog-centered'},
            // );
            
          }
        },
        error => {
          this.spinner.hide()
          console.log('error  ', error)
          this.error = true;
          this.message = "Erreur server. veuillez reessayer ulterieurement"
        }
      );
    }
        
  }

}

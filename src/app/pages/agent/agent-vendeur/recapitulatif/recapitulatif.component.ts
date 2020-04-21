import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VenteService } from '../../../../services/venteService';
import { TransactionsProvider } from '../../../../services/transactions-service';

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

  error =  false;
  message =  "";

  dataVente: any = {};

  constructor( private modalService: BsModalService, private router: Router, private venteServ: VenteService, public api: TransactionsProvider) {
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
    if(this.dataVente.transactionType === "Timbres pour fiscal" || this.dataVente.transactionType === "Droits d'enregistrement" || this.dataVente.transactionType === "Droits de mutation"){
      this.api.vendreTimbre(this.dataVente)
      .subscribe(
        data => {
          console.log("acheterTimbre ",data);
          if(data==null || data.status!=0) {
            console.log('error  ', data);
            this.error = true;
            this.message = data.message;
          }else {
            
            this.onSelected(1);
            setTimeout(
              () => {
                this.router.navigate(['/vendeur/list-timbres']);
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
        }
      );
    } else {
      this.api.vendreQuittance(this.dataVente)
      .subscribe(
        data => {
          console.log("acheterQuittance ",data);
          if(data==null || data.codeServer!=0) {
            console.log('error  ', data);
            this.error = true;
            this.message = data.messageServer;
          }else {

            this.onSelected(1);
            setTimeout(
              () => {
                this.router.navigate(['/vendeur/list-timbres']);
              }, 10000
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
        }
      );
    }
        
  }

}

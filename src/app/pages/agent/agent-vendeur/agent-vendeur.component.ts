import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { TimbreService } from '../../../services/timbreService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { VenteService } from '../../../services/venteService';

@Component({
  selector: 'app-agent-vendeur',
  templateUrl: './agent-vendeur.component.html',
  styleUrls: ['./agent-vendeur.component.scss']
})
export class AgentVendeurComponent implements OnInit {
  dataTimbre: any = {};
  QuittanceForm: FormGroup; 
  dataVente: any = {};

  modalRef: BsModalRef;

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
  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private router: Router, private timbreServ: TimbreService, private venteServ: VenteService) {
    this.dataTimbre = this.timbreServ.parseTimbre();
    this.dataVente = this.venteServ.parseTransaction();
    console.log("AgentVendeurComponent dataVente ", this.dataVente)
    this.QuittanceForm = this.formBuilder.group({ 
      firstName: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      phone: [ '', Validators.required ],
      nin: [ '', Validators.required ]
    })
  } 


  

  ajouterTimbre(prix) {
    if(this.dataVente.infoQuittance.length !== 0){
      this.dataVente = this.initTrans
    }
    this.dataVente.panierTimbre = [];
    this.dataTimbre.prixU = prix;
    this.dataTimbre.libelle = "Timbre " + prix;
    this.dataTimbre.type = "Timbre quotite";
    this.dataTimbre.quantite = 1;
    this.dataTimbre.prixTotal = this.dataTimbre.prixU * this.dataTimbre.quantite;
    console.log("dataTimbre ",this.dataTimbre);
    this.timbreServ.setTimbre(this.dataTimbre);
    
    this.dataVente.transactionType = "Timbres pour fiscal";
    this.dataVente.montantTotal = this.dataTimbre.prixTotal;
    this.dataVente.panierTimbre.push(this.dataTimbre);

    this.venteServ.setTransaction(this.dataVente);

    this.router.navigate(['/validation']);
  }

  retour() {
    this.modalRef.hide(); 
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>,) {
    if(this.dataVente.panierTimbre.length !== 0){
      this.dataVente = this.initTrans;
    }
    if(this.dataVente.infoQuittance.length !== 0){
      this.router.navigate(['/validation']);
    }
    else{
      this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
    }
    
  }

  validerQuittance() {
    if(this.QuittanceForm.valid) {
      this.dataVente.transactionType = "Timbres pour passeport";
      this.dataVente.montantTotal = 20000;
      this.dataVente.infoQuittance.push(this.QuittanceForm.value);

      this.venteServ.setTransaction(this.dataVente);
      console.log("dataQuittance ",this.dataVente);
      
      this.router.navigate(['/validation']);
      this.modalRef.hide();
    }else{
      alert("Veuillez remplir correctement les champs");
    }
  }

}

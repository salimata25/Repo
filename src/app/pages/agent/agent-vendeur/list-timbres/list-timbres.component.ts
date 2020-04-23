import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VenteService } from '../../../../services/venteService';
import { TimbreService } from '../../../../services/timbreService';

@Component({
  selector: 'app-list-timbres',
  templateUrl: './list-timbres.component.html',
  styleUrls: ['./list-timbres.component.scss']
})
export class ListTimbresComponent implements OnInit {

  contenu = 0;
  montant: number;

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
    this.venteServ.deleteTransaction();
    this.dataVente = this.venteServ.parseTransaction();
    console.log("AgentVendeurComponent dataVente ", this.dataVente)
    this.QuittanceForm = this.formBuilder.group({ 
      firstName: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      phone: [ '', Validators.required ],
      nin: [ '', Validators.required ]
    })
  } 

  saisirMontant(contenu) {
    this.contenu = contenu;
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

    this.router.navigate(['/vendeur/validation']);
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
      this.router.navigate(['/vendeur/validation']);
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
      
      this.router.navigate(['/vendeur/validation']);
      this.modalRef.hide();
    }else{
      alert("Veuillez remplir correctement les champs");
    }
  }

  droitEnregistrement() {
    this.dataTimbre.libelle = "Droits d'enregistrement";
    this.dataTimbre.type = "Droits d'enregistrement";
    this.dataTimbre.quantite = 1;
    console.log("dataTimbre ",this.dataTimbre);
    this.timbreServ.setTimbre(this.dataTimbre);

    this.dataVente.transactionType = "Droits d'enregistrement";
    this.venteServ.setTransaction(this.dataVente);

    this.saisirMontant(1);
  }

  droitMutation() { 
    this.dataTimbre.libelle = "Mutation de véhicule";
    this.dataTimbre.type = "Mutation de véhicule";
    this.dataTimbre.quantite = 1;
    console.log("dataTimbre ",this.dataTimbre);
    this.timbreServ.setTimbre(this.dataTimbre);

    this.dataVente.transactionType = "Mutation de véhicule";
    this.venteServ.setTransaction(this.dataVente);

    this.saisirMontant(1);
  }

  ajouterMontant() {
    if(this.dataVente.panierTimbre.length !== 0){
      this.dataVente.panierTimbre.pop();
    }
    if(this.dataVente.infoQuittance.length !== 0){
      this.dataVente.infoQuittance.pop();
    }
    this.dataTimbre.prixU = this.montant;
    this.dataTimbre.prixTotal = this.montant;
    console.log("dataTimbre ",this.dataTimbre);
    this.timbreServ.setTimbre(this.dataTimbre);

    this.dataVente.montantTotal = this.montant;
    this.dataVente.panierTimbre.push(this.dataTimbre);
    console.log("dataQuittance ",this.dataVente);
    this.venteServ.setTransaction(this.dataVente);

    this.router.navigate(['/vendeur/validation']);
  }

}

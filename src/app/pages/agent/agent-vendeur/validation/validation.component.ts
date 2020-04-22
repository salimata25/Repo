import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { TimbreService } from '../../../../services/timbreService';
import { VenteService } from '../../../../services/venteService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  dataTimbre: any = {};
  typeTimbre: "";
  dataVente: any = {};
  QuittanceForm: FormGroup;
  dataQuittance: any = [];
  somme: 0;

  modalRef: BsModalRef;
  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private router: Router, private timbreServ: TimbreService, private venteServ: VenteService) {
    this.dataVente = this.venteServ.parseTransaction();
    this.dataTimbre = this.timbreServ.parseTimbre();
    this.typeTimbre = this.dataVente.transactionType;
    this.dataQuittance = this.dataVente.infoQuittance[0];

    this.QuittanceForm = this.formBuilder.group({ 
      firstName: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      phone: [ '', Validators.required ],
      nin: [ '', Validators.required ]
    })
  }
   
  retour() {
    this.router.navigate(['/vendeur/list-timbres']);
  }

  valider () {
    //this.dataVente.panierTimbre.push(this.dataTimbre);
    this.venteServ.setTransaction(this.dataVente);
    this.router.navigate(['/vendeur/finalisation']); 
  }

  validerQuittance() {
    
    this.venteServ.setTransaction(this.dataVente);
    this.router.navigate(['/vendeur/finalisation']);
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  modifierInfo() {
    if(this.QuittanceForm.valid) {
      this.dataVente.infoQuittance = [this.QuittanceForm.value];
      
      this.router.navigate(['/vendeur/validation']);
      this.modalRef.hide();
    }else{
      alert("Veuillez remplir correctement les champs");
    }
  }

  retourTalbleau() {
    this.modalRef.hide();
  }

}

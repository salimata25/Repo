import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  modalRef: BsModalRef;
  constructor( private modalService: BsModalService, private router: Router) {
    
  }
   
  retour() {
    this.router.navigate(['/vendeur']);
  }

  valider () {
    this.router.navigate(['/finalisation']);
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  ajouterAutre() {
    this.modalRef.hide();
  }

  retourTalbleau() {
    this.modalRef.hide();
  }

}

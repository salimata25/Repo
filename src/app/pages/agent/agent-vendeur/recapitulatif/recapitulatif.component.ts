import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true
  };
  constructor( private modalService: BsModalService, private router: Router) {
    
  } 

  retour() {
    this.router.navigate(['/finalisation']);
  }

  retourAccueil() {
    this.modalRef.hide();
    this.router.navigate(['/vendeur']);
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(
      template, 
      this.config
      // {class: 'modal-dialog-centered'},
    );
    
  }

}

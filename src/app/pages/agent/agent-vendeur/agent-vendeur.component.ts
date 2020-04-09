import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-vendeur',
  templateUrl: './agent-vendeur.component.html',
  styleUrls: ['./agent-vendeur.component.scss']
})
export class AgentVendeurComponent implements OnInit {

  modalRef: BsModalRef;
  constructor( private modalService: BsModalService, private router: Router) {
    
   } 

  valider() {
    this.router.navigate(['/validation']);
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

}

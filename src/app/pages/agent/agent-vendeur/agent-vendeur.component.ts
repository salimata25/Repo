import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-agent-vendeur',
  templateUrl: './agent-vendeur.component.html',
  styleUrls: ['./agent-vendeur.component.scss']
})
export class AgentVendeurComponent implements OnInit {

  modalRef: BsModalRef;
  constructor( private modalService: BsModalService) {
    
   } 

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

}

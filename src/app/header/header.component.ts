import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  modalRef: BsModalRef;
  constructor( private modalService: BsModalService) {
    
   } 

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

}

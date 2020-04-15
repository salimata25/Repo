import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef;
  dataUser: any = {};

  constructor( private modalService: BsModalService, private route: Router, private sessPrv: SessionService) {
    this.dataUser = this.sessPrv.parseSession();
    console.log("donnees utilisayeur", this.dataUser);
   } 

   vendeur() {
      this.route.navigate(['/vendeur']);
   }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

}

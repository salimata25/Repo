import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef;
  dataUser: any = {};

  constructor(private sessPrv: SessionService) {
    this.dataUser = this.sessPrv.parseSession();
    console.log("donnees utilisayeur", this.dataUser);
   } 

  ngOnInit() {
  }

}

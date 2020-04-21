import { Component, OnInit, Input } from '@angular/core';
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

  @Input() imageMenu: string = "agent_bg_achat_1.png";
  @Input() imageMenuTimbre: string = "agent_bg_timbre_1.png";

  constructor(private sessPrv: SessionService) {
    this.dataUser = this.sessPrv.parseSession();
    console.log("donnees utilisayeur", this.dataUser);
   } 

  ngOnInit() {
    console.log("HeaderComponent", this.imageMenu);
  }

}

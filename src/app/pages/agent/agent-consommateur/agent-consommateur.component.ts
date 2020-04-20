import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/sessionService';

@Component({
  selector: 'app-agent-consommateur',
  templateUrl: './agent-consommateur.component.html',
  styleUrls: ['./agent-consommateur.component.scss']
})
export class AgentConsommateurComponent implements OnInit {

  constructor(private sessPrv: SessionService) {

   }

  ngOnInit() {
    console.log("donnees user",this.sessPrv.parseSession()); 
  }

}

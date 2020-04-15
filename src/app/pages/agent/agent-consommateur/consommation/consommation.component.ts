import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../../../../services/operationService';
import { SessionService } from '../../../../services/sessionService';

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.scss']
})
export class ConsommationComponent implements OnInit {
  dataOperation: any = {};
  dataUser: any = {};

  constructor(private router: Router, private opPrv: OperationService, private sessPrv: SessionService ) { 
    this.dataOperation = this.opPrv.parseOperation();
    this.dataUser = this.sessPrv.parseSession();
  }

  retour() {
    this.router.navigate(['/consommateur']); 
  }

  ngOnInit() {
  }

  fctLibelle(libelle:string){
    console.log(libelle);
    this.dataOperation.libelleDossier = libelle;
    this.opPrv.setOperation(this.dataOperation);
  }

}

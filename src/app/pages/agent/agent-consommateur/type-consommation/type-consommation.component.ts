import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../../../../services/operationService';

@Component({
  selector: 'app-type-consommation',
  templateUrl: './type-consommation.component.html',
  styleUrls: ['./type-consommation.component.scss']
})
export class TypeConsommationComponent implements OnInit {

  dataOperation: any = {};
  constructor(private router: Router, private opPrv: OperationService) { 
    this.dataOperation = this.opPrv.parseOperation();
  }

  retour() {
    if(this.dataOperation.montantDossier == 0) {
      this.router.navigate(['/consommateur/list-enregistrements']);
    }else {
      this.router.navigate(['/consommateur/consommation']);
    }
    
  }

  saisirNumero() {
    this.router.navigate(['/consommateur/numero-timbre']);
  }

  scanner() {
    this.router.navigate(['/consommateur/scanner']);
  }

  ngOnInit() {
  }

}

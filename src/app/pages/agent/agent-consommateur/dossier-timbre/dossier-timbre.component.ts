import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../../../../services/operationService';

@Component({
  selector: 'app-dossier-timbre',
  templateUrl: './dossier-timbre.component.html',
  styleUrls: ['./dossier-timbre.component.scss']
})
export class DossierTimbreComponent implements OnInit {
  contenu = 0;
  dataOperation: any = {};
  numeroDossier:number
  constructor (private router: Router, private opPrv: OperationService) { 
    this.dataOperation = this.opPrv.parseOperation();

  }

  retour() {
    this.router.navigate(['/numero-timbre']);
  }

  valider() {
    this.dataOperation.numeroDossier = this.numeroDossier;
    this.router.navigate(['/impression']);
  }

  onSelected (contenu) {
    this.contenu = contenu; 
  }

  ngOnInit() {
  }

}

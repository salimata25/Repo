import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../../../services/operationService';

@Component({
  selector: 'app-list-enregistrements',
  templateUrl: './list-enregistrements.component.html',
  styleUrls: ['./list-enregistrements.component.scss']
})
export class ListEnregistrementsComponent implements OnInit {
  enregistrement = "";
  montant = 0;
  dataOperation: any = {};
  constructor(private opPrv: OperationService) { 
    this.opPrv.deleteOperation();
    this.dataOperation = this.opPrv.parseOperation();
  }

  getEnregistrement(enregistrement) {
    this.enregistrement = enregistrement;

    if(this.enregistrement == "Passports") {
      this.montant = 20000;
      this.dataOperation.typeDossier = "Passports";
    }

    if(this.enregistrement == "Pari mutuel") {
      this.dataOperation.typeDossier = "Pari mutuel"
    }

    if(this.enregistrement == "Timbre de dimension") {
      this.dataOperation.typeDossier = "Timbre de dimension"
    }

    if(this.enregistrement == "Domaines privé non affecté de l'état") {
      this.dataOperation.typeDossier = "Domaines privé non affecté de l'état"
    }

    this.dataOperation.montantDossier = this.montant;
    this.dataOperation.enregistrement = this.enregistrement;
    console.log("dataOperation ",this.dataOperation);
    this.opPrv.setOperation(this.dataOperation); 
  }

  ngOnInit() {
  }

}

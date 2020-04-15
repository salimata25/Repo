import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../../../../services/operationService';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.scss']
})
export class ImpressionComponent implements OnInit {
  dataOperation: any = {};
  
  constructor (private router: Router, private opPrv: OperationService) {
    this.dataOperation = this.opPrv.parseOperation();
   }

  retour() {
    this.router.navigate(['/dossier-timbre']);
  }

  ngOnInit() {
  }

  

}

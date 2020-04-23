import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenteService } from '../../../../services/venteService';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.scss']
})
export class ImpressionComponent implements OnInit {

  dataVente: any = {};

  constructor(private router: Router, private venteServ: VenteService ) { 
    this.dataVente = this.venteServ.parseTransaction();
    
  }

  ngOnInit() {
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('imprimer').innerHTML;
    popupWin = window.open("", "ZoneImpr", "height=680, width=980,toolbar=0, menubar=0, scrollbars=1, resizable=1,status=0, location=0, left=10, top=10");
    popupWin.document.write(`
      <html>
        <head>
          <style>
            
            fieldset.ticket{
              margin: 0 auto; text-align:center;
            }
            fieldset.info_ticket{
              margin: 0 auto; text-align:left;
            }
            
                      
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}

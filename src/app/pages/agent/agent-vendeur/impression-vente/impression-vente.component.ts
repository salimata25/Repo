import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenteService } from '../../../../services/venteService';
declare var QRious: any;

@Component({
  selector: 'app-impression-vente',
  templateUrl: './impression-vente.component.html',
  styleUrls: ['./impression-vente.component.scss']
})
export class ImpressionVenteComponent implements OnInit {

  dataVente: any = {};
  heureVente = "";
  dateVente = "";
  

  constructor(private router: Router, private venteServ: VenteService ) { 
    this.dataVente = this.venteServ.parseTransaction();
    console.log("impression vente", this.dataVente);
    
    const dateString =this.dataVente.reponseTimbre[0]?this.dataVente.reponseTimbre[0].transactionDate.split(" ")[0]:this.dataVente.reponseQuittance[0].transactionDate.split(" ")[0] 
    const heureString =this.dataVente.reponseTimbre[0]?this.dataVente.reponseTimbre[0].transactionDate.split(" ")[1]:this.dataVente.reponseQuittance[0].transactionDate.split(" ")[1] 
    const regex = /\//gi;
    this.dateVente = dateString.replace(regex,'-');
    this.heureVente = heureString.substring(0,heureString.length-3)
  }

  ngOnInit() {
    var qr = new QRious({
      element: document.getElementById('qr'),
      value: 'Custom value'
      })
      qr.toDataURL()
  }

  

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('imprimer').innerHTML;
    popupWin = window.open("", "ZoneImpr", "height=680, width=980,toolbar=0, menubar=0, scrollbars=1, resizable=1,status=0, location=0, left=10, top=10");
    popupWin.document.write(`
      <html>
        <head>
          <style>
            form{
              border: none
            }
            .ticket {
              border: 0px solid black;
              
            }

            fieldset.ticket{
              border: none
              margin: 0 auto; text-align:center;
            }
            fieldset.info_ticket{
              margin: 0 auto; text-align:left;
            }

            hr {
              width : 40%;
            }
            
                      
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}

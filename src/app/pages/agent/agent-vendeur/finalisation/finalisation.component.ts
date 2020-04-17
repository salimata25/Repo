import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimbreService } from '../../../../services/timbreService';
import { VenteService } from '../../../../services/venteService';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-finalisation',
  templateUrl: './finalisation.component.html',
  styleUrls: ['./finalisation.component.scss']
})
export class FinalisationComponent implements OnInit {
  dataTimbre: any = {};
  dataVente: any = {};
  dataQuittance: any = {};
  EmailForm: FormGroup;
  SmsForm: FormGroup;

  emailReception: string;
  telReception: string;


  constructor(private router: Router, private timbreServ: TimbreService, private venteServ: VenteService, ) { 
    this.dataTimbre = this.timbreServ.parseTimbre();
    this.dataVente = this.venteServ.parseTransaction();

    // this.EmailForm = this.formBuilder.group({ 
    //   emailReception: [ '', Validators.required ],
    //   telReception: [ '', Validators.required ]
    // });
    // this.SmsForm = this.formBuilder.group({ 
    //   telReception: [ '', Validators.required ]
    // });
  }

  parEmail() {
    this.dataVente.moyenReception = "email";
    
    console.log("dataVente ",this.dataVente);
    this.venteServ.setTransaction(this.dataVente);
  }

  parSMS() {
    this.dataVente.moyenReception = "sms";
    
    console.log("dataVente ",this.dataVente);
    this.venteServ.setTransaction(this.dataVente);
  }

  retour() {
    this.router.navigate(['/validation']);
  }

  valider () {
    if(this.dataVente.moyenReception === "email") {
      this.dataVente.emailReception = this.emailReception;
    }else {
      this.dataVente.telReception = this.telReception;
    }
    
    this.dataVente.modePaiement = "CACH";
    this.dataVente.moyenPaiement = "CACH";
    console.log("dataVente ",this.dataVente);
    this.venteServ.setTransaction(this.dataVente);
    this.router.navigate(['/recapitulatif']);
  }

  ngOnInit() {
  }

}

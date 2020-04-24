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
  emailChecked = false;
  smsChecked = false;
  typeTimbre: string;
  message = "";
  errorEmail = false;
  errorTel = false;
  emailReception: string;
  telReception: string;
  confirmTel: string;
  confirmEmail: string;
  telSaisie: string;


  constructor(private router: Router, private timbreServ: TimbreService, private venteServ: VenteService ) { 
    this.dataTimbre = this.timbreServ.parseTimbre();
    this.dataVente = this.venteServ.parseTransaction();
    this.typeTimbre = this.dataVente.transactionType;

    // this.EmailForm = this.formBuilder.group({ 
    //   emailReception: [ '', Validators.required ],
    //   telReception: [ '', Validators.required ]
    // });
    // this.SmsForm = this.formBuilder.group({ 
    //   telReception: [ '', Validators.required ]
    // });
  }

  parEmail() {
    this.emailChecked = true;
    this.smsChecked = false;
    this.errorEmail = false;
    this.dataVente.moyenReception = "email";
    
    console.log("dataVente ",this.dataVente);
    this.venteServ.setTransaction(this.dataVente);
  }

  parSMS() {
    this.smsChecked = true;
    this.emailChecked = false;
    this.errorEmail = false;
    this.dataVente.moyenReception = "sms";
    
    console.log("dataVente ",this.dataVente);
    this.venteServ.setTransaction(this.dataVente);
  }

  onKey(event: KeyboardEvent) {
    this.telSaisie = (event.target as HTMLInputElement).value;
    console.log("telephone", this.timbreServ);
  }

  // onKeyConfirm(event: KeyboardEvent) {
  //   if((event.target as HTMLInputElement).value !== this.telSaisie) {
  //     this.message = "Veuillez confirmer le numéro de téléphone";
  //   }
    
  // }

  retour() {
    this.router.navigate(['/vendeur/validation']);
  }

  valider () {
  
    if(this.dataVente.moyenReception === "email") {
      if(this.emailReception === this.confirmEmail) {
        this.dataVente.emailReception = this.emailReception;
        console.log("dataVente ",this.dataVente);
        this.venteServ.setTransaction(this.dataVente);
        this.router.navigate(['/vendeur/recapitulatif']);
      }else {
        this.errorEmail = true;
        this.message = "Veuillez confirmer l'email";
      }
    }else {
      if(this.telReception === this.confirmTel) {
        this.dataVente.telReception = this.telReception;
        console.log("dataVente ",this.dataVente);
        this.venteServ.setTransaction(this.dataVente);
        this.router.navigate(['/vendeur/recapitulatif']);
      }else {
        this.errorEmail = true;
        this.message = "Veuillez confirmer le numéro de téléphone";
      }
    }
    
  }

  ngOnInit() {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthProvider } from '../services/auth-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from '../services/sessionService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy { 
  
  error =  false;
  message =  "";
  UserconnexionForm:FormGroup;
  // dataUser: any = {};


  constructor(private spinner: NgxSpinnerService, private router: Router, private formBuilder: FormBuilder,public api: AuthProvider, private sessPrv: SessionService) {
    // this.dataUser = this.sessPrv.parseSession();
    this.UserconnexionForm = this.formBuilder.group({ 
      login: [ '', Validators.required ],
      password: [ '', Validators.required ] 
    })
  }

  ngOnInit() {
    document.body.style.background = "url('assets/decoupage/agent_bg_login.png') no-repeat center";
    document.body.style.backgroundSize = "cover";
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    //this.api.signout()
  }

  connexion(){
    this.error = false;
    console.log(" this.UserconnexionForm.valu", this.UserconnexionForm.value);
    if(this.UserconnexionForm.valid){
      this.spinner.show();
      this.api.signin(this.UserconnexionForm.value)
        .subscribe(
          data => {
            console.log(data);
            this.message = data.message
            
            if(data==null || data.status!=0){
              console.log('error  ', data)
              this.error = true;
            }else{
              console.log('data  ', data)
              if (data.role && data.role ==="agentcentre") {
                // this.dataUser.firstname = data.firstname;
                // this.dataUser.lastname = data.lastname;
                // this.sessPrv.setSession(this.dataUser);
                this.router.navigate(['/vendeur/list-timbres']);
              }
              else {
                this.error = true;
                this.message += " . Mais profil inconnu"
              }
            }
            this.spinner.hide()
          },
          error => {
            console.log('error  ', error)
            this.error = true;
            this.message = "Erreur server. veuillez reessayer ulterieurement"
            this.spinner.hide()
          }
        );
    }else{
      alert("Veuillez remplir correctement les champs");
    }

  }

  
  ngOnDestroy() { 
    document.body.style.background = "";
    document.body.style.backgroundSize = "";
    this.spinner.hide();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthProvider } from '../services/auth-service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})
export class LoginComponent implements OnInit, OnDestroy { 
  
  

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    document.body.style.background = "url('assets/decoupage/agent_bg_login.png') no-repeat center";
    document.body.style.backgroundSize = "cover";
  }

  connexion(){
    
      this.router.navigate(['/agent']);
      
  }

  
  ngOnDestroy() { 
    document.body.style.background = "";
    document.body.style.backgroundSize = "";
  }

}

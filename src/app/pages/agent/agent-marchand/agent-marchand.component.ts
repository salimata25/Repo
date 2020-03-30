import {Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StatTotalForDashboard } from '../../../interfaces/statTotalForDashboard';
import { AuthProvider } from '../../../services/auth-service';


@Component({
  templateUrl: 'agent-marchand.component.html',
  providers: []
})
export class AgentMarchandComponent implements OnInit, OnDestroy {

  error =  false;
  message =  "";
  datas:StatTotalForDashboard;
  constructor(private spinner: NgxSpinnerService, private router: Router, private apiInfoUser: AuthProvider) {
  }

  ngOnInit() {
    // this.spinner.show();
    // this.apiInfoUser.getUserInfo().subscribe(
    //   resp => {
    //     console.log('data  ', resp)
    //     /*if(resp === null){
    //       this.router.navigate(['/login']);
    //     }
    //     else if(resp.isMarchandQuittance === false){
    //       this.router.navigate(['/login']);
    //     }*/
    //   },
    //   error => {
    //     this.router.navigate(['/login']);
    //   },
    //   () => this.spinner.hide()
    // );
    
  }
  
  
  
  

  ngOnDestroy() {
  }



}

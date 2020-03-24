import {Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsProvider } from '../../../services/transactions-service';
import { StatTotalForDashboard } from '../../../interfaces/statTotalForDashboard';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthProvider } from '../../../services/auth-service';


@Component({
  templateUrl: 'agent-dashboard.component.html',
  providers: []
})
export class AgentDashboardComponent implements OnInit, OnDestroy {

  error =  false;
  message =  "";
  datas:StatTotalForDashboard;
  constructor(private spinner: NgxSpinnerService, private router: Router, private apiStat: TransactionsProvider, private apiInfoUser: AuthProvider) {
  }

  ngOnInit() {
    this.spinner.show();
    this.apiStat.dashboardTotalForAgent().subscribe(
      resp => {
        console.log('data  ', resp)
        if(resp==null || resp.status!=0){
          this.error = true;
          this.message = resp.message;
        }else{
          console.log('data  ', resp)
          this.datas = resp.data
        }
      },
      error => {
        console.log('error  ', error)
      },
      () => this.spinner.hide()
    );
    
  }
  
  

  ngOnDestroy() {
  }


  navMenuItems(urlBase: string){
    this.router.navigate(['/agent/'+urlBase]);
  }


}

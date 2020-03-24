import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet><ngx-spinner bdColor = "rgba(51, 51, 51, 0.8)" size = "medium" color = "#fff" type = "square-spin"></ngx-spinner>`,
})
export class AppComponent implements OnInit, OnDestroy {

  public constructor (private spinner: NgxSpinnerService){
  }

  ngOnInit() {
  }

  ngOnDestroy() { 
    this.spinner.hide();
  }

}

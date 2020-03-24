import {Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TransactionsProvider } from '../../../services/transactions-service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { AgentProvider } from '../../../services/agent-service';

@Component({
  templateUrl: 'agent-historique.component.html',
  providers: [AgentProvider, TransactionsProvider],
  styleUrls: ['./agent-historique.component.css']
})
export class AgentHistoriqueComponent implements OnInit, OnDestroy {

  datas: any[] = [];
  error =  false;
  message =  "";
  type: string = "timbre";

  dtOptions: any = {};
  @ViewChild(DataTableDirective, {static: false}) dtElement: DataTableDirective;
  isData = false;
  isFormError = false;
  dtTrigger: Subject<any> = new Subject();
  defaultForm =  {
    'typeTransaction': 'all',
    'startDate': '01-01-2018',
    'endDate': '29-12-2018',
  };
  
  constructor(private route: ActivatedRoute, public apiStat: TransactionsProvider) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type');
      console.log("TEST 1", this.type);
    });

    console.log("TEST 2", this.type);

    this.dtOptions = {
      destroy: true,
      order: [],
      language: this.apiStat.language,
      dom: 'Bfrtip',
      responsive: false
    };
    const date = new Date();
    console.log( 'Format Date', this.formatDate(date));
    const formatedDate = this.formatDate(date);
    this.defaultForm.startDate = formatedDate;
    this.defaultForm.endDate = formatedDate;
    this.defaultForm.typeTransaction = this.type;
    //
    this.list(this.defaultForm);
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  list(form: any) {
    console.log('Request ', form);
    this.apiStat.listTransactionTfeGlobal(form).subscribe(
      data => {
        console.log('data  ', data)
        this.datas = data.listUsers
        this.isData = true;
        this.dtTrigger.next();
      },
      error => {
        console.log('error  ', error)
      },
      () => {
        this.functionChart();
      }
    );
  }

  find (form: any) {
    if (form === this.defaultForm) {
      console.log('NO Date Change');
      return;
    }
    if (form.startDate === '' || form.endDate === '') {
      this.isFormError = true;
      return;
    }
    //
    form.startDate = this.convertDate(form.startDate);
    form.endDate = this.convertDate(form.endDate);
    this.defaultForm = form;
    // Destroy the table first
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    });
    this.list(form);
  }
  
  convertDate(date: string) {
    function format(num) { return (num < 10) ? '0' + num : num; }
    const d = new Date(date);
    return [format(d.getDate()), format(d.getMonth() + 1), d.getFullYear()].join('-');
  }
  
  formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();
    function format(num) { return (num < 10) ? '0' + num : num; }
    day = format(day);
    month = format(month + 1);
    return [day, month, year].join('-');
  }

  //CHARTS
  @ViewChild("baseChart", {static: false})  chart: BaseChartDirective;
  public barChartColours: Array<any> = [
    { // dark grey
      backgroundColor: '#015e9f',
    },
    { // red
      backgroundColor: '#5c0e8e',
    }
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Autres'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public dataQuittance:number[] = [0]
  public dataTimbre:number[] = [0]
  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Quittances' },
    { data: [0], label: 'Timbres' }
  ];
  public functionChart(){
    this.barChartLabels = ['Autres'];
    let numbreAutre = {quittance:0, timbre:0};
    for(let ii=0; ii<this.datas.length; ii++){
      if(this.datas[ii].distributeurLocalisation && !this.barChartLabels.includes(this.datas[ii].distributeurLocalisation.region)){
        this.barChartLabels.push(this.datas[ii].distributeurLocalisation.region)
      }
      else{
        if(this.datas[ii].typeTransaction === 'QUITTANCE'){
          numbreAutre.quittance++;
        } else{
          numbreAutre.timbre++;
        }
      }
    }
    if(this.chart !== undefined){
      this.chart.chart.config.data.labels = this.barChartLabels;
    }
    for(let ij=0; ij<this.barChartLabels.length; ij++){
      if(this.barChartLabels[ij]==="Autres"){
        let numbre = {quittance:0, timbre:0};
        for(let ik=0; ik<this.datas.length; ik++){
          if(!this.datas[ik].distributeurLocalisation){
            if(this.datas[ik].transactionType === "QUITTANCE"){
              numbre.quittance++;
            } else{
              numbre.timbre++;
            }
          }
        }
        this.dataQuittance[ij] = numbre.quittance;
        this.dataTimbre[ij] = numbre.timbre;
      }
      else{
        let numbre = {quittance:0, timbre:0};
        for(let ik=0; ik<this.datas.length; ik++){
          if(this.datas[ik].distributeurLocalisation && this.datas[ik].distributeurLocalisation.region===this.barChartLabels[ij]){
            if(this.datas[ik].transactionType === "QUITTANCE"){
              numbre.quittance++;
            } else{
              numbre.timbre++;
            }
          }
        }
        this.dataQuittance[ij] = numbre.quittance;
        this.dataTimbre[ij] = numbre.timbre;
      }
    }
    this.barChartData = [
      { data: this.dataQuittance, label: 'Quittances' },
      { data: this.dataTimbre, label: 'Timbres' }
    ]
  }

}

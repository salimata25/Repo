import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent  implements OnInit, OnDestroy {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  navMenuItems(urlBase: string){
    this.router.navigate(['/agent'+urlBase]);
  }
  

  ngOnDestroy() {
  }

}
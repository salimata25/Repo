import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/sessionService';
import { iSession } from '../interfaces/iSession';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit, OnDestroy {

  public sidebarMinimized = true;
  public element: HTMLElement;

  uinfo: iSession;

  constructor(private router: Router, private sessPrv: SessionService) {  }

  ngOnInit() {
    console.log("PagesComponent ngOnInit")
    this.uinfo = this.sessPrv.parseSession();
    if (this.uinfo.role) {
      this.funcNavItems(this.uinfo.role);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  onLogout() {
    console.log("PagesComponent onLogout")
    this.sessPrv.deleteSession();
    this.router.navigate(['/login']);
  }

  funcNavItems(urlBase: string){
    console.log("PagesComponent funcNavItems")
    if (urlBase ==="agent") {
      this.router.navigate(['/agent']);
    }

  }


  ngOnDestroy(): void {
  }


}

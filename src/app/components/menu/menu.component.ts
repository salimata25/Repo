import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { iSession } from '../../interfaces/iSession';
import { SessionService } from '../../services/sessionService';
import { AuthProvider } from '../../services/auth-service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {

  uinfo: iSession;
  navItems: any[];
  userInfo:any;

  constructor(private router: Router, private sessPrv: SessionService, private apiInfoUser: AuthProvider) {  }

  ngOnInit() {
    console.log("PagesComponent ")
    this.uinfo = this.sessPrv.parseSession();
    
    this.apiInfoUser.getUserInfo().subscribe(
      resp => {
        console.log('data  ', resp)
        this.userInfo = resp;
      },
      error => {
        this.userInfo = null;
        console.log('error  ', error)
      },
      () => {
        if (this.uinfo.role && this.userInfo && this.userInfo.etat === 0) {
          console.log("ROLE_ ", this.uinfo.role)
          this.funcNavItems(this.uinfo.role);
        }
        else {
          this.router.navigate(['/login']);
        }
      }
    );
    
  }
  

  ngOnDestroy() {  }
  

  navMenuItems(urlBase: string){
    for(let i=0; i<this.navItems.length; i++){
      if(this.navItems[i].url === urlBase){
        this.navItems[i].isClick = true;
      }
      else{
        this.navItems[i].isClick = false;
      }
    }
    this.router.navigate([urlBase]);
  }

  funcNavItems(urlBase: string){
    if (urlBase ==="agent") {
      this.navItems = [
        {
          name: 'Dashboard',
          url: '/agent/dashboard',
          icon: 'icon-speedometer',
          img: 'dist.png',
          width: '13%',
          margin: '6px',
          isClick: true,
          habilitation: true
        },
        {
          name: 'Vente',
          url: '/agent/marchand',
          icon: 'icon-puzzle',
          img: 'dist.png',
          width: '13%',
          margin: '6px',
          isClick: false,
          habilitation: (this.userInfo===null?false:(this.userInfo.isMarchandQuittance===false?false:true))
        },
        {
          name: 'Consommation',
          url: '/agent/consumer',
          icon: 'icon-puzzle',
          img: 'dist.png',
          width: '13%',
          margin: '6px',
          isClick: false,
          habilitation: (this.userInfo===null?false:(this.userInfo.isConsumerQuittance===false?false:true))
        },
        {
          name: 'Historique',
          url: '/agent/historique',
          icon: 'icon-speedometer',
          img: 'dist.png',
          width: '13%',
          margin: '6px',
          isClick: true,
          habilitation: (this.userInfo===null?false:(this.userInfo.isConsumerQuittance===false?false:true))
        }
      ];

    }

  }

  

}

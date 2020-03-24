import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from '../services/sessionService';

@Injectable()
export class AgentAuthGuard implements CanActivate {
    constructor(private router: Router, private sessPrv: SessionService) {
        console.log("--------AgentAuthGuard-----------")
    }

    canActivate() {
        console.log("--------AgentAuthGuard canActivate-----------")
        const uinfo = this.sessPrv.parseSession();
        if (uinfo && (uinfo.role==="agent") ) {
            console.log("--------AgentAuthGuard canActivate isLoggedin-----------")
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}

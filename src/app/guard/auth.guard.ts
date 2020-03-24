import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from '../services/sessionService';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private sessPrv: SessionService) {
        console.log("--------AuthGuard-----------")
    }

    canActivate() {
        console.log("--------AuthGuard canActivate-----------")
        const uinfo = this.sessPrv.parseSession();
        if (uinfo && uinfo.role.length!=0) {
            console.log("--------AuthGuard canActivate isLoggedin-----------")
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

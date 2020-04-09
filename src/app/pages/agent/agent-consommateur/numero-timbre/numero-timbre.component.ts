import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numero-timbre',
  templateUrl: './numero-timbre.component.html',
  styleUrls: ['./numero-timbre.component.scss']
})
export class NumeroTimbreComponent implements OnInit {

  constructor(private router: Router) { }

  retour() {
    this.router.navigate(['/type-consommation']);
  }

  valider() {
    this.router.navigate(['/dossier-timbre']);
  }

  ngOnInit() {
  }

}

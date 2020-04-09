import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-consommation',
  templateUrl: './type-consommation.component.html',
  styleUrls: ['./type-consommation.component.scss']
})
export class TypeConsommationComponent implements OnInit {

  constructor(private router: Router) { }

  retour() {
    this.router.navigate(['/consommation']);
  }

  saisirNumero() {
    this.router.navigate(['/numero-timbre']);
  }

  ngOnInit() {
  }

}

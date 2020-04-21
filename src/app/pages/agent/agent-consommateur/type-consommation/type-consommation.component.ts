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
    this.router.navigate(['/consommateur/consommation']);
  }

  saisirNumero() {
    this.router.navigate(['/consommateur/numero-timbre']);
  }

  scanner() {
    this.router.navigate(['/consommateur/scanner']);
  }

  ngOnInit() {
  }

}

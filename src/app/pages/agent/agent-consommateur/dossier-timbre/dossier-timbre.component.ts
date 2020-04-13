import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossier-timbre',
  templateUrl: './dossier-timbre.component.html',
  styleUrls: ['./dossier-timbre.component.scss']
})
export class DossierTimbreComponent implements OnInit {
  contenu = 0;

  constructor (private router: Router) { }

  retour() {
    this.router.navigate(['/numero-timbre']);
  }

  valider() {
    this.router.navigate(['/impression']);
  }

  onSelected (contenu) {
    this.contenu = contenu; 
  }

  ngOnInit() {
  }

}

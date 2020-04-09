import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {

  contenu = 0;
  constructor(private router: Router) { } 

  onSelected (contenu) {
    this.contenu = contenu;
  }

  retour() {
    this.router.navigate(['/finalisation']);
  }

  ngOnInit() {
  }

}

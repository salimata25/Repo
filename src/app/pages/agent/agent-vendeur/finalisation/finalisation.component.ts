import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalisation',
  templateUrl: './finalisation.component.html',
  styleUrls: ['./finalisation.component.scss']
})
export class FinalisationComponent implements OnInit {

  constructor(private router: Router) { }

  retour() {
    this.router.navigate(['/validation']);
  }

  valider () {
    this.router.navigate(['/recapitulatif']);
  }

  ngOnInit() {
  }

}

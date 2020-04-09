import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.scss']
})
export class ConsommationComponent implements OnInit {

  constructor(private router: Router) { }

  retour() {
    this.router.navigate(['/consommateur']);
  }

  ngOnInit() {
  }

}

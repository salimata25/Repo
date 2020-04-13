import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.scss']
})
export class ImpressionComponent implements OnInit {
  
  constructor (private router: Router) { }

  retour() {
    this.router.navigate(['/dossier-timbre']);
  }

  ngOnInit() {
  }

  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dossier-timbre',
  templateUrl: './dossier-timbre.component.html',
  styleUrls: ['./dossier-timbre.component.scss']
})
export class DossierTimbreComponent implements OnInit {
  contenu = 0;
  constructor() { }

  onSelected (contenu) {
    this.contenu = contenu;
  }

  ngOnInit() {
  }

}

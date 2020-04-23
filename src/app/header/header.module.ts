import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { AgentVendeurComponent } from '../pages/agent/agent-vendeur/agent-vendeur.component';
import { AgentConsommateurComponent } from '../pages/agent/agent-consommateur/agent-consommateur.component';
import { ValidationComponent } from '../pages/agent/agent-vendeur/validation/validation.component';
import { FinalisationComponent } from '../pages/agent/agent-vendeur/finalisation/finalisation.component';
import { RecapitulatifComponent } from '../pages/agent/agent-vendeur/recapitulatif/recapitulatif.component';
import { ListTimbresComponent } from '../pages/agent/agent-vendeur/list-timbres/list-timbres.component';
import { ConsommationComponent } from '../pages/agent/agent-consommateur/consommation/consommation.component';
import { TypeConsommationComponent } from '../pages/agent/agent-consommateur/type-consommation/type-consommation.component';
import { DossierTimbreComponent } from '../pages/agent/agent-consommateur/dossier-timbre/dossier-timbre.component';
import { NumeroTimbreComponent } from '../pages/agent/agent-consommateur/numero-timbre/numero-timbre.component';
import { ImpressionComponent } from '../pages/agent/agent-consommateur/impression/impression.component';
import { ScannerComponent } from '../pages/agent/agent-consommateur/scanner/scanner.component';
import { ListEnregistrementsComponent } from '../pages/agent/agent-consommateur/list-enregistrements/list-enregistrements.component';
import { ImpressionVenteComponent } from '../pages/agent/agent-vendeur/impression-vente/impression-vente.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {path: 'vendeur', component: AgentVendeurComponent,
       children: [
        {path: '', component: ListTimbresComponent},
        {path: 'list-timbres', component: ListTimbresComponent},
        {path: 'validation', component: ValidationComponent},
        {path: 'finalisation', component: FinalisationComponent},
        {path: 'recapitulatif', component: RecapitulatifComponent},
        {path: 'impression', component: ImpressionVenteComponent},
       ]},
      {path: 'consommateur', component: AgentConsommateurComponent,
       children: [
        {path: '', component: ListEnregistrementsComponent},
        {path: 'list-enregistrements', component: ListEnregistrementsComponent},
        {path: 'consommation', component: ConsommationComponent},
        {path: 'type-consommation', component: TypeConsommationComponent},
        {path: 'numero-timbre', component: NumeroTimbreComponent},
        {path: 'dossier-timbre', component: DossierTimbreComponent},
        {path: 'impression', component: ImpressionComponent},
        {path: 'scanner', component: ScannerComponent}
       ]
      }
    ])
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

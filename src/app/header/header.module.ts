import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { AgentVendeurComponent } from '../pages/agent/agent-vendeur/agent-vendeur.component';
import { AgentConsommateurComponent } from '../pages/agent/agent-consommateur/agent-consommateur.component';
import { AgentModule } from '../pages/agent/agent.module';
import { ValidationComponent } from '../pages/agent/agent-vendeur/validation/validation.component';
import { FinalisationComponent } from '../pages/agent/agent-vendeur/finalisation/finalisation.component';
import { RecapitulatifComponent } from '../pages/agent/agent-vendeur/recapitulatif/recapitulatif.component';
import { ListTimbresComponent } from '../pages/agent/agent-vendeur/list-timbres/list-timbres.component';



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
        {path: 'recapitulatif', component: RecapitulatifComponent}
       ]},
      {path: 'consommateur', component: AgentConsommateurComponent}
    ])
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

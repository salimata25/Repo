import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { AgentVendeurComponent } from '../pages/agent/agent-vendeur/agent-vendeur.component';
import { AgentConsommateurComponent } from '../pages/agent/agent-consommateur/agent-consommateur.component';
import { AgentModule } from '../pages/agent/agent.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {path: 'vendeur', component: AgentVendeurComponent},
      {path: 'consommateur', component: AgentConsommateurComponent}
    ])
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

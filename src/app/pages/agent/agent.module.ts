// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AgentRoutingModule } from './agent-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import { AgentComponent } from './agent.component';
import { AgentHistoriqueComponent } from './agent-historique/agent-historique.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AgentAuthGuard } from '../../guard/agent.auth.guard';
import { AgentProvider } from '../../services/agent-service';
import { AgentMarchandComponent } from './agent-marchand/agent-marchand.component';
import { AgentConsumerComponent } from './agent-consumer/agent-consumer.component';
import { AuthProvider } from '../../services/auth-service';
import { AgentVendeurComponent } from './agent-vendeur/agent-vendeur.component';
import { ValidationComponent } from './agent-vendeur/validation/validation.component';
import { FinalisationComponent } from './agent-vendeur/finalisation/finalisation.component';
import { RecapitulatifComponent } from './agent-vendeur/recapitulatif/recapitulatif.component';
import { AgentConsommateurComponent } from './agent-consommateur/agent-consommateur.component';
import { ConsommationComponent } from './agent-consommateur/consommation/consommation.component';
import { TypeConsommationComponent } from './agent-consommateur/type-consommation/type-consommation.component';
import { NumeroTimbreComponent } from './agent-consommateur/numero-timbre/numero-timbre.component';
import { DossierTimbreComponent } from './agent-consommateur/dossier-timbre/dossier-timbre.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AgentRoutingModule,
    DataTablesModule,
    ChartsModule,
  ],
  declarations: [
    AgentComponent,
    AgentMarchandComponent,
    AgentConsumerComponent,
    AgentHistoriqueComponent,
    AgentDashboardComponent,
    AgentVendeurComponent,
    ValidationComponent,
    FinalisationComponent,
    RecapitulatifComponent,
    AgentConsommateurComponent,
    ConsommationComponent,
    TypeConsommationComponent,
    NumeroTimbreComponent,
    DossierTimbreComponent
  ],
  providers: [
    AgentAuthGuard,
    AgentProvider,
    AuthProvider
  ]
})
export class AgentModule { }

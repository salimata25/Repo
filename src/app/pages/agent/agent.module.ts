// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import { AgentComponent } from './agent.component';
import { AgentAuthGuard } from '../../guard/agent.auth.guard';
import { AgentProvider } from '../../services/agent-service';
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
import { ImpressionComponent } from './agent-consommateur/impression/impression.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrashAlt, faEdit, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { ScannerComponent } from './agent-consommateur/scanner/scanner.component';
import { ListTimbresComponent } from './agent-vendeur/list-timbres/list-timbres.component';
import { ListEnregistrementsComponent } from './agent-consommateur/list-enregistrements/list-enregistrements.component';
import { ImpressionVenteComponent } from './agent-vendeur/impression-vente/impression-vente.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DataTablesModule,
    ChartsModule,
    HeaderModule,
    FooterModule,
    QRCodeModule,
    RouterModule.forChild([
      // {path: 'validation', component: ValidationComponent},
      // {path: 'finalisation', component: FinalisationComponent},
      // {path: 'recapitulatif', component: RecapitulatifComponent},
      // {path: 'consommation', component: ConsommationComponent},
      // {path: 'type-consommation', component: TypeConsommationComponent},
      // {path: 'numero-timbre', component: NumeroTimbreComponent},
      // {path: 'dossier-timbre', component: DossierTimbreComponent},
      // {path: 'impression', component: ImpressionComponent},
      // {path: 'scanner', component: ScannerComponent}
    ])
  ],
  declarations: [
    AgentComponent,
    AgentVendeurComponent,
    ValidationComponent,
    FinalisationComponent,
    RecapitulatifComponent,
    AgentConsommateurComponent,
    ConsommationComponent,
    TypeConsommationComponent,
    NumeroTimbreComponent,
    DossierTimbreComponent,
    ImpressionComponent,
    ScannerComponent,
    ListTimbresComponent,
    ListEnregistrementsComponent,
    ImpressionVenteComponent
  ],
  providers: [
    AgentAuthGuard,
    AgentProvider,
    AuthProvider
  ]
})
export class AgentModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrashAlt, faEdit, faAngleRight, faArrowRight);
  }
} 

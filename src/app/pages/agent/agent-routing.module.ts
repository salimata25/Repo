import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentHistoriqueComponent } from './agent-historique/agent-historique.component';
import { AgentComponent } from '../agent/agent.component';
//import { AgentAuthGuard } from '../../guard/agent.auth.guard';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AgentMarchandComponent } from './agent-marchand/agent-marchand.component';
import { AgentConsumerComponent } from './agent-consumer/agent-consumer.component';


const routes: Routes = [
  {
    path: '', component: AgentComponent,
    children: [
      { path: 'dashboard', component: AgentDashboardComponent, data: { title: 'Dashboard' } },
      { path: 'marchand', component: AgentMarchandComponent, data: { title: 'Vendre' } },
      { path: 'consumer', component: AgentConsumerComponent, data: { title: 'Consommer' } },

      { path: 'historique/:type', component: AgentHistoriqueComponent, data: { title: 'Historique' } },
      { path: '', redirectTo: 'dashboard' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from '../agent/agent.component';
//import { AgentAuthGuard } from '../../guard/agent.auth.guard';


const routes: Routes = [
  {
    path: '', component: AgentComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
//import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  { path: '', component: PagesComponent, children: [
      { path: 'agent', loadChildren: './pages/agent/agent.module#AgentModule' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

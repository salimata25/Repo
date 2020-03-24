import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app-service';
import { AppConfig } from './app.config';
import { SessionService } from './services/sessionService';
import { LoginComponent } from './login/login.component';
import { AuthProvider } from './services/auth-service';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import { ChartsModule } from 'ng2-charts';
//import { AuthGuard } from './guard/auth.guard';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuComponent } from './components/menu/menu.component';
import { TransactionsProvider } from './services/transactions-service';

import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule,
    NgxSpinnerModule,
    
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    MenuComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    AppService,
    //AuthGuard,
    AuthProvider,
    HttpClientModule,
    TransactionsProvider,
    AppService,
    SessionService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true }
  ]
})
export class AppModule { }



export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

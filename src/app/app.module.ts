import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './components/pages/pages.module';
import { PortfolioService } from './services/portfolio/portfolio.service';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  PagesModule
];

const services = [
  PortfolioService
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

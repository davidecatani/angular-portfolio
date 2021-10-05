import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const components = [
  PortfolioComponent
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }

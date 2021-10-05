import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomUser } from 'src/app/interfaces/random-user';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  public isLoaded = false;
  public sections: string[];
  private subs: Subscription[];

  constructor(private portfolioService: PortfolioService) {
    this.sections = ['name', 'mail'];
    this.subs = [];
  }

  ngOnInit(): void {
    this.subs = [
      ...this.subs,
      this.portfolioService.getPortfolio().subscribe((user: RandomUser) => {
        console.log(user);
      })
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}

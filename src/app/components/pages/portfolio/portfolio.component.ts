import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoStructure } from 'src/app/interfaces/info-structure';
import { RandomUser } from 'src/app/interfaces/random-user';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {

  public isLoaded = false;
  public currentTab: string;
  public sections: string[];
  public user: RandomUser;
  public infoStructure: InfoStructure[];
  public currentInfo: InfoStructure | undefined;
  private subs: Subscription[];

  constructor(private portfolioService: PortfolioService) {
    this.sections = ['person', 'envelope', 'calendar3', 'map', 'telephone', 'lock'];
    this.currentTab = this.sections[0];
    this.subs = [];
  }

  ngOnInit(): void {
    this.subs = [
      ...this.subs,
      this.portfolioService.getPortfolio().subscribe((user: RandomUser) => {
        this.infoStructure = [
          {
            section: 'person',
            label: 'Hi, My name is',
            info: `${user.name.first} ${user.name.last}`
          },
          {
            section: 'envelope',
            label: 'My email address is',
            info: user.email
          },
          {
            section: 'calendar3',
            label: 'My birthday is',
            info: this.formatDate(user.dob.date)
          },
          {
            section: 'map',
            label: 'My address is',
            info: `${user.location.street.name}, ${user.location.street.number}`
          },
          {
            section: 'telephone',
            label: 'My phone number is',
            info: user.cell
          },
          {
            section: 'lock',
            label: 'My password is',
            info: user.login.password
          }
        ];
        this.user = user;
        this.getCurrentTab();
      })
    ];
  }

  formatDate(timeStamp: string): string {
    const date = new Date(timeStamp);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

  getCurrentTab(): void {
    this.currentInfo = this.infoStructure.find(info => info.section === this.currentTab);
  }

  changeTab(tabName: string): void {
    this.currentTab = tabName;
    this.getCurrentTab();
    console.log(tabName);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUser } from 'src/app/interfaces/random-user';
import { RandomUsers } from 'src/app/interfaces/random-users';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolio(): Observable<RandomUser> {
    const path = 'https://randomuser.me/api';

    return this.http.get<RandomUsers>(path).pipe(
      map((response: RandomUsers) => {
        return response.results[0];
      })
    );
  }
}

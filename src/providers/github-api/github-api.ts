import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubApiProvider {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {

  }

  load(): Observable<Array<User>> {
    return this.http
      .get(`${this.githubApiUrl}/users`)
      .map((res: any) => {
         return res.json() as Array<User>;
      });
  }

  getUser(login: string): Observable<User> {
    return this.http
      .get(`${this.githubApiUrl}/users/${login}`)
      .map((res: any) => {
        return res.json() as User;
      });
  }

  search(searchParam: string): Observable<Array<User>> {
    return this.http
       .get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
       .map((res: any) => {
         return res.json().items as Array<User>;
       });

  }
}

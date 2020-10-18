import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  // define our class properties. apiUrl is what we need
  // usually you could get this from an environment file
  apiUrl = 'https://api.github.com/users';

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  // tslint:disable-next-line: typedef
  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  // tslint:disable-next-line: typedef
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }
}

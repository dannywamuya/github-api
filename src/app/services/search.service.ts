import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { userURL } from 'src/app/models/user-url';
import { repoURL } from 'src/app/models/repo-url';
import { User } from 'src/app/models/user';
import { Repo } from 'src/app/models/repository';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  users: userURL[];
  repos: repoURL;

  constructor(private http: HttpClient) { }

  searchUser(searchTerm: string) {
    let promise = new Promise((resolve, reject) => {

      this.http.get<any>('https://api.github.com/users/' + searchTerm + '?access_token=' + environment.apiKey).toPromise().then(
        (results) => {
          this.users = [];
          this.users.push(results);
          resolve()
        },
        (error) => {
          console.log(error)
          reject()
        }
      )
    })
    return promise;
  }

  searchRepo(searchTerm: string) {
    interface results {
      login: string;
      username: string;
      avatar_url: string;
      html_url: string;
      name: string;
      url: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<results>('https://api.github.com/users/' + searchTerm + '/repos?access_token=' + environment.apiKey).toPromise().then(
        (results) => {
          this.repos;
          this.repos = results;
          console.log(results)
          resolve()
        },
        (error) => {
          console.log(error)
          reject()
        }
      )
    })
    return promise;
  }

}
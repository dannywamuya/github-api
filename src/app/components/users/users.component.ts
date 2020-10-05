import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { userURL } from 'src/app/models/user-url';
import { repoURL } from 'src/app/models/repo-url';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  repos : repoURL;
  users : userURL[];

  constructor(private search: SearchService) { }
  
  ngOnInit(): void {
    this.searchUsers('dannywamuya');
    this.searchRepos('dannywamuya');
  }
  
  searchUsers(searchTerm:string){
    this.search.searchUser(searchTerm).then(
      ()=>{
        this.users = this.search.users;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  searchRepos(searchTerm:string){
    this.search.searchRepo(searchTerm).then(
      ()=>{
        this.repos=this.search.repos;
      },
      (error)=>{
        console.log(error)
      }
    )
  }


}

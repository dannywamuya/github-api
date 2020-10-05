import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { userURL } from 'src/app/models/user-url';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users:userURL[];
  // profiles:User;

  constructor(public search: SearchService) { }

  ngOnInit(): void {
    this.searchUsers("dannywamuya");
  }

  searchUsers(searchTerm){
    this.search.searchUser(searchTerm).then(
      ()=>{
        this.users=this.search.users;
        console.log(this.users);
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}

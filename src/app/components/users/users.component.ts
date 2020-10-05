import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { userURL } from 'src/app/models/user-url';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : userURL[];

  constructor(private search: SearchService) { }
  
  ngOnInit(): void {
    this.searchUsers('dannywamuya');
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


}

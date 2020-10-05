import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service'
import { userURL } from 'src/app/models/user-url';
import { repoURL } from 'src/app/models/repo-url';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:repoURL;

  constructor(public search: SearchService) { }

  ngOnInit(): void {
    this.searchRepos("dannywamuya");
  }

  searchRepos(searchTerm){
    this.search.searchRepo(searchTerm).then(
      ()=>{
        this.repos=this.search.repos;
        console.log(this.repos);

      },
      (error)=>{
        console.log(error)
      }
    )
  }

}

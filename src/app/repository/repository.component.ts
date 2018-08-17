import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment.ts';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  url: string = 'https://api.github.com/users/';
  userName: string = '';
  response: any;
  apiKey: string = 'environment.apiKey';

  constructor (private http: HttpClient) {
  }
  ngOnInit() {
}
    searchrepo() {
      this.http.get( this.url + this.userName + 'repos?accesstoken' + this.apiKey)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
    }
}

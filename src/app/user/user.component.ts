import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environment.ts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // url: string = 'https://api.github.com/users/';
  userName: string = [] ;
  response: any;
  reporesponse: any;
  // apiKey: string = 'environment.apiKey';
  // repoName: string = [];


  constructor ( public apiservice: TestService) {}

searchUser() {
 this.apiservice.newUser(this.userName);
 this.apiservice.search().subscribe(response => {
  console.log(response);
  this.response = response;
});

this.apiservice.repoDisplay().subscribe(reporesponse => {
  console.log(reporesponse);
  this.reporesponse = reporesponse;
});

}




ngOnInit() {
}
    // repoDisplay() {
    //   this.http.get( this.url + this.userName + '/repos?accesstoken=' + this.apiKey)
    //   .subscribe((reporesponse) => {
    //     this.reporesponse = reporesponse;
    //     console.log(this.reporesponse);
    //   });
    // }
}

import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // url: string = 'https://api.github.com/users/';
  userName: string ;
  // newRepo: string = [];
  response;
  reporesponse;
  // apiKey: string = 'environment.apiKey';
  // repoName: string = [];


  constructor ( public apiservice: TestService) {


    this.apiservice.search().subscribe(response => {
          console.log(response);
          this.response = response;
        });

        this.apiservice.repoDisplay().subscribe(reporesponse => {
          console.log(reporesponse);
          this.reporesponse = reporesponse;

        });

      }

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

//     ------ TEST -----
//
//  this.apiservice.newUser(this.userName);
//  this.apiservice.search().subscribe(response => {
//   console.log(response);
//   this.response = response;
// });
//
//
// this.apiservice.repoDisplay().subscribe(reporesponse => {
//   console.log(reporesponse);
//   this.reporesponse = reporesponse;
// });
//
// }
//
//
// 
//
// searchUser() {
//     this.apiservice.updateProfile(this.userName);
//     this.apiservice.newUser().subscribe(response => {
//       console.log(response);
//       this.response = response;
//     });
//
//     this.apiservice.repoDisplay().subscribe(reporesponse => {
//       console.log(reporesponse);
//       this.reporesponse = reporesponse;
//
//     });
//   }
//
//
//


ngOnInit() {
}

}

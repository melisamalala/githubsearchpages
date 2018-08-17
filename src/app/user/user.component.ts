import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment.ts';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string = '';
  response: any;
  apiKey: string = 'environment.apiKey';
  // private apiKey: 'd89d799ae5a23fbb8a58f122e9242fd734b8b1e5';

  constructor (private http: HttpClient) {
  }

  ngOnInit() {
}

    search() {
      this.http.get('https://api.github.com/users/' + this.userName + '?accesstoken' + this.apiKey)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        // console.log(response);
      });
    }
}

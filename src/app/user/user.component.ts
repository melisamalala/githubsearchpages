import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string = '';
  response: any;

  constructor (private http: HttpClient) {
  }

  ngOnInit() {
}

    search() {
      this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
    }
}

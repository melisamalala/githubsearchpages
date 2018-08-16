import { Component } from '@angular/core';
import { TestService } from './test.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // I need TestService
  title = 'githubsearchpage';



  constructor(private svc: TestService, http: HttpClient) {
    this.svc.printToConsole("Got The Servicess");
  }



 ngOnInit() {

 let obs =  this.http.get('https://api.github.com/users/melisamalala');
 obs.subscribe(() => console.log ('Got the response'));

}

}

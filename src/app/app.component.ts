import { Component } from '@angular/core';
import { TestService } from './test.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GITHUB REPLICA';

  constructor(private svc: TestService, http: HttpClient) {
  }

 ngOnInit() {

}

}

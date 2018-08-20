import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url: string = 'https://api.github.com/users/';
  private userName: string = [] ;
  response: any;
  // reporesponse: any;
  private apiKey: string = environment.apiKey;
  // repoName: string = [];

  // printToConsole(arg) {
  //   console.log(arg);
  // }

  constructor(public http: HttpClient) {
console.log('hi');
this.userName = 'melisamalala';

 }

     search() {
      return this.http.get( this.url + this.userName + '?accesstoken=' + this.apiKey);
      this.response = response;
     }


 repoDisplay() {
  return this.http.get( this.url + this.userName + '/repos?accesstoken=' + this.apiKey);
 }

newUser(userName:string){
  this.userName= userName;
}



}

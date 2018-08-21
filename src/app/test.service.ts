import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url: string = 'https://api.github.com/users/';
  private userName: string ;
  response: any;
  private apiKey: string = environment.apiKey;

  constructor(public http: HttpClient) {
console.log('hi');
this.userName = 'melisamalala';

 }
     search() {
      return this.http.get( this.url + this.userName + '?accesstoken=' + this.apiKey);
      // this.response = response;
     }

 repoDisplay() {
  return this.http.get( this.url + this.userName + '/repos?accesstoken=' + this.apiKey);
 }

  newUser(userName:string){
  this.userName= userName;
}
//
// let promise =new Promise((resolve,reject)=>{
//         this.http.get(environment.apiKey).toPromise().then(response=>{
//
//             this.response.login=response.login
//             this.response.login=reporesponse.name
//
//
//
//             resolve()
//         },
//         error=>{
//                 this.quote.quote= "Try your search again"
//                 this.quote.author= "Try your search one more time"
//                 reject(error)
//             }
//         )
//     })
//
//     return promise
  }

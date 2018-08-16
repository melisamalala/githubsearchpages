import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TestService]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }

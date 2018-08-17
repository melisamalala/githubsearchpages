import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {path:"user",component: UserComponent},
  {path:"repository",component: RepositoryComponent};
  {path:'**',component: NotFoundComponent}
]
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { TestService } from './test.service';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TestService]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }

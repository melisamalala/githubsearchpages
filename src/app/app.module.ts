import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Defining Routes
const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: 'about', component: AboutComponent},
  {path:  '', redirectTo: '/user', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { TestService } from './test.service';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RoutingModule} from './routing/routing.module';
import { DateCountPipe } from './date-count.pipe'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
    AboutComponent,
    NotFoundComponent,
    DateCountPipe,
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

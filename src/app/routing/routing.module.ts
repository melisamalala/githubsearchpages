import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from '../user/user.component';
// import { RepositoryComponent } from '../repository/repository.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

// Defining Routes
const routes: Routes = [
  {path: 'user', component: UserComponent},
  // {path: 'repository', component: RepositoryComponent},
  {path: 'about', component: AboutComponent},
  {path:  '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user/:id', component: UserComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }

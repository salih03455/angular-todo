import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './pages/add-movie/add.component'
import { ListMovieComponent } from './pages/list-movie/list-movie.component';

const routes: Routes = [
  { 
    path: 'addMovie',
    component: AddMovieComponent,
    data: { name: 'add' }
  },
  { 
    path: 'listMovie',
    component: ListMovieComponent,
    data: { name: 'list' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

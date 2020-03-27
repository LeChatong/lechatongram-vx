import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListMovieComponent} from './list-movie/list-movie.component';

const routes: Routes = [
  {path: 'movie/list', component: ListMovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})

export class MoviesRoutingModule {

}

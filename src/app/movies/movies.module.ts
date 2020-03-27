import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieComponent } from './list-movie/list-movie.component';
import {MoviesRoutingModule} from './movies-routing-module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ]
})
export class MoviesModule { }

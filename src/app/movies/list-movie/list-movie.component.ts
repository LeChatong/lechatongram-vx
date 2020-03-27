import { Component, OnInit } from '@angular/core';
import {APIResponse, MemberModel, MovieModel} from '../../services/model.service';
import {MoviesService} from '../../services/movie/movies.service';
import {MemberService} from '../../services/member/member.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  listMovie: Array<MovieModel>;
  member: MemberModel;
  constructor(private movieService: MoviesService, private memberService: MemberService) { }

  ngOnInit() {
    this.getListMovies();
  }

  getListMovies() {
    this.movieService.getAllMovies().subscribe(
      (movies: APIResponse) => {
        this.listMovie = movies.data;
      }
    );
  }

  nameMember(id: number): string {
    this.member = {} as MemberModel;
    this.memberService.getMember(id).subscribe(
      (movie: APIResponse) => {
        this.member =  movie.data;
      }
    );
    return this.member.username;
  }
}

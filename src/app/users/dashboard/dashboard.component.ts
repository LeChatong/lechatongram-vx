import { Component, OnInit } from '@angular/core';
import {APIResponse, CommentModel, MemberModel, MovieModel, TvModel, UserModel} from '../../services/model.service';
import {DataService} from '../../services/data.service';
import {HttpResponse} from '@angular/common/http';
import {UsersService} from '../../services/user/users.service';
import {of} from 'rxjs';
import {first} from 'rxjs/operators';
import {MoviesService} from '../../services/movie/movies.service';
import {TvService} from '../../services/tv/tv.service';
import {MemberService} from '../../services/member/member.service';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listUser: Array<UserModel>;
  listMovies: Array<MovieModel>;
  listTv: Array<TvModel>;
  listMember: Array<MemberModel>;
  listComment: Array<CommentModel>;
  NB_USER: number;
  NB_MEMBER: number;
  NB_MOVIE: number;
  NB_EPISODE: number;
  NB_TV: number;
  NB_COMMENT: number;
  constructor(private dataService: DataService, private userService: UsersService,
              private movieService: MoviesService, private tvService: TvService,
              private memberService: MemberService, private commentService: CommentService) {
    this.initView();
  }

  ngOnInit() {
  }

  initView() {
    this.getListUser();
    this.getListMovies();
    this.getListMembers();
    this.getListTvs();
    this.getListTvsAv();
    this.getListComments();
  }
  getListUser() {
    this.userService.listAllUsers().subscribe(
      (users: APIResponse) => {
        this.listUser = users.data;
        this.NB_USER = this.listUser.length;
      }
    );
  }
  getListMovies() {
    this.movieService.getAllMovies().subscribe(
      (movies: APIResponse) => {
        this.listMovies = movies.data;
        this.NB_MOVIE =  this.listMovies.length;
      }
    );
  }
  getListTvs() {
    this.tvService.listAllTv().subscribe(
      (tvs: APIResponse) => {
        this.listTv = tvs.data;
        this.NB_EPISODE = this.listTv.length;
      }
    );
  }
  getListTvsAv() {
    this.tvService.listAllTvAv().subscribe(
      (tvs: APIResponse) => {
        this.listTv = tvs.data;
        this.NB_TV = this.listTv.length;
      }
    );
  }
  getListMembers() {
    this.memberService.listAllMember().subscribe(
      (members: APIResponse) => {
        this.listMember = members.data;
        this.NB_MEMBER = this.listMember.length;
      }
    );
  }
  getListComments() {
    this.commentService.listAllComment().subscribe(
      (comments: APIResponse) => {
        if (comments.status === 200) {
          this.listComment = comments.data;
          this.NB_COMMENT = this.listComment.length;
        } else {
          this.NB_COMMENT = 0;
        }

      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movieditels',
  templateUrl: './movieditels.component.html',
  styleUrls: ['./movieditels.component.scss'],
})
export class MovieditelsComponent implements OnInit {
  id: string = '';
  movieDetals: any = {};
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  mostVeiw: any[] = [];
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService,
    private _Router: Router
  ) {
    this.id = _ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getMovieDetalis();
    this.getMostVews();
  }

  getMovieDetalis() {
    this._Router.events.subscribe((val) => {
      this.id = this._ActivatedRoute.snapshot.params['id'];
      this._MoviesService.getMovieDetals(this.id).subscribe((res) => {
        this.movieDetals = res;
      });
    });
  }

  getMostVews() {
    this._MoviesService.getTrending('movie').subscribe((res) => {
      this.mostVeiw = res.results.slice(0, 6);
    });
  }
}

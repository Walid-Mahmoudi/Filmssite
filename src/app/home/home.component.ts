import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPepole: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((res) => {
      this.trendingMovies = res.results.slice(0, 10);
    });
    this._MoviesService.getTrending('tv').subscribe((res) => {
      this.trendingTv = res.results.slice(0, 10);
    });
    this._MoviesService.getTrending('person').subscribe((res) => {
      this.trendingPepole = res.results.slice(0, 10);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((res) => {
      this.movies = res.results;
    });
  }
}

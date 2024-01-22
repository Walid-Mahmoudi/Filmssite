import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService implements OnInit {
  constructor(private _HttpClient: HttpClient) {}
  getTrending(mediaData: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaData}/week?api_key=a4defb7b8e18ab1eea83309ea5346792`
    );
  }

  getMovieDetals(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4defb7b8e18ab1eea83309ea5346792`
    );
  }
  ngOnInit(): void {}
}

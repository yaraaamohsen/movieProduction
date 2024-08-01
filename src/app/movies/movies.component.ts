import { movie } from './../movieInterface';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesApiService } from '../movies-api.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private _MoviesApiService: MoviesApiService) { }

  moviesArr !: movie[];

  posterLink : string = 'https://image.tmdb.org/t/p/w500/'

  ngOnInit(): void {
    this._MoviesApiService.getMovie().subscribe(response => {
      this.moviesArr = response.results;
      console.log(this.moviesArr);
      console.log(this.moviesArr[0]);
    })
  }
}

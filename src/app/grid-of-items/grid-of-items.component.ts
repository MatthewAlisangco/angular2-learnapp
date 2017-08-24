import { Component, OnInit } from '@angular/core';
import { Movie} from 'app/Movie';
import {MovieProviderService} from 'app/movie-provider.service';
@Component({
  selector: 'app-grid-of-items',
  templateUrl: './grid-of-items.component.html',
  styleUrls: ['./grid-of-items.component.css'],
  providers:[MovieProviderService]
})
export class GridOfItemsComponent implements OnInit {
  title = 'app';
  movies: Movie[];


  constructor(private x: MovieProviderService){}


  getMovies(): void{

    this.x.getMovies().then(movies => this.movies = movies);

  }



  ngOnInit(): void {
    this.getMovies();

  }


}

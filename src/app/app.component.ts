import { Component, OnInit } from '@angular/core';
import { Movie} from './Movie';
import {MovieProviderService} from './movie-provider.service';
import { AppRoutingModule }     from './app-routing.module';
//const MOVIES: Movie[] = [
 // {id:10, title: 'Forest Gump',category:'Drama'},
 // {id:11, title: 'Ms.Doubtfire',category:'Comedy'}
//];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',  './Bootstrap/one-page-wonder.css'],
  providers: [MovieProviderService]   //create instance of MovieProviderSerice
})
export class AppComponent implements OnInit {
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

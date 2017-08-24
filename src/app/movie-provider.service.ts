import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { MOVIES } from './mock-movies';





@Injectable()
export class MovieProviderService {
  getMovies():Promise<Movie[]>{ //promisebabe
    return Promise.resolve(MOVIES);






  }
  constructor() { }

}

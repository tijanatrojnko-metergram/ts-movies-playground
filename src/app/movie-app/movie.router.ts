import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { filterByGenre,filterByActor,filterMovies,totalLength,movieLanguages,movieUrls,movieVotes } from './movie-manipulation';
import { IMovie, createMovie, updateMovie, deleteMovie, getAllMovies, getSpecificMovie} from './movie.service';

@Tags('Movie')
@Route('/')

export class MovieController extends Controller {
   
  @Post('/create')
  public async createMovie(@Body() movie: IMovie) {
    return createMovie(movie) 
  }

  @Get('/read')
  public async getAllMovies() {
    return getAllMovies()
  }

  @Get('/read/{movieId}')
  public async readMovieWithId(@Path('movieId') movieId: string) {
    return getSpecificMovie(movieId)
  }

  @Put('/update')
  public async updateMovie(@Body() movie: { id: string } & IMovie) {
    return updateMovie(movie)
  }

  @Delete('/delete/{movieId}')
  public async deleteMovie(@Path('movieId') movieId: string) {
    return deleteMovie(movieId)
  }

  @Get('/read/{genre}')
  public async filterByGenre() {
    return filterByGenre(`{genre}`)
  }

  @Get('/read/{actor}')
  public async filterByActor() {
    return filterByActor(`{actor}`)
  }

}





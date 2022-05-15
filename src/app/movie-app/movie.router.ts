import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { filterByGenre,filterByActor,totalLengthOfAllMovies, imdbUrls, totalImdbVotes } from './movie-manipulation';
import { IMovie, createMovie, updateMovie, deleteMovie, getAllMovies, getSpecificMovie} from './movie.service';

@Tags('Movie')
@Route('/')

export class MovieController extends Controller {
   
  @Post('/createMovie')
  public async createMovie(@Body() movie: IMovie) {
    return createMovie(movie) 
  }

  @Get('/movies')
  public async getAllMovies() {
    return getAllMovies()
  }

  @Get('/movies/{movieId}')
  public async readMovieWithId(@Path('movieId') movieId: string) {
    return getSpecificMovie(movieId)
  }

  @Put('/updateMovie')
  public async updateMovie(@Body() movie: { id: string } & IMovie) {
    return updateMovie(movie)
  }

  @Delete('/deleteMovie/{movieId}')
  public async deleteMovie(@Path('movieId') movieId: string) {
    return deleteMovie(movieId)
  }

  @Get('/genre/{genre}')
  public async filterByGenre(@Path('genre') genre: string) {
    return filterByGenre(genre)
  }

  @Get('/actors/{actor}')
  public async filterByActor(@Path('actor') actor: string) {
    return filterByActor(actor)
  }

  @Get('/moviesdata')
  public async moviesData() {
    return {
      length:totalLengthOfAllMovies(),
      urls:imdbUrls(),
      votes:totalImdbVotes()}
  }

}





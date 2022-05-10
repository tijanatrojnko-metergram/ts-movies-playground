import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { IMovie, createMovie, getMovie, updateMovie, deleteMovie } from './movie.service';

@Tags('Movie')
@Route('/')

export class MovieController extends Controller {
   
  @Post('/create')
  public async createMovie(@Body() movie: IMovie) {
    return createMovie(movie) 
  }

  @Get('/read')
  public async getMovie() {
    return getMovie()
  }

  @Get('/read/{movieId}')
  public async readMovieWithId(@Path('movieId') movieId: string) {
    return getMovie(movieId)
  }

  @Put('/update')
  public async updateMovie(@Body() movie: { id: string } & IMovie) {
    return updateMovie(movie)
  }

  @Delete('/delete/{movieId}')
  public async deleteMovie(@Path('movieId') movieId: string) {
    return deleteMovie(movieId)
  }


}

import { Movie } from '@entity/movie';
import {valSchema} from '../helpers/validation_schema'

export interface IMovie {
    id: string,
    title: string,
    year: number,
    runtime: number,
    rating: number,
    votes: number,

}

export const createMovie = async (movie: IMovie) => {
    try {
      const _newMovie = new Movie();
      const { error } = valSchema.validate(_newMovie);
      _newMovie['id'] = movie['id'];
      _newMovie['title'] = movie['title'];
      _newMovie['year'] = movie['year'];
      _newMovie['runtime'] = movie['runtime'];
      _newMovie['rating'] = movie['rating'];
      _newMovie['votes'] = movie['votes'];

      return _newMovie.save(); //bez await
    } catch (e) {
      throw new Error('Unsuccessful creation of a movie.')

    }
}

export const getAllMovies = async () => {
  try {
      return Movie.find();
    }
  catch (e) {
    throw new Error('No movies found.')
  }
}

export const getSpecificMovie = async (movieId: string) => {
  try {
    const foundMovie = await Movie.findOne({ where: { id: movieId } });
    if (!foundMovie) {   // get specific movie
      return { error: "Movie is not found!" };
    }
    return foundMovie;
  }
  catch (e) {
    throw new Error(`Movie with id: ${movieId} not found`);
  }
}

  

export const updateMovie = async (movie: { id: string } & IMovie) => {
    try {
      const _foundMovie = await Movie.findOne({ where: { id: movie['id'] } });
      const { error } = valSchema.validate(_foundMovie);
      if (!_foundMovie)  
        throw new Error(`Movie with id: ${movie.id} not found`)
      if (movie['title']) _foundMovie['title'] = movie['title'];
      if (movie['year']) _foundMovie['year'] = movie['year'];
      if (movie['runtime']) _foundMovie['runtime'] = movie['runtime'];
      if (movie['rating']) _foundMovie['rating'] = movie['rating'];
      if (movie['votes']) _foundMovie['votes'] = movie['votes'];

      return _foundMovie.save(); // update 
    } catch (e) {
      throw new Error('Unsuccessful update.')
    }
  }

export const deleteMovie = async (movieId: string) => {
    try {
      const _foundMovie = await Movie.findOne({ where: { id: movieId } });
      if (!_foundMovie) 
        throw new Error(`Movie with id: ${movieId} not found`)
      return _foundMovie.remove();
    } catch (e) {
      throw new Error('Unsuccessful delete.')
    }
  }

  
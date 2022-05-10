import { Movie } from '@entity/movie';
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
      _newMovie['id'] = movie['id'];
      _newMovie['title'] = movie['title'];
      _newMovie['year'] = movie['year'];
      _newMovie['runtime'] = movie['runtime'];
      _newMovie['rating'] = movie['rating'];
      _newMovie['votes'] = movie['votes'];

      return await _newMovie.save();
    } catch (e) {
      console.error(e);
    }
}

export const getMovie = async (movieId?: string) => {
    try {
      if (movieId) {   // get specific movie
        return await Movie.findOne({
          where: { id: movieId },
        });
      } else {        // get all movies
        return await Movie.find();
      }
    } catch (e) {
      console.error(e);
    }
}

export const updateMovie = async (movie: { id: string } & IMovie) => {
    try {
      const _foundMovie = await Movie.findOne({ where: { id: movie['id'] } });
      if (!_foundMovie) return { message: "Movie is not found!" };
      if (movie['title']) _foundMovie['title'] = movie['title'];
      if (movie['year']) _foundMovie['year'] = movie['year'];
      if (movie['runtime']) _foundMovie['runtime'] = movie['runtime'];
      if (movie['rating']) _foundMovie['rating'] = movie['rating'];
      if (movie['votes']) _foundMovie['votes'] = movie['votes'];

      return await _foundMovie.save();
    } catch (e) {
      console.error(e);
    }
  }

export const deleteMovie = async (movieId: string) => {
    try {
      const _foundMovie = await Movie.findOne({ where: { id: movieId } });
      if (!_foundMovie) return { message: "Movie is not found!" };
      return await _foundMovie.remove();
    } catch (e) {
      console.error(e);
    }
  }

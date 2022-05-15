import { string } from "joi";
import movies from "../../movies.json"

export function filterByGenre(genre: any) {
    const genreMovies = movies.filter((movie: { Genre: string | any[]; }) => movie.Genre.includes(genre))
    return genreMovies;
  }
  
export function filterByActor(actor: any) {
    const actorMovies = movies.filter((movie: { Actors: string | any[]; }) => movie.Actors.includes(actor))
    return actorMovies;
  }

// export const filterMovies = (req: { query: { genre: any; actor: any; imdbSort: any; }; }, res: { send: (arg0: string) => void; json: (arg0: any) => void; }) => {
//     const { genre, actor, imdbSort } = req.query;
//     let allMovies = movies.getAllMovies();
  
//     if (genre) allMovies = movies.filterByGenre(`${genre}`);
//     else if (actor) allMovies = movies.filterByActor(`${actor}`);
//     else if (imdbSort) {
//       if (imdbSort === "DESC" || "desc")
//         allMovies = movies.sortByRating(true, allMovies);
//       if (imdbSort === "ASC" || "asc")
//         allMovies = movies.sortByRating(false, allMovies);
//     } else res.send("Invalid filter!");
  
//     res.json(allMovies);
//   };

export function totalLengthOfAllMovies() {
  const result = movies.reduce((sum, movie) => {
    const length = parseInt(movie.Runtime);
    return length ? length + sum : sum;
  }, 0);
  let num = result;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return `${rhours} hours and ${rminutes} minutes.`;
}
  
  export function imdbUrls() {
    const imdburls = movies.map((movie) => {
      return `https://www.imdb.com/title/${movie.imdbID}/`;
    });
    return imdburls;
  }
  
  export function totalImdbVotes() {
    const result = movies.reduce((sum, movie) => {
      const votes = parseInt(movie.imdbVotes.replace(/,/g, ""));
      return votes ? votes + sum : sum;
    }, 0);
  
    return result;
  }




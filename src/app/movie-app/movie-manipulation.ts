const fs = require("fs");
let file = "./movies.json";
const moviefile = fs.readFileSync(file);
let movies = JSON.parse(moviefile);

export function filterByGenre(genre: any) {
    const genreMovies = movies.filter((movie: { Genre: string | any[]; }) => movie.Genre.includes(genre))
    return genreMovies;
  }
  
export function filterByActor(actor: any) {
    const actorMovies = movies.filter((movie: { Actors: string | any[]; }) => movie.Actors.includes(actor))
    return actorMovies;
  }

export const filterMovies = (req: { query: { genre: any; actor: any; imdbSort: any; }; }, res: { send: (arg0: string) => void; json: (arg0: any) => void; }) => {
    const { genre, actor, imdbSort } = req.query;
    let allMovies = movies.getAllMovies();
  
    if (genre) allMovies = movies.filterByGenre(`${genre}`);
    else if (actor) allMovies = movies.filterByActor(`${actor}`);
    else if (imdbSort) {
      if (imdbSort === "DESC" || "desc")
        allMovies = movies.sortByRating(true, allMovies);
      if (imdbSort === "ASC" || "asc")
        allMovies = movies.sortByRating(false, allMovies);
    } else res.send("Invalid filter!");
  
    res.json(allMovies);
  };

export const totalLength = (_req: any, res: { json: (arg0: string) => void; }) => {
    res.json(`${movies.totalLengthOfAllMovies()}`);
  };
  
export const movieLanguages = (_req: any, res: { json: (arg0: any) => void; }) => {
    res.json(movies.allLanguagues());
  };
  
export const movieUrls = (_req: any, res: { json: (arg0: any) => void; }) => {
    res.json(movies.imdbUrls());
  };
  
export const movieVotes = (_req: any, res: { json: (arg0: any) => void; }) => {
    res.json(movies.totalImdbVotes());
  };
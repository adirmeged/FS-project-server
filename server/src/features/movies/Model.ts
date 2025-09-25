import type { Movie } from "../../Type";
import db from "./DefaultMovie";

class MovieModel {
  getAllMovie() {
    return db.defaultMovie;
  }
  getTopReview() {
    const allMovies = db.defaultMovie;
    const sorted = allMovies.sort((a, b) => b.rating - a.rating);
    return sorted.slice(0, 6);
  }

  getLastMovie() {
    return db.defaultMovie.reduce((latest, movie) => {
      const [day, month, year] = movie.publicationDate.split(".").map(Number);
      const movieDate = new Date(year, month - 1, day);

      const [latestDay, latestMonth, latestYear] = latest.publicationDate
        .split(".")
        .map(Number);
      const latestDate = new Date(latestYear, latestMonth - 1, latestDay);

      return movieDate > latestDate ? movie : latest;
    }, db.defaultMovie[0]);
  }

  getMovieById(id: string) {
    const movie = db.defaultMovie.find((m: Movie) => m.movieId === id);
    return movie;
  }
}

export default new MovieModel();

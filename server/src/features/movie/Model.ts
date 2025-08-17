import type Type = require("../../Type");

const db = require("./DefaultMovie");
class MovieModel {
  getAllMovie() {
    return db.defaultMovie;
  }
  getLastMovie() {
    let latestDate = null;
    let latestMovie=db.defaultMovie[0];

    for (const movie of db.defaultMovie) {
      const dateParts = movie.publicationDate.split(".");
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]);
      const year = parseInt(dateParts[2]);

      const currentDate = new Date(year, month, day);

      if (latestDate === null || currentDate > latestDate) {
        latestDate = currentDate;
        latestMovie = movie;
      }
    }
    return latestMovie;
  }
  getMovieById(id: string) {
    const movie = db.defaultMovie.find((m: Type.Movie) => m.movieId === id);
    return movie;
  }
}

module.exports = new MovieModel();

import type Type = require("../../Type");
import express = require("express");
const Service = require("../movie/Service");
class MovieController {
  getAllMovie(req: express.Request, res: express.Response) {
    const movies = Service.getAllMovie();

    return res.status(200).json(movies);
  }
 getLastMovie(req: express.Request, res: express.Response) {
    const movie = Service.getLastMovie();

    return res.status(200).json(movie);
  }
  getMovieById(req: express.Request, res: express.Response) {
    const movie: Type.Movie = Service.getMovieById(req.params.id);

    if (movie === undefined) {
      return res.status(404).send("Not found");
    }

    return res.status(200).json(movie);
  }
}

module.exports = new MovieController();

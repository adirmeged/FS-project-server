import express from "express";
import Service from "./Service";

class MovieController {
  getAllMovie(req: express.Request, res: express.Response) {
    const movies = Service.getAllMovie();
    return res.status(200).json(movies);
  }

  getLastMovie(req: express.Request, res: express.Response) {
    const movie = Service.getLastMovie();
    return res.status(200).json(movie);
  }
  getTopReview(req: express.Request, res: express.Response) {
    const movies = Service.getTopReview();
    return res.status(200).json(movies);
  }
  getMovieById(req: express.Request, res: express.Response) {
    const movie = Service.getMovieById(req.params.id);

    if (!movie) {
      return res.status(404).send("Not found");
    }

    return res.status(200).json(movie);
  }
}

export default new MovieController();

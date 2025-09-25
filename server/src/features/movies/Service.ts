import Model from "./Model";

class MovieService {
  getAllMovie() {
    return Model.getAllMovie();
  }

  getLastMovie() {
    return Model.getLastMovie();
  }
  getTopReview() {
    return Model.getTopReview();
  }

  getMovieById(id: string) {
    return Model.getMovieById(id);
  }
}

export default new MovieService();

const Model=require("../movie/Model");
class MovieService{
  getAllMovie(){
    return Model.getAllMovie();
  }
   getLastMovie(){
    return Model.getLastMovie();
  }
  getMovieById( id:string){
    return Model.getMovieById(id);

  } 
}


module.exports =new MovieService();



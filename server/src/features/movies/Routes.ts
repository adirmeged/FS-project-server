import express from "express";
import Controller from "./Controller";

const router = express.Router();
//movies/
router.get("/", Controller.getAllMovie);
router.get("/lastMovie", Controller.getLastMovie);
router.get("/topReview", Controller.getTopReview);
router.get("/:id", Controller.getMovieById);

export default router;

const express = require("express");
const router = express.Router();
const Controller = require("../movie/Controller");

router.get("/", Controller.getAllMovie);
router.get("/lastMovie", Controller.getLastMovie);
router.get("/:id", Controller.getMovieById);
module.exports = router;


const express = require("express");
const {
  getMovies,
  getMovieById,
  updateMovies,
  addMovies,
} = require("../controllers/movies-controller");
const { healthCheckV2 } = require("../controllers/health-controller");

const router = express.Router();

router.get(":id", getMovieById);
router.get("/", getMovies);
router.post("/", addMovies);
router.put("/:id", updateMovies);
module.exports = router;

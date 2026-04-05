const movies = [
  { id: 1, title: "Inception", language: "english", rating: 9 },
  { id: 2, title: "Dhurandar", language: "hindi", rating: 10 },
  { id: 3, title: "Spider Man", language: "english", rating: 8 },
];

exports.getMovieById = (req, res) => {
  const movieId = Number(req.params.id);
  // console.log(movieId);
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    return res.status(404).send({
      success: false,
      message: "Movie not found",
    });
  }
  res.send({
    success: false,
    message: movie,
  });
};

exports.getMovies = (req, res) => {
  let result = movies;
  const { language, minRating } = req.query;
  if (language) {
    result = result.filter((m) => m.language === language);
  }

  if (minRating) {
    result = result.filter((m) => m.rating === Number(minRating));
  }
  res.send({
    success: "true",
    message: "Movies fetched succesfully",
    data: result,
  });
};

exports.addMovies = (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    ...req.body,
    // title: req.body.title,
    // language: req.body.language,
    // rating: req.body.rating,
  };

  movies.push(newMovie);

  res.status(201).send({
    success: true,
    data: newMovie,
  });
};

exports.updateMovies = (req, res) => {
  const movieId = Number(req.params.id);

  const index = movies.findIndex((m) => m.id === movieId);

  if (index === -1) {
    return res.status(404).send({
      success: false,
      message: "Movie not found",
    });
  }

  movies[index] = {
    id: movies.length + 1,
    title: req.body.title,
    language: req.body.language,
    rating: req.body.rating,
  };

  res.send({
    success: true,
    data: movies[index],
  });
};

exports.testBody = (req, res) => {
  res.status(200).json({
    receivedBody: req.body,
  });
};

exports.testError = (req, res) => {
  const error = new Error("this is a test error");
  error.statusCode = 400;
  console.log(error);
  next(error);
};

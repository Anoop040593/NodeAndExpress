module.exports = function (req, res, next) {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(
      `${req.method} ${req.originalUrl} ${req.statusCode} ${duration}ms`,
    );
  });

  next(); //helps move to next step
};

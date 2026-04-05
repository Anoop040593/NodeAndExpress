const healthCheck = (req, res) => {
  res.status(200).json({
    success: "true",
    message: "Backend is up and running",
  });
};

const healthCheckV2 = (req, res) => {
  res.status(200).json({
    success: "true",
    message: "Backend is up and running for V2",
  });
};
module.exports = { healthCheck, healthCheckV2 };

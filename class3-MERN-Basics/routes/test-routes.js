const express = require("express");
const { testBody } = require("../controllers/test-controller");

//Middlewares
const logger = require("../middlewares/loggerMiddleware");
const router = express.Router();

router.post("/test-body", logger, testBody); //logger moves to test body due to next in Middleware

router.get("/error", logger, testBody); //for error

module.exports = router;

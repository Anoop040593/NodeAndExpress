const express = require("express");
const healthRoutes = require("./routes/health-routes");
const movieRoutes = require("./routes/movies-routes");
const testRoutes = require("./routes/test-routes");
const app = express();

//MiddleWares
const notFound = require("./middlewares/notFound.js");
const errorHandler = require("./middlewares/errorHandler.js");

//global middleware
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/tests", testRoutes);

//Not found handler
app.use(notFound); //error will be thrown once the route is not found

//Global error handler
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});

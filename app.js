// import express
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const appRouter = require('./routes/appRoutes');

//  create an express app
const app = express();

// use the express json middleware
app.use(express.json());

// use the logger middleware
app.use(logger);

app.use('/recipes', appRouter);

// app.post("/", (request, response) => {
//   response.json({ message: "POST" });
// });

// app.put("/", (request, response) => {
//   response.json({ message: "PUT" });
// });

// app.delete("/", (request, response) => {
//   response.json({ message: "DELETE" });
// });

app.use(errorRoute);

// export the app
module.exports = app;
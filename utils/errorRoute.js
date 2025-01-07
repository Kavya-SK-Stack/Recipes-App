// middleware for handling 404 errors
const errorRoute = (request, response, next) => {
  response.json({ message: "Route not found" });

  next();
};

module.exports = errorRoute;

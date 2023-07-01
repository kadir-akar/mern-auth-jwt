const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // set status code to 200 if it is 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  // if error is 404, set message to 'Not Found'
  if (err.name === "castError" && err.kind === "ObjectId") {
    message = "Not Found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };

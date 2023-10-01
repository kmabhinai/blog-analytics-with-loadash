const AppError = require("./../utils/appError");

const handleWrongUrl = (err) => {
  const message = `Fix the fetching url!!`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  //Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // console.error(err);

    res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Error";

  let error = { ...err };
  if (process.env.NODE_ENV === "development") {
    if (err.message === "Request failed with status code 404") {
      error = handleWrongUrl(error);
    }
    sendErrorDev(error, res);
  } else if (process.env.NODE_ENV == "production") {
    if (err.message === "Request failed with status code 404") {
      error = handleWrongUrl(error);
    }

    sendErrorProd(error, res);
  }
};

const errorMiddleware = (
  error,
  req,
  res,
  next
) => {
  console.error(
    `[${req.method}] ${req.originalUrl}`,
    error
  );

  const statusCode =
    error.statusCode || 500;

  const message =
    error.message ||
    "Internal server error.";

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorMiddleware;
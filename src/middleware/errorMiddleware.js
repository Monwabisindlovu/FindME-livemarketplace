const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);

  if (err.status === 404) {
    res.status(404).json({ message: 'Resource not found' });
  } else if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Unauthorized access' });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default errorMiddleware;

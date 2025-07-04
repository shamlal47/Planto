
const errorHandler = (err, req, res, next) => {
   try{
    let error = {...err};
    error.message = err.message;
    console.error(err);
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
   }
   if (err.code === 11000) {
        const message = `Duplicate field value entered`;
        error = new ErrorResponse(message, 400);
    }
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Server Error'
    });
}
    catch (error) {
        next(error);
    }
}

export default errorHandler;
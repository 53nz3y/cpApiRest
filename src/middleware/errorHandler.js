//============= error handle middleware ===================

const errorHandler = (err, req, res, next) => {
    console.error('error:',err);
    // Default error response 
    let statusCode = 500;
    let message = 'Internal Server error';
    // les differentes erreurs
    if(err.name === 'ValidationError') {
        statusCode =400;
        message = err.message;
    } else if (err.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid ID format';
    } else if (err.code === 11000) {
        statusCode = 400;
        message = 'Duplicate field value'
    }
    res.status(statusCode).json({error : message});
};

module.exports = errorHandler;
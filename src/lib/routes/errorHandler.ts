const errorHandeler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    const { status, message, error } = err;
    const result = {
        error: error || "not found",
        status: status || "500",
        message: message || 'The Page you are looking for doesnt exist',
    };
    res.status(result.status).json(result)
};
export default errorHandeler;

const errorHandler = (err, req, res, next) => {
    //if status code is set (ie 400) use 400 else use 500 status code
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        Stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {errorHandler}
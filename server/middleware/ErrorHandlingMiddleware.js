const ApiError = require('../error/ApiError')

module.exports = (error, req, res, next) => {
    if(error instanceof ApiError) {
    return res.status(error.status).json({message: error.message})
    }

    return res.status(500).json({message: 'Oops... Something went wrong'})
}
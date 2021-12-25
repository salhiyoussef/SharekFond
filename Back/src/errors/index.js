module.exports = app => {
    app.use((req, res, next) => {
        const err = new Error('App Not Found')
        err.status = 404
        next(err)
    })

    app.use((err, req, res, next) => {
        const status = err.status || 500
        const message = err.message || 'Error processing your request'
        res.status(status).send(message)
    })
}
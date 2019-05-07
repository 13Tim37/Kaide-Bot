const userRoutes = require('./user')

module.exports = function (app) {
    app.use('/users', userRoutes)

    app.use((req, res) => {
        res.status(404).send({
            message: 'Not found'
        });
    });
}
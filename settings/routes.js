

module.exports = (app) => {
    const indexController = require('../Controller/indexController')
    const usersController = require('../Controller/usersController')

    app
        .route('/')
        .get(indexController.index)

    app
        .route('/api/users')
        .get(usersController.getAllUsers)

    app
        .route('/api/auth/signup')
        .post(usersController.signup)

}
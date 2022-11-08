

module.exports = (app) => {
    const passport = require('passport')
    const indexController = require('../Controller/indexController')
    const usersController = require('../Controller/usersController')



    app
        .route('/')
        .get(indexController.index)

    app
        .route('/api/users')
        .get(passport.authenticate('jwt', { session: false }), usersController.getAllUsers)

    app
        .route('/api/auth/signup')
        .post(usersController.signup)
    app
        .route('/api/auth/signin')
        .post(usersController.signin)

}
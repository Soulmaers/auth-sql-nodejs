const response = require('../response')

exports.index = (req, res) => {
    //  res.send(`${__dirname}/public/app.html`);
    //res.render('../public/app.html')
    response.status(200, 'Hello World', res)

}
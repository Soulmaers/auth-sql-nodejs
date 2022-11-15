const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')


const app = express();
const port = process.env.PORT || 3334



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./middleware/passport.js')(passport);

const indexHTML = path.resolve(__dirname, './public/index.html');
app.use('/', express.static('public'));
app.get('/', (req, res) => res.sendFile(indexHTML));



const routes = require('./settings/routes')
routes(app);






app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
})
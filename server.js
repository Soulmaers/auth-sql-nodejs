const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3333
const routes = require('./settings/routes')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app);






app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
})
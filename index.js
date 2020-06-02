const express = require('express')
const router = require('./router')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

const PORT = 5000

app.listen(PORT, () => console.log('Server started on port ' + PORT))

module.exports = app
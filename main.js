import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import todos from './routers/todo-router'

let app = express()
app.disable('x-powered-by')
app.set('port', process.env.PORT || 3030)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', todos)

app.listen(app.get('port'), function () {
  console.log('Press Ctrl+C to terminate...')
})
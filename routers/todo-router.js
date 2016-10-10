import express from 'express'
import db from '../src/todo-database'

const router = express.Router()

router.get('/', (req, res) => {
/* First to run */
  db.select('task').from('todos').then(function(result){
    res.render('todo', { result })
    console.log(result)
  })
  /* Second to run */
  db.select('task').from('todos').limit(300).map(function(row) {
  return row.task
    })
    /* Third to run */
    .then(todo => {
      console.log(todo)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/', (req, res) => {
  let todos = req.body.todos
  db('todos').insert({ task: todos })
  .then(result => {
    console.log(result)
    db.select('task').from('todos').then(function(result){
    res.render('todo', { result })
    console.log(result)
  })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/delete/:task', (req, res) => {
  let value = req.params.task
  console.log('params', value)
  db('todos').where('task', value).del()
    .then(result => {
    db.select('task').from('todos').then(function(result){
      res.render('todo', { result })
      console.log(result)
    })
  })
    .catch(err => {
    console.log(err)
  })
})

router.post('/update/:task', (req, res) => {
  let value = req.params.task
  let todos = req.body.updatedTodos
  db('todos').where("task", value).update({ task: todos })
  .then(result => {
    db.select('task').from('todos').then(function(result){
      res.render('todo', { result })
      console.log(result)
   })
  })
  .catch(err => {
    console.log(err)
  })
})

export default router
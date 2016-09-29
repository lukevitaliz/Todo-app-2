import express from 'express'
import db from '../src/todo-database'

const router = express.Router()

router.get('/', (req, res) => {
/* First to run */
  db.select('task').from('todos').then(function(result){
    res.render('todo', {title: 'Todo-app', result})
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
  console.log('here', req.body)
  db('todos').insert({ task: req.body.todos
  })
  .then(result => {
    console.log(result)
      db.select('task').from('todos').then(function(result){
    res.render('todo', {title: 'Todo-app', result})
    console.log(result)
  })
  })
  .catch(err => {
    console.log(err)
  })
})
router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

export default router
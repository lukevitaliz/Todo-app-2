exports.up = function (knex, Promise) {
  return Promise.join(
    knex.schema.createTable('todos', function (table) {
      table.string('task', 255)
    })
  )
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('todos')
  ])
} 

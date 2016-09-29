import config from '../knexfile.js'
import knex from 'knex'

const db = knex(config['development'])

db.migrate.latest([config])

export default db
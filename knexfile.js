module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite'
    },
    seeds: {
      directory: './seeds/dev'
    }
  }
}

let mysql = require('mysql2')

module.exports = { 'query': query }

let pool = mysql.createPoolCluster({ 'canRetry': true })

pool.add({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bhland'
})

pool.getConnection((err, _connection) => {
    if (err) {
        throw new Error('MySQL connection error: ' + err)
        process.exit(1)
    }
    console.info('MySQL connection OK')
    _connection.release()
})

function query(sql, params, cb) {
    if (typeof params === 'function') {
        cb = params
        params = []
    }

    pool.getConnection((err, connection) => {
        if (err) return cb(err)
        connection.query(sql, params, (err, rows, fields) => {
            connection.release()
            cb(err, rows, fields)
        })
    })
}
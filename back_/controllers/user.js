const co = require('../config/db.config.js')
let bcrypt = require('bcrypt')

exports.getAll = callback => {
    let sql = "SELECT * FROM user"
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.getOne = (id, callback) => {
    let sql = "SELECT * FROM user WHERE id = " + id
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.add = (data, callback) => {
    const hash = bcrypt.hashSync(data.password, 5)
    let sql = "INSERT INTO user VALUES(?, ?, ?, ?, ?)"
    co.query(sql, [null, data.name, data.email, hash, 'user'], err => {
        if (err) console.log(err)
        callback()
    })
}

exports.update = (id, data, callback) => {
    let sql = "UPDATE user SET track = '" + data.track + "', title = '" + data.title + "' WHERE id = " + id
    co.query(sql, err => {
        if (err) console.log(err)
        callback()
    })
}

exports.delete = (id, callback) => {
    let sql = "DELETE FROM user WHERE id = " + id
    co.query(sql, (err) => {
        if (err) console.log(err)
        callback()
    })
}
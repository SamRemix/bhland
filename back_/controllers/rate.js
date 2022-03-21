const co = require('../config/db.config.js')

exports.getAll = callback => {
    let sql = "SELECT * FROM rate"
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.getOne = (id, callback) => {
    let sql = "SELECT * FROM rate WHERE id = " + id
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.add = (data, callback) => {
    let sql = "INSERT INTO rate VALUES(?, ?, ?, ?)"
    co.query(sql, [null, data.rate, data.id_User, data.id_Music], err => {
        if (err) console.log(err)
        callback()
    })
}

exports.update = (id, data, callback) => {
    let sql = "UPDATE rate SET rate = '" + data.rate + "' WHERE id = " + id
    co.query(sql, err => {
        if (err) console.log(err)
        callback()
    })
}
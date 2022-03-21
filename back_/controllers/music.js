const co = require('../config/db.config.js')

exports.getAll = callback => {
    let sql = "SELECT * FROM music"
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.getOne = (id, callback) => {
    let sql = "SELECT * FROM music WHERE id = " + id
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.add = (data, callback) => {
    let sql = "INSERT INTO music VALUES(?, ?, ?, ?)"
    co.query(sql, [null, data.track, data.title, data.id_Album], err => {
        if (err) console.log(err)
        callback()
    })
}

exports.update = (id, data, callback) => {
    let sql = "UPDATE music SET track = '" + data.track + "', title = '" + data.title + "' WHERE id = " + id
    co.query(sql, err => {
        if (err) console.log(err)
        callback()
    })
}

exports.delete = (id, callback) => {
    let sql = "DELETE FROM music WHERE id = " + id
    co.query(sql, (err) => {
        if (err) console.log(err)
        callback()
    })
}
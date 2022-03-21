const co = require('../config/db.config.js')

exports.getAll = callback => {
    let sql = "SELECT * FROM album"
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.getOne = (id, callback) => {
    let sql = "SELECT * FROM album WHERE id = " + id
    co.query(sql, (err, rows) => {
        if (err) console.log(err)
        callback(rows)
    })
}

exports.add = (data, callback) => {
    let sql = "INSERT INTO album VALUES(?, ?, ?, ?)"
    co.query(sql, [null, '../static/cover/pike' + data.pike + '.png', data.pike || null, data.name], err => {
        if (err) console.log(err)
        callback()
    })
}

exports.update = (id, data, callback) => {
    let sql
    if (!data.pike) sql = "UPDATE album SET name = '" + data.name + "' WHERE id = " + id
    else sql = "UPDATE album SET cover = '../static/cover/pike" + data.pike + ".png', pike = '" + data.pike + "', name = '" + data.name + "' WHERE id = " + id
    co.query(sql, err => {
        if (err) console.log(err)
        callback()
    })
}

exports.delete = (id, callback) => {
    let sql = "DELETE FROM album WHERE id = " + id
    co.query(sql, (err) => {
        if (err) console.log(err)
        callback()
    })
}
const express = require('express')
const cors = require('cors')
// const cookieParser = require('cookie-parser')
const session = require('express-session')

const album = require('./controllers/album.js')
const music = require('./controllers/music.js')
const user = require('./controllers/user.js')
const rate = require('./controllers/rate.js')

const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const front_ = 'http://localhost:3000'

let mysqlStore = require('express-mysql-session')(session)

let options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bhland'
}

let sessionStore = new mysqlStore(options)

// app.use(cookieParser())
app.use(session({
    secret: 'test',
    store: sessionStore,
    cookie: { maxAge: 10000 },
    proxy: true,
    resave: true,
    saveUninitialized: true
}))


// app.get('/', (req, res) => { })

app.post('/signup', (req, res) => {
    console.log(req.session)
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400)
    } else {
        user.getAll(datas => {
            datas.filter(data => {
                if (data.email == req.body.email) {
                    console.log('email existe deja')
                }
            })
        })
        res.redirect(front_ + '/signup')
        return
    }
    user.add(req.body, () => {
        req.session.user = req.body.name
        console.log('user: ', req.session.user)
        res.redirect(front_)
    })
})
// app.post('/login', (req, res) => { })

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) console.log(err)
    })
    res.redirect(front_)
})

// #### ALBUM ####

app.get('/album', (req, res) => {
    album.getAll(data => res.json(data))
})
app.get('/album/:id', (req, res) => {
    album.getOne(req.params.id, data => res.json(data))
})
app.post('/addalbum', (req, res) => {
    album.add(req.body, () => res.redirect(front_ + '/reviews'))
})
app.post('/updatealbum/:id', (req, res) => {
    album.update(req.params.id, req.body, () => res.redirect(front_ + '/reviews'))
})
app.get('/deletealbum/:id', (req, res) => {
    album.delete(req.params.id, () => res.redirect(front_ + '/reviews'))
})


// #### MUSIC ####

app.get('/music', (req, res) => {
    music.getAll(data => res.json(data))
})
app.get('/music/:id', (req, res) => {
    music.getOne(req.params.id, data => res.json(data))
})
app.post('/addmusic', (req, res) => {
    music.add(req.body, () => { res.redirect(front_ + '/reviews') })
})
app.post('/updatemusic/:id', (req, res) => {
    music.update(req.params.id, req.body, () => res.redirect(front_ + '/reviews'))
})
app.get('/deletemusic/:id', (req, res) => {
    music.delete(req.params.id, () => res.redirect(front_ + '/reviews'))
})


// #### USER ####

app.get('/user', (req, res) => {
    user.getAll(data => res.json(data))
})
app.get('/user/:id', (req, res) => {
    user.getOne(req.params.id, data => res.json(data))
})
app.post('/updateuser/:id', (req, res) => {
    user.update(req.params.id, req.body, () => res.redirect(front_ + '/reviews'))
})
app.get('/deleteuser/:id', (req, res) => {
    user.delete(req.params.id, () => res.redirect(front_ + '/reviews'))
})


// #### RATE ####

app.get('/rate', (req, res) => {
    rate.getAll(data => res.json(data))
})
app.get('/rate/:id', (req, res) => {
    rate.getOne(req.params.id, data => res.json(data))
})
app.post('/addrate', (req, res) => {
    rate.add(req.body, () => res.redirect(front_ + '/reviews'))
})
app.post('/updaterate/:id', (req, res) => {
    rate.update(req.params.id, req.body, () => res.redirect(front_ + '/reviews'))
})

app.listen(8081, () => console.log('App started on PORT : 8081'))
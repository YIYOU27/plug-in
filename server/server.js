const express = require('express')
const bodyParser = require('body-parser')
var db = require('./db')



var server = express()

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token")
    res.header("Access-Control-Expose-Headers", "*")
    next()
})

server.get('/books', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    db.query('SELECT * FROM  bookselfs')
        .then((resolve) => {
            res.send(JSON.stringify(resolve))
            res.end()
        })
        .catch((err) => {
            console.log(err)
        })
})
server.use(bodyParser.json()) // *
server.use(bodyParser.urlencoded({extended:true})) // *

server.post('/login', (req, res) => {
    console.log(req.body)
    let sql = 'SELECT * FROM users WHERE user_name = ' + '"' + req.body.user_name + '"' + ' AND password = ' + '"' + req.body.password + '"'
    db.query(sql)
        .then((resolve) => {
            console.log(resolve)
            if (resolve.length == 0) {
                console.log('用户名或者密码错误')
                res.send('用户名或者密码错误')
                res.end()
            } else {
                console.log('登陆成功');
                res.send('登陆成功')
                res.end()
            }
        })
        .catch((err) => {
            console.log(err)
        })
})


server.post('/register', (req, res) => {
    delete req.body.checkPass
    // console.log(req.body)
    let sql = 'SELECT * FROM users WHERE user_name = ' + '"' +req.body.user_name + '"'
    console.log(sql)
    db.query(sql) // 判断是否已经注册
        .then((resolve) => {
            if (resolve.length == 0) {
                db.query('INSERT INTO users SET ?', req.body, (err, res) => {
                    if (err) throw err
                })
                    .then((resolve) => {
                        res.send('注册成功')
                        res.end()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                res.send('用户名已被使用')
                res.end()
            }
        })
})

server.listen(8081)

module.exports = (function() {
    const routes = require('express').Router()

    routes.get('/', function(req, res) {
        res.json({
            status: 200,
            message: 'base controller defined'
        })
    })

    routes.get('/users', function(req, res) {
        // res.send('user controller defined')
        res.json({
            name: 'aulianza',
            age: '17'
        })
    })

    return routes
})()
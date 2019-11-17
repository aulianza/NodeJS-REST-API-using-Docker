// require dependencies
const express = require('express')
const app = express()

// routing
const routes = require('./routes')
app.use('/', routes)

// listen port
const port = 3000
app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})

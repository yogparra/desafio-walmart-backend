const express = require('express')
const axios = require('axios')
const parser = require('body-parser')
const app = express()
const port = 3000

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.get('/', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.send(data)
})

app.post('/', async (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
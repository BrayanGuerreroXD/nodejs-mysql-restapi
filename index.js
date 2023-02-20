import express from 'express'

const app = express()

app.get('/employees', (req, res) => {res.send('Get employees')})

app.post('/employees', (req, res) => {res.send('Post employees')})

app.put('/employees', (req, res) => {res.send('Put employees')})

app.delete('/employees', (req, res) => {res.send('Delete employees')})

app.listen(3000)
console.log("Server listening on port 3000")
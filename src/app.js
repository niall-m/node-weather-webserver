const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))
// ^ index overrides root path below
app.get('', (req, res) => {
  res.send('hello express')
})

app.get('/help', (req, res) => {
  res.send('help page')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.get('/weather', (req, res) => {
  res.send('weather page')
})

app.listen(3000, () => {
  console.log('server is up on port 3000')
})
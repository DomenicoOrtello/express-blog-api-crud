const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

app.use(express.static('public'))

app.use ('/bacheca', postsRouter)

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);//use router posts di express

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})
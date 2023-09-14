const express = require('express')
const app = express()
const port = 3000


//impoert library CORS
const cors = require('cors')

//use cors
app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//import body parse
const bodyParser = require('body-parser')

//parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse applicatioan/json
app.use(bodyParser.json())
//import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);//use router posts di express

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})
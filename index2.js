const express = require('express');
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!- open on local host server at port 3000')
})

app.get('/page',(req,res)=> {
    res.send('hi ambest this is open local server at port 3000/page')

})

app.get('/ABC',(req,res)=>{
    res.send('<h1>hi ambest this is login page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>hi ambest this is youtube page</h1>')
})

app.listen(3003, () => {
  console.log('server started  on  http://localhost:3003')
})

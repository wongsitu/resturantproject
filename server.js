// require express function
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Order = require('./models/order')
const db = require('./models')
mongoose.connect('mongodb://localhost/projectOne')



// create var app to call express function 
const app = express();

// allow express to serve all files inside public foler
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

const cars = [{
  brand : 'bmw',
  model : '535i'
}]


// app.get('/api/:color', (req,res) => {
//   let color = req.params.color /* set var color = req.params.color */
//   res.send('you picked '+ color)
// })

app.get('/',(req,res) => {
  res.send('hello')
})

app.get('/api/cars', (req,res) => {
  res.json(cars)
})





// server listening localhost 3000
app.listen(3000, () => {
  console.log('listening at localhost:3000')
})
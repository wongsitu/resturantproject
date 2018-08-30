const db = require('./models')

const order = {
     name : 'mensho',
     price: 18
}

db.Order.create(order,(err,newClient) => {
     if(err){ return console.log(err)}
     console.log('saved new client: ',newClient);
})
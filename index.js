const mongoose = require('mongoose')
const app = require('./app')
const port = 3001

mongoose.Promise = global.Promise

const opciones = {
  user:'productListUser',
  pass:'productListPassword',
  useNewUrlParser: true, 
  useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/promotions?authSource=admin', opciones)
.then(() => {
    console.log('Conexion correcta!!')
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
})
.catch(err => console.log(err))
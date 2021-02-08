const express= require("express");
const app= express();
const volleyball = require('volleyball');


const routes = require('./routes');
const db = require('./db/index');



// app.use("/",(req, res, next)=>{
//     console.log("barrita")
// })

app.use( routes);

app.use(volleyball);

db.sync()
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(3000);
    console.log('Servidor escuchando en el puerto 3000');
  })
  .catch(console.error);

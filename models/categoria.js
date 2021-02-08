const S = require('sequelize');
const db = require('../db');



class Categoria extends S.Model { }

Categoria.init({
    nombre: {
        type: S.STRING
    },
categoria: {
    type: S.STRING
},
descripccion:{
    type: S.TEXT
}

}, { sequelize: db, modelName: "categoria" })
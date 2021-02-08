const   Sequelize= require("sequelize")

const db= new Sequelize("postgres://localhost:5432/integradorback" ,{
    loggins: false
})

module.exports= db
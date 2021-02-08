const express = require('express');
const router = express.Router();

const Producto = require('../models');

router.get("/productos?categoria=libros", (req,res, next)=>{
    let libros= req.params.libros
    Producto.findOne({
where:{
    nombre: libros
}
    }).then(categoria=>{
        res.send(categoria)
    }).catch(next)

})

router.get("/", (req, res, next) => {
    Producto.findAll({}).then(productos => {
        res.send(productos)
    }).catch(next)
})

router.get("/:id", (req, res, next) => {
    let id = req.params.id;
    Producto.findByPK(id).then(productos => {
        res.send(productos)
    }).catch(next)

})

router.post("/", (req, res, next) => {
    
    let body= req.body

    Producto.findAll(body).then(producto=>{
        res.send(producto)
    }).catch(next)
})

router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    let body= req.body

    Producto.update(body,{
        where:{
           id: id 
        }
    }).then(producto=>{
        res.send(producto)
    }).catch(next)
})

router.delete("/:id", (req, res, next) => {
    let productoId = req.params.id;
  
    Producto.destroy ({
        where:{
            id: productoId
        } 
    }).then(producto=>{
       
        res.send(producto)
    }).catch(next)
})

module.exports = router
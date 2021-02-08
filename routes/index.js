const express = require('express');
const router = express.Router();
const rutasProducto= require('./producto.js')
const rutasCategoria= require('./categoria.js')

router.use("/producto", rutasProducto)
router.use("/", rutasCategoria)



module.exports = router;
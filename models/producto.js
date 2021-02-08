const S = require('sequelize');
const db = require('../db');




class Producto extends S.Model { }

Producto.init({
    nombre: {
        type: S.STRING
    },
    precio: {
        type: S.INTEGER,
        
        
    },
    descripcion: {
        type: S.STRING


    },
    disponible: {
        type: S.BOOLEAN,
        defaultValue: true
    },
    stock: {
        type: S.INTEGER,
        set(){
            if(this.stock == "0"){
                return this.disponible= false;
            }
        }
    },

    delvolverPrecio:{
        type: S.VIRTUAL,
        get (){
            return "$ " + this.getDataValue("precio");
        }
    }


}, { sequelize: db, modelName: "producto" })

Producto.addHook("beforeCreate",function(producto){
    if(this.disponible == false){
        Producto.nombre= this.nombre + " No disponible"
    }

})

Producto.sinStock = function () {
    return Producto.findAndCountAll({
        where: {
            disponible: false, stock: 0
        }
    })
}

Producto.prototype.ganacias= function(){
    
    return this.stock * this.precio ;
}


module.exprots = Producto
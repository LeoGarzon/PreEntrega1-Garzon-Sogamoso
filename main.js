Total = 80000

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.PrecioConTotal = function () {
            return this.precio - Total 
        }

        this.ajustarStock = function (unidadesVendidas) {
            if (typeof unidadesVendidas === "number" && this.stock >= unidadesVendidas && this.stock > 0) {

                return this.stock = this.stock - parseInt(unidadesVendidas) 
            } else {
                console.error("error al descontar unidades", unidadesVendidas) 
            }


        }

    }
}
    
    const producto1 = new Producto (1, "radios", 1500, 15)
    const producto2 = new Producto (2, "antena", 8000, 20)
    const producto3 = new Producto (3, "cables", 40, 100)
    
    console.log(producto2.PrecioConTotal())
    
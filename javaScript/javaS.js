class Producto {
    constructor(nombre, codigoBarra, stock, precio, vencimiento) {
        this.nombre = nombre;
        this.codigoBarra = codigoBarra;
        this.stock = stock;
        this.precio = precio;
        this.vencimiento = vencimiento;
        this.vender = false;
    }

    sumarIva() {
        this.precio = this.precio * 0.21;

    }

    restarIva() {
        this.precio = this.precio / 1.2;

    }

    venderPorCantidad(cantidad) {

        this.stock = this.stock - cantidad;

        this.vender = true;
    }

    mostraProductos() {
        //console.info("el Producto es",this);
        console.log("nombre: " + this.nombre + " codigo de barra: " + this.codigoBarra + " stock: " + this.stock + " precio: $ " + " vencimiento: " + this.vencimiento);
        if (this.vendido == true) {
            console.log("Se vendio");
        } else {
            console.log("No se vendio");
        }
    }

}

function botonProductos() {

    const productos = [];
    productos.push(new Producto("yerba", " 263534587412", 12, 320, "20/12/2023"));
    productos.push(new Producto("paty", "256654878962", 12, 820, "20/12/2023"));
    productos.push(new Producto("papas fritas", "2347488955", 12, 920, "20/12/2023"));

    productos[1].venderPorCantidad(10);



    for (const Producto of productos) {
        console.log(Producto.mostraProductos());
        // console.log(Producto.sumarIva());

    }

}
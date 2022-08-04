class ProductoEstructura {
    constructor(nombre, codigoBarra, stock, precio, vencimiento) {
        this.nombre = nombre;
        this.codigoBarra = codigoBarra;
        this.stock = stock;
        this.precio = precio;
        this.vencimiento = vencimiento;
    }

    conIva (){
        let iva = this.precio * 1.21;
        let mensaje= "El precio con el iva es $ " + iva;
        console.log(mensaje);
    }

    sinIva (){
        let iva= this.precio / 1.21;
        let mensaje= "El precio sin el iva es $ " + iva;
        console.log(mensaje);

    }

    mostraProductos() {
        console.log("nombre: " + this.nombre + " codigo de barra: " + this.codigoBarra + " stock: " + this.stock + " precio: $ " + this.precio + " vencimiento: " + this.vencimiento);

    }

}


const datosProductos = [];


function botonProductos() {

    let entrada = confirm("Desea cargar productos");

    while (entrada) {

        let nombreProducto = prompt("ingresar nombre del preducto");

        let codigoBarra = +prompt("ingresar codigo de barra");
        while (isNaN(codigoBarra)) {
            alert("Ingrese datos numericos");
            codigoBarra = +prompt("ingresar codigo de barra");
        }

        let stock = +prompt("ingresar cantidad del producto");
        while (isNaN(stock)) {
            alert("Ingrese datos numericos");
            stock = +prompt("ingresar cantidad del producto");
        }
        let precio = parseFloat(prompt("ingresar precio del producto"));
        while (isNaN(precio)) {
            alert("Ingrese datos numericos");
            precio = parseFloat(prompt("ingresar precio del producto"));
        }
        

        let vencimiento = prompt("Ingrese fecha de vencimiento");

        datosProductos.push(new ProductoEstructura(nombreProducto, codigoBarra, stock, precio, vencimiento));

        entrada = confirm("Desea cargar productos");
    }


    for (const ProductoEstructura of datosProductos) {
        ProductoEstructura.mostraProductos();
        ProductoEstructura.conIva();
        ProductoEstructura.sinIva();

    }

}
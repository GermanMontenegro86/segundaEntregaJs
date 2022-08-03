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
        console.log("nombre: " + this.nombre + " codigo de barra: " + this.codigoBarra + " stock: " + this.stock + " precio: $ " + " precio con iva: $" + this " vencimiento: " + this.vencimiento );
        if (this.vendido == true) {
            console.log("Se vendio");
        } else {
            console.log("No se vendio");
        }
    }

}

function botonProductos() {

    const productos = [];
    productos.push(new Producto("yerba", "263534587412", 12, 320, "20/12/2023"));
    productos.push(new Producto("paty", "256654878962", 12, 820, "20/12/2023"));
    productos.push(new Producto("papas fritas", "2347488955", 12, 920, "20/12/2023"));

    productos[1].venderPorCantidad(10);

    for (const Producto of productos) {
        //  console.log (Producto.mostraProductos());
        console.log(Producto.sumarIva());


    }

}





























// function cargarProductos() {
//  let nombre= prompt("Escribir nombre del producto");
//  let codigoBarra= parseInt(prompt("Colocar los numeros codigo de barra del producto"));
//  let stock=parseInt(prompt("Colocar cantidad"));
//  let vencimiento= prompt("Escribir fecha de vencimiento ejemplo 09/09/2022");

//  const producto = new Producto (nombre, codigoBarra, stock, vencimiento);

//  return producto;

// }





// function botonProductos() {

//     let mensaje = parseInt(prompt("1. Cargar producto\n2. Salir"));

//     while (mensaje != 2) {
//         switch (mensaje) {
//             case 1:
//                 cargarProductos();
//                 mostrarProducto();


//                 break;

//             default:
//                 alert("Ingresar dato numerico");
//                 break;
//         }





//         mensaje = parseInt(prompt("1. Cargar producto\n2. Salir"));
//     }

// }












// let menu;
// const bolsaResiduo = 1000, bolsaCamiseta = 800, bolsaArranque = 1200;
// let total;
// let precioIva;
// let consumidorFinal;
// let cantidad;

// function mostrar(){
//     menu = parseInt(prompt(" Elegir productos" + "\n1. Bolsa de residuos $" + bolsaResiduo + "\n2. bolsa camisetas $ " + bolsaCamiseta + "\n3. Bolsa de arranque" + bolsaArranque + "\n4. salir"));

//     while (menu != 4) {

//         switch (menu) {
//             case 1:
//                 cantidad = parseInt(prompt("ingrese cantidad"));
//                 total = "l precio total es $ " + cantidad * bolsaResiduo;
//                 break;

//             case 2:
//                 cantidad = parseInt(prompt("ingrese cantidad"));
//                 total = "El precio total es $ " + cantidad * bolsaCamiseta;
//                 break;

//             case 3:
//                 cantidad = parseInt(prompt("ingrese cantidad"));
//                 total = "El precio total es $ " + cantidad * bolsaArranque;
//                 break;

//             default:
//                 alert("ingrese un valor numerico por favor");
//                 break;

//         }

//         precioIva=total;
//          alert(precioIva);

//         menu = parseInt(prompt(" Elegir productos" + "\n1. Bolsa de residuos $" + bolsaResiduo + "\n2. bolsa camisetas $ " + bolsaCamiseta + "\n3. Bolsa de arranque" + bolsaArranque + "\n4. salir"));

//     }
// }

// // para ver el precio con iva

// function conIva() {

//     mostrar();

//     function pedirPrecio() {
//         let precio = parseInt(prompt("por favor ingresar precio"));

//         return precio;
//     }

//     let precio = pedirPrecio();

//     const iva = x => x * 0.21;

//     let precioIva = iva(precio);

//     let consumidorFinal= precio + precioIva;

//     alert(" El precio final con el iva es $ " + consumidorFinal)

// }


// // para ver el precio sin iva
// function sinIva (){

//     mostrar ();

//     function pedirPrecio() {
//         let precio = parseInt(prompt("por favor ingresar precio"));

//         return precio;
//     }

//     let precio = pedirPrecio();

//     const iva = x => x / 1.2;

//     let precioIva = iva(precio);

//     let consumidorFinal= precioIva;

//     alert(" El precio final sin el iva  es $ " + consumidorFinal);
// }

// // Para la page mercaderia
// function nombreProductos() {
//     let productoNombre = prompt("Ingrese nombre del producto");

//     return productoNombre;
// }

// function codigoProductos() {
//     let codigoBarra = parseInt(prompt("Escribe el codigo del producto"));
//     while (isNaN(codigoBarra)) {
//         codigoBarra = parseInt(prompt("Ingrese un valor numérico"));
//     }
//     return codigoBarra;

// }

// function unidadProducto() {
//     let productoUnidad = parseInt(prompt("Escribe cantidad del producto"));

//     while (isNaN(productoUnidad)) {
//         productoUnidad = parseInt(prompt("Ingrese un valor numérico"));
//     }
//     return productoUnidad;

// }

// function vencimientoProducto() {
//     let proximoAvencer = prompt("Escribe el vencimiento 00/00/00");
//     return proximoAvencer;

// }

// // para la compra con y sin iva

// function pedirPrecio(){

//     let pedirPrecio=parseInt(prompt("ingrese el precio del producto"));

//     return pedirPrecio;
// }

// // para cargar los productos
// function cargarProductos() {

//     let menu = parseInt(prompt(" 1. Cargar datos\n 2. salir"));

//     while (menu != 2) {
//         switch (menu) {
//             case 1:
//                 console.log ("Producto " + nombreProductos());
//                 console.log ("Codigo " + codigoProductos());
//                 console.log ("Unidades " + unidadProducto());
//                  console.log ("Vencimiento" + vencimientoProducto());
//                 break;
//         }
//         menu = parseInt(prompt(" 1. Cargar datos\n 2. salir"));

//     }

// }
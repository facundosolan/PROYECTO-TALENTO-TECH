/* obtener nombre y edad de cliente*/

/*

const nombreUsuario = document.getElementById("nombre").value;

const edadUsuario = parseInt(document.getElementById(edad).value);


let edad;

while(edad < 0 || edad > 120 || isNaN(edad)) {

    edad = parseInt(prompt("edad"))

}

*/

const productos = [
{
    nombre: "Pizza Muzzarella",
    precio: 7000,
},
{
    nombre: "Pizza Napolitana",
    precio: 9000,
},
{
    nombre: "Especial de jamon y morrones",
    precio: 11000,
},
{
    nombre: "Fugazzeta",
    precio: 8000,
},
{
    nombre: "Hawaiana",
    precio: 10000,
},
{
    nombre: "Empanada Carne",
    precio: 1500,
},
{
    nombre: "Empanada Carne Picante",
    precio: 1700,
},
{
    nombre: "Empanada Pollo",
    precio: 1500,
},
{
    nombre: "Emapanada Jamon y Queso",
    precio: 1300,
},
{
    nombre: "Empanada Humita",
    precio: 1400,
},
{
    nombre: "Hamburguesa Simple",
    precio: 8000,
},
{
    nombre: "Hamburguesa Doble c/ Cheddar",
    precio: 11000,
},
{
    nombre: "Hamburguesa Triple c/ Cheddar y panceta",
    precio: 13500,
},
{
    nombre: "Hamburguesa Completa",
    precio: 15000,
},
{
    nombre: "Hamburguesa El Diego",
    precio: 18000,
},
]

let comidas = "";

for (let indice = 0 ; indice < productos.length; indice++){ 

     comidas += `
                <div class="item-menu">
                    <div>
                        <p>${productos[indice].nombre}</p>
                        <p>$${productos[indice].precio}</p>
                    </div>
                    <button class="boton-agregar">Agregar al carrito</button>
                </div>
`;

}

const contenedorProductos = document.getElementsByClassName("contenedorProductos");
contenedorProductos.innerHTML = comidas;

const btnAgregar = document.querySelectorAll(".boton-agregar");

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p");

const mensajePagarCarrito = document.getElementById("mensaje")

let totalAPagar = 0;

 for(let indice = 0; indice < btnAgregar.length; indice++){
    
    function agregarElemCarrito(){
        const elementoLi = document.createElement("li");
        
        elementoLi.innerText = `${productos[indice].nombre} $${productos[indice].precio}`;
        
        listaCarrito.appendChild(elementoLi);

        totalAPagar += productos[indice].precio;

        totalCarrito.innerText = "Total a Pagar: $ " + totalAPagar;

        mensajePagarCarrito.innerText = "";
    }
    
    btnAgregar[indice].addEventListener("click", agregarElemCarrito);
 }

const botonBorrar = document.querySelector("#btnBorrar")



function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = "";
}

botonBorrar.addEventListener("click", borrarCarrito);

const botonPagar = document.querySelector("#btnPagar");

function irAPagar(){

    if(listaCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No hay productos en el carrito";
    } else {
    
        window.location.href = "./pagos.html"
    }
}

botonPagar.addEventListener("click", irAPagar);


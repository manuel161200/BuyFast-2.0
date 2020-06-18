"use strict";

window.addEventListener("load", productos, false);

var buyfast = new BuyFast();
var opcion = "";
var categoria="";

function productos() {
    cargarDatos();
    mensaje("");
    document.getElementById("altaVehiculo").addEventListener("click", mostrarAltaVehiculos);
    document.getElementById("altaRopa").addEventListener("click", mostrarAltaRopa);
    document.getElementById("altaElectronica").addEventListener("click", mostrarAltaElectronica);
    document.getElementById("altaOtro").addEventListener("click", mostrarAltaOtro);

    document.getElementById("modificarVehiculos").addEventListener("click", mostrarActualizaVehiculo);
    document.getElementById("modificarRopa").addEventListener("click", mostrarActualizaRopa);
    document.getElementById("modificarElectronica").addEventListener("click", mostrarActualizaElectronica);
    document.getElementById("modificarOtros").addEventListener("click", mostrarActualizaOtro);

    document.getElementById("eliminarVehiculos").addEventListener("click", mostrarEliminaVehiculo);
    document.getElementById("eliminarRopa").addEventListener("click", mostrarEliminaRopa);
    document.getElementById("eliminarElectronica").addEventListener("click", mostrarEliminaElectronica);
    document.getElementById("eliminarOtros").addEventListener("click", mostrarEliminaOtro);

    document.getElementById("tablaVehiculos").addEventListener("click", tablaVehiculos);
    document.getElementById("tablaRopa").addEventListener("click", tablaRopa);
    document.getElementById("tablaElectronica").addEventListener("click", tablaElectronica);
    document.getElementById("tablaOtros").addEventListener("click", tablaOtros);
    document.getElementById("tablaTodos").addEventListener("click", tablaTodos);

    document.getElementById("comprarVehiculos").addEventListener("click", comprarVehiculo);
    document.getElementById("comprarRopa").addEventListener("click", comprarRopa);
    document.getElementById("comprarElectronica").addEventListener("click", comprarElectronica);
    document.getElementById("comprarOtros").addEventListener("click", comprarOtro);

    document.getElementById("btnActualizar").addEventListener("click", actualizar);
    
    document.getElementById("menuBusqueda").addEventListener("click", mostrarBusqueda);

    document.getElementById("btnAceptar").addEventListener("click", enviar);
    
    document.getElementById("tabla").classList.add("oculto");
}

//mensaje
function mensaje(texto) {
    var texto1 = document.getElementById("texto1");
    while (texto1.firstChild) {
        texto1.removeChild(texto1.firstChild);
    }
    texto1.appendChild(document.createTextNode(texto));
}

function ocultaCosas(array) {
    mensaje("");
    for (var i = 0; i < array.length; i++) {
        //Oculta/muestra los elementos
        if(array[i].substring(0, 1) == "F") {
            document.getElementById(array[i].substring(2)).classList.add("oculto");
            document.getElementById(array[i].substring(2)).getElementsByClassName("form")[0].disabled=true;
        }
        if(array[i].substring(0, 1) == "T") {
            document.getElementById(array[i].substring(2)).classList.remove("oculto");
            document.getElementById(array[i].substring(2)).getElementsByClassName("form")[0].disabled=false;
        }
    }
}

function limpiaCombo() {
    for (let i = formularioProductos.comboBox.length; i >= 0; i--) {
        formularioProductos.comboBox.remove(i);
    }
}

function limpiaComboEliminar() {
    for (let i = formularioProductos.comboBox.length; i >= 0; i--) {
        formularioProductos.comboBox1.remove(i);
    }
}


//Ocultar//Desocultar   
function mostrarAltaOtro() {
    opcion = "altaOtros"
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
}

function mostrarAltaVehiculos() {
    opcion = "altaVehiculos";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "T-modelo", "T-color", "T-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
}

function mostrarAltaRopa() {
    opcion = "altaRopa";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "F-modelo", "F-color", "F-kms", "T-marca", "T-talla", "T-sexo", "F-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
}

function mostrarAltaElectronica() {
    opcion = "altaElectronica";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "T-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "T-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
}


function mostrarActualizaVehiculo() {
    opcion = "modificarVehiculo";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "T-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
    actualizaCombos();
}

function mostrarActualizaRopa() {
    opcion = "modificarRopa";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "T-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
    actualizaCombos();
}

function mostrarActualizaElectronica() {
    opcion = "modificarElectronica";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "T-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
    actualizaCombos();
}

function mostrarActualizaOtro() {
    opcion = "modificarOtro";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "T-actualizar", "F-busqueda", "F-radioBusqueda", "F-eliminar"]);
    actualizaCombos();
}

function mostrarEliminaVehiculo() {
    opcion = "eliminarVehiculo";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "T-eliminar"]);
    actualizaCombosEliminar();
}

function mostrarEliminaRopa() {
    opcion = "eliminarRopa";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "T-eliminar"]);
    actualizaCombosEliminar();
}

function mostrarEliminaElectronica() {
    opcion = "eliminarElectronica";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "T-eliminar"]);
    actualizaCombosEliminar();
}

function mostrarEliminaOtro() {
    opcion = "eliminarOtro";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar", "F-busqueda", "F-radioBusqueda", "T-eliminar"]);
    actualizaCombosEliminar();
}

function mostrarBusqueda() {
    opcion = "busqueda";
    document.getElementById("form").classList.remove("oculto");
    document.getElementById("tabla").classList.add("oculto");
    ocultaCosas(["F-nombreProducto", "F-estado", "F-descripcion", "F-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar", "T-busqueda", "T-radioBusqueda", "F-eliminar"]);
}

// Actualiza combos de actualizar
function actualizaCombos() {
    if (opcion == "modificarVehiculo") {
        modificarVehiculo();
    } else if (opcion == "modificarRopa") {
        modificarRopa();
    } else if (opcion == "modificarElectronica") {
        modificarElectronica();
    } else if (opcion == "modificarOtro") {
        modificarOtro();
    }
}

//Actuliza formularios
function actualizar() {
    if (opcion == "modificarVehiculo") {
        enviarActualizaVehiculo();
    } else if (opcion == "modificarRopa") {
        enviarActualizaRopa();
    } else if (opcion == "modificarElectronica") {
        enviarActualizaElectronica();
    } else if (opcion == "modificarOtro") {
        enviarActulizaOtro();
    }
}

//Actualiza combos de eliminar
function actualizaCombosEliminar() {
    if (opcion == "eliminarVehiculo") {
        modEliminarVehiculo();
    } else if (opcion == "eliminarRopa") {
        modEliminarRopa();
    } else if (opcion == "eliminarElectronica") {
        modEliminarElectronica();
    } else if (opcion == "eliminarOtro") {
        modEliminarOtro();
    }
}

//Enviar
function enviar() {
     if (opcion == "altaOtros") {
        validarAltaOtros()
    } else if (opcion == "altaVehiculos") {
        validarAltaVehiculo();
    } else if (opcion == "altaRopa") {
        validarAltaRopa();
    } 
    else if (opcion == "altaElectronica") {
        validarAltaElectronica();
    } else if (opcion == "modificarVehiculo") {
        hacerActualizacionVehiculo();
    } else if (opcion == "modificarRopa") {
        hacerActualizacionRopa();
    } else if (opcion == "modificarElectronica") {
        hacerActualizacionElectronica();
    } else if (opcion == "modificarOtro") {
        hacerActualizacionOtro();
    } else if (opcion == "busqueda") {
        buscar();
    } else if (opcion == "eliminarVehiculo") {
        hacerEliminarVehiculo();
    } else if (opcion == "eliminarRopa") {
        hacerEliminarRopa();
    } else if (opcion == "eliminarElectronica") {
        hacerEliminarElectronica();
    } else if (opcion == "eliminarOtro") {
        hacerEliminarOtro();
    }
}

function enviarOtro() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let otro = new Otro(precio, nombre, estado, descripcion, propietario, comprador);
    mensaje(buyfast.altaOtros(otro));
}

function enviarVehiculos() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let modelo = formularioProductos.modelo.value;
    let color = formularioProductos.color.value;
    let kms = formularioProductos.kms.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let vehiculo = new Vehiculo(precio, nombre, estado, descripcion, propietario, comprador, color, modelo, kms);
    mensaje(buyfast.altaVehiculos(vehiculo));
}

function enviarRopa() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let marca = formularioProductos.marca.value;
    let talla = formularioProductos.talla.value;
    let sexo = formularioProductos.sexo.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let ropa = new Ropa(precio, nombre, estado, propietario, descripcion, comprador, talla, marca, sexo);
    mensaje(buyfast.altaRopas(ropa));
}

function enviarElectronica() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let modelo = formularioProductos.modelo.value;
    let tipo = formularioProductos.tipo.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let electronica = new Electronica(precio, nombre, estado, descripcion, propietario, comprador, modelo, tipo);
    mensaje(buyfast.altaElectronicas(electronica));
}

//Modificaciones
function modificarVehiculo() {
    limpiaCombo();
    let vehiculos = buyfast.getVehiculos();
    let select = document.getElementById("comboBox");
    vehiculos.forEach((vehiculo) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(vehiculo.nombre+" - "+vehiculo.modelo));
        option.value = vehiculo.nombre;
        select.appendChild(option);
    });
}

function modificarRopa() {
    limpiaCombo();
    let ropas = buyfast.getRopas();
    let select = document.getElementById("comboBox");
    ropas.forEach((ropa) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(ropa.nombre+" - "+ropa.marca));
        option.value = ropa.nombre;
        select.appendChild(option);
    });
}

function modificarElectronica() {
    limpiaCombo();
    let electronicas = buyfast.getElectronicas();
    let select = document.getElementById("comboBox");
    electronicas.forEach((electronica) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(electronica.nombre+" - "+electronica.modelo));
        option.value = electronica.nombre;
        select.appendChild(option);
    });
}

function modificarOtro() {
    limpiaCombo();
    let otros = buyfast.getOtros();
    let select = document.getElementById("comboBox");
    otros.forEach((otro) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(otro.nombre));
        option.value = otro.nombre;
        select.appendChild(option);
    }); 
}


function enviarActualizaVehiculo() {
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "T-modelo", "T-color", "T-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "T-actualizar"]);
    let vehiculo = buyfast.buscarNombreVehiculo(document.getElementById("comboBox").value);
    document.getElementById("nombreProducto1").disabled=true;
    formularioProductos.nombreProducto.value = document.getElementById("comboBox").value;
    formularioProductos.estado.value = vehiculo.estado;
    formularioProductos.descripcion.value = vehiculo.descripcion;
    formularioProductos.precio.value = vehiculo.precio;
    formularioProductos.modelo.value = vehiculo.modelo;
    formularioProductos.color.value = vehiculo.color;
    formularioProductos.kms.value = vehiculo.kms; 
}

function enviarActualizaRopa() {
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "F-modelo", "F-color", "F-kms", "T-marca", "T-talla", "T-sexo", "F-tipo", "T-actualizar"]);
    let ropa = buyfast.buscarNombreRopa(document.getElementById("comboBox").value);
    document.getElementById("nombreProducto1").disabled=true;
    formularioProductos.nombreProducto.value = document.getElementById("comboBox").value;
    formularioProductos.estado.value = ropa.estado;
    formularioProductos.descripcion.value = ropa.descripcion;
    formularioProductos.precio.value = ropa.precio;
    formularioProductos.marca.value = ropa.marca;
    formularioProductos.talla.value = ropa.talla;
    formularioProductos.sexo.value = ropa.sexo;
}

function enviarActualizaElectronica() {
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "T-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "T-tipo", "F-actualizar"]);
    let electronica = buyfast.buscarNombreElectronica(document.getElementById("comboBox").value);
    document.getElementById("nombreProducto1").disabled=true;
    formularioProductos.nombreProducto.value = document.getElementById("comboBox").value;
    formularioProductos.estado.value = electronica.estado;
    formularioProductos.descripcion.value = electronica.descripcion;
    formularioProductos.precio.value = electronica.precio;
    formularioProductos.modelo.value = electronica.modelo;
    formularioProductos.tipo.value = electronica.tipo;
}

function enviarActulizaOtro() {
    ocultaCosas(["T-nombreProducto", "T-estado", "T-descripcion", "T-precio", "F-modelo", "F-color", "F-kms", "F-marca", "F-talla", "F-sexo", "F-tipo", "F-actualizar"]);
    let otro = buyfast.buscarNombreOtro(document.getElementById("comboBox").value);
    document.getElementById("nombreProducto1").disabled=true;
    formularioProductos.nombreProducto.value = document.getElementById("comboBox").value;
    formularioProductos.estado.value = otro.estado;
    formularioProductos.descripcion.value = otro.descripcion;
    formularioProductos.precio.value = otro.precio;
}

function hacerActualizacionVehiculo() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let modelo = formularioProductos.modelo.value;
    let color = formularioProductos.color.value;
    let kms = formularioProductos.kms.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let vehiculo = new Vehiculo(precio, nombre, estado, descripcion, propietario, comprador, color, modelo, kms);
    mensaje(buyfast.actualizaVehiculo(vehiculo));

}

function hacerActualizacionRopa() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let marca = formularioProductos.marca.value;
    let talla = formularioProductos.talla.value;
    let sexo = formularioProductos.sexo.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let ropa = new Ropa(precio, nombre, estado, propietario, descripcion, comprador, talla, marca, sexo);
    mensaje(buyfast.actualizaRopa(ropa));
}

function hacerActualizacionElectronica() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let modelo = formularioProductos.modelo.value;
    let tipo = formularioProductos.tipo.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let electronica = new Electronica(precio, nombre, estado, descripcion, propietario, comprador, modelo, tipo);
    mensaje(buyfast.actualizaElectronica(electronica));
}

function hacerActualizacionOtro() {
    let nombre = formularioProductos.nombreProducto.value;
    let estado = formularioProductos.estado.value;
    let descripcion = formularioProductos.descripcion.value;
    let precio = formularioProductos.precio.value;
    let propietario = localStorage.getItem("nomUsuario");
    let comprador = "";

    let otro = new Otro(precio, nombre, estado, descripcion, propietario, comprador);
    mensaje(buyfast.actualizaOtro(otro));
}

//Eliminar

function modEliminarVehiculo() {
    limpiaComboEliminar();
    let vehiculos = buyfast.getVehiculos();
    let select = document.getElementById("comboBox1");
    vehiculos.forEach((vehiculo) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(vehiculo.nombre+" - "+ vehiculo.modelo));
        option.value = vehiculo.nombre;
        select.appendChild(option);
    });
}

function modEliminarRopa() {
    limpiaComboEliminar();
    let ropas = buyfast.getRopas();
    let select = document.getElementById("comboBox1");
    ropas.forEach((ropa) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(ropa.nombre+" - "+ropa.marca));
        option.value = ropa.nombre;
        select.appendChild(option);
    });
}

function modEliminarElectronica() {
    limpiaComboEliminar();
    let electronicas = buyfast.getElectronicas();
    let select = document.getElementById("comboBox1");
    electronicas.forEach((electronica) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(electronica.nombre+" - "+electronica.modelo));
        option.value = electronica.nombre;
        select.appendChild(option);
    });
}

function modEliminarOtro() {
    limpiaComboEliminar();
    let otros = buyfast.getOtros();
    let select = document.getElementById("comboBox1");
    otros.forEach((otro) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(otro.nombre));
        option.value = otro.nombre;
        select.appendChild(option);
    }); 
}

function hacerEliminarVehiculo() {
    let nombreVehiculo = document.getElementById("comboBox1").value;
    mensaje(buyfast.eliminarVehiculo(nombreVehiculo));
}

function hacerEliminarRopa() {
    let nombreRopa = document.getElementById("comboBox1").value;
    mensaje(buyfast.eliminarRopa(nombreRopa));
}

function hacerEliminarElectronica() {
    let nombreElectronica = document.getElementById("comboBox1").value;
    mensaje(buyfast.eliminarElectronica(nombreElectronica));
}

function hacerEliminarOtro() {
    let nombreOtro = document.getElementById("comboBox1").value;
    mensaje(buyfast.eliminarOtro(nombreOtro));
}


//Listados
function tablaVehiculos() {
    let tabla = document.getElementById("tabla");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(buyfast.listadoVehiculos(["Nombre", "Estado", "Descripcion", "Modelo", "Color", "Kilometros", "Precio", "Vendido"]));
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
}

function tablaRopa() {
    let tabla = document.getElementById("tabla");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(buyfast.listadoRopas(["Nombre", "Estado", "Descripcion", "Marca", "Talla", "Sexo", "Precio", "Vendido"]));
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
}

function tablaElectronica() {
    let tabla = document.getElementById("tabla");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(buyfast.listadoElectronicas(["Nombre", "Estado", "Descripcion", "Modelo", "Tipo", "Precio", "Vendido"]));
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
}

function tablaOtros() {
    let tabla = document.getElementById("tabla");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(buyfast.listadoOtros(["Nombre", "Estado", "Descripcion", "Precio", "Vendido"]));
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
}

function tablaTodos() {
    let tabla = document.getElementById("tabla");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(buyfast.listadoTodos(["Nombre", "Estado", "Descripcion", "Precio", "Vendido", "Tipo"]));
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
}

function buscar() {
    let nombre = formularioProductos.busqueda1.value;
    mensaje("");
    if (document.getElementById("radioVehiculo").checked) {
        if (buyfast.buscarNombreVehiculo(nombre)) {
            document.getElementById("form").classList.add("oculto");
            document.getElementById("tabla").classList.remove("oculto");
            let tabla = document.getElementById("tabla");
            while (tabla.firstChild) {
                tabla.removeChild(tabla.firstChild);
            }
            document.getElementById("tabla").append(buyfast.buscarVehiculoExistente(["Nombre", "Estado", "Descripcion", "Modelo", "Color", "Kilometros", "Precio", "Vendido"], nombre));
        } else {
            mensaje("No se ha encontrado ningun vehiculo con ese nombre");
        }
    } else if (document.getElementById("radioRopa").checked) {
        if (buyfast.buscarNombreRopa(nombre)) {
            document.getElementById("form").classList.add("oculto");
            document.getElementById("tabla").classList.remove("oculto");
            while (tabla.firstChild) {
                tabla.removeChild(tabla.firstChild);
            }
            document.getElementById("tabla").append(buscarRopaExistente(["Nombre", "Estado", "Descripcion", "Marca", "Talla", "Sexo", "Precio", "Vendido"], nombre));
        } else {
            mensaje("No se ha enconttrado ninguna prenda con ese nombre");
        }
    } else if (document.getElementById("radioElectronica").checked) {
        if (buyfast.buscarNombreElectronica(nombre)) {
            document.getElementById("form").classList.add("oculto");
            document.getElementById("tabla").classList.remove("oculto");
            while (tabla.firstChild) {
                tabla.removeChild(tabla.firstChild);
            }
            document.getElementById("tabla").append(buyfast.buscarElectronicaExistente(["Nombre", "Estado", "Descripcion", "Modelo", "Tipo", "Precio", "Vendido"], nombre));
        } else {
            mensaje("No se ha encontrado ningún producto electronico con ese nombre");
        }
    } else if (document.getElementById("radioOtro").checked) {
        if (buyfast.buscarNombreOtro(nombre)) {
            document.getElementById("form").classList.add("oculto");
            document.getElementById("tabla").classList.remove("oculto");
            while (tabla.firstChild) {
                tabla.removeChild(tabla.firstChild);
            }
            document.getElementById("tabla").append(buyfast.buscarOtroExistente(["Nombre", "Estado", "Descripcion", "Precio", "Vendido"], nombre));
        } else {
            mensaje("No se ha podido encontrar ningún otro producto con ese nombre");
        }
    }
}

//Compras

function comprarVehiculo() {
    let vehiculos = buyfast.getVehiculosDisponibles();
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(crearTablaCompraVehiculos(["Nombre", "Estado", "Descripcion", "Modelo", "Color", "Kilometros", "Precio", "Comprar"], vehiculos));
}

function crearTablaCompraVehiculos(headers, vehiculos) {
    let tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-bordered");
    tabla.classList.add("table-hover");
    tabla.classList.add("mt-5");
    tabla.classList.add("w-75");
    tabla.classList.add("mx-auto");
    let header = tabla.createTHead();
    let encabezados = header.insertRow(-1);
    headers.forEach(encabezado => {
        let celda = encabezados.insertCell(-1);
        celda.textContent = encabezado;
        celda.setAttribute("style", "font-weight: bold");
        encabezados.append(celda);
    });
    let btnComprar = document.createElement("input");
    btnComprar.setAttribute("type", "button");
    btnComprar.setAttribute("id", "btnComprar");
    btnComprar.setAttribute("value", "Comprar");
    btnComprar.classList.add("btn");
    let cuerpo = document.createElement("tbody");
    btnComprar.classList.add("btn-info");
    let btnComprarClonado = null;
    let contador = 0;
    vehiculos.forEach((vehiculo) => {
        let fila = cuerpo.insertRow(-1);
        let celda = fila.insertCell(-1);
        celda.append(vehiculo.nombre);
        celda = fila.insertCell(-1);
        celda.append(vehiculo.estado);
        celda = fila.insertCell(-1);
        celda.append(vehiculo.descripcion);
        celda = fila.insertCell(-1);
        celda.append(vehiculo.modelo);
        celda = fila.insertCell(-1);
        celda.append(vehiculo.color);
        celda = fila.insertCell(-1);
        celda.append(vehiculo.kms);
        celda = fila.insertCell(-1);
        celda.append(vehiculo.precio);
        celda = fila.insertCell(-1);
        btnComprarClonado = btnComprar.cloneNode(true);
        btnComprarClonado.id = btnComprarClonado.id+contador;
        contador++;
        btnComprarClonado.dataset.nombre = vehiculo.nombre;
        celda.append(btnComprarClonado);
        btnComprarClonado.addEventListener("click", hacerCompraVehiculo);
        celda = fila.insertCell(-1);
        celda.append(vehiculo.comprador);
    });
    tabla.append(cuerpo);
    let linea = tabla.insertRow(-1);
    let celda = linea.insertCell(-1);
    celda.setAttribute("colspan", "8");
    return tabla;
}

function hacerCompraVehiculo(oEvento) {
    let oE = oEvento || window.event;
    let nombreBuscar = oE.currentTarget.dataset.nombre;
    let vehiculoAntiguo = buyfast.buscarNombreVehiculoDisponible(nombreBuscar);

    let nombre = vehiculoAntiguo.nombre;
    let estado = vehiculoAntiguo.estado;
    let descripcion = vehiculoAntiguo.descripcion;
    let precio = vehiculoAntiguo.precio;
    let modelo = vehiculoAntiguo.modelo;
    let color = vehiculoAntiguo.color;
    let kms = vehiculoAntiguo.kms;
    let propietario = vehiculoAntiguo.propietario;
    let comprador = localStorage.getItem("nomUsuario");

    let vehiculo = new Vehiculo(precio, nombre, estado, descripcion, propietario, comprador, color, modelo, kms);
    mensaje(buyfast.compraVehiculo(vehiculo));
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
}

function comprarElectronica() {
    let electronicas = buyfast.getElectronicasDisponibles();
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(crearTablaCompraElectronicas(["Nombre", "Estado", "Descripcion", "Modelo", "Tipo", "Precio", "Comprar"], electronicas));
}

function crearTablaCompraElectronicas(headers, electronicas) {
    let tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-bordered");
    tabla.classList.add("table-hover");
    tabla.classList.add("mt-5");
    tabla.classList.add("w-75");
    tabla.classList.add("mx-auto");
    let header = tabla.createTHead();
    let encabezados = header.insertRow(-1);
    headers.forEach(encabezado => {
        let celda = encabezados.insertCell(-1);
        celda.textContent = encabezado;
        celda.setAttribute("style", "font-weight: bold");
        encabezados.append(celda);
    });
    let btnComprar = document.createElement("input");
    btnComprar.setAttribute("type", "button");
    btnComprar.setAttribute("id", "btnComprar");
    btnComprar.setAttribute("value", "Comprar");
    btnComprar.classList.add("btn");
    let cuerpo = document.createElement("tbody");
    btnComprar.classList.add("btn-info");
    let btnComprarClonado = null;
    let contador = 0;
    electronicas.forEach((electronica) => {
        let fila = cuerpo.insertRow(-1);
        let celda = fila.insertCell(-1);
        celda.append(electronica.nombre);
        celda = fila.insertCell(-1);
        celda.append(electronica.estado);
        celda = fila.insertCell(-1);
        celda.append(electronica.descripcion);
        celda = fila.insertCell(-1);
        celda.append(electronica.modelo);
        celda = fila.insertCell(-1);
        celda.append(electronica.tipo);
        celda = fila.insertCell(-1);
        celda.append(electronica.precio);
        celda = fila.insertCell(-1);
        btnComprarClonado = btnComprar.cloneNode(true);
        btnComprarClonado.id = btnComprarClonado.id+contador;
        contador++;
        btnComprarClonado.dataset.nombre = electronica.nombre;
        celda.append(btnComprarClonado);
        btnComprarClonado.addEventListener("click", hacerCompraElectronica);
    });
    tabla.append(cuerpo);
    let linea = tabla.insertRow(-1);
    let celda = linea.insertCell(-1);
    celda.setAttribute("colspan", "7");
    return tabla;
}

function hacerCompraElectronica(oEvento) {
    let oE = oEvento || window.event;
    let nombreBuscar = oE.currentTarget.dataset.nombre;
    let electronicaAntigua = buyfast.buscarNombreElectronicaDisponible(nombreBuscar);

    let nombre = electronicaAntigua.nombre;
    let estado = electronicaAntigua.estado;
    let descripcion = electronicaAntigua.descripcion;
    let precio = electronicaAntigua.precio;
    let modelo = electronicaAntigua.modelo;
    let tipo = electronicaAntigua.tipo;
    let propietario = electronicaAntigua.propietario;
    let comprador = localStorage.getItem("nomUsuario");

    let electronica = new Electronica(precio, nombre, estado, descripcion, propietario, comprador, modelo, tipo);
    mensaje(buyfast.compraElectronica(electronica));
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
}

function comprarOtro() {
    let otros = buyfast.getOtrosDisponibles();
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(crearTablaCompraOtros(["Nombre", "Estado", "Descripcion", "Precio", "Comprar"], otros));
}

function crearTablaCompraOtros(headers, otros) {
    let tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-bordered");
    tabla.classList.add("table-hover");
    tabla.classList.add("mt-5");
    tabla.classList.add("w-75");
    tabla.classList.add("mx-auto");
    let header = tabla.createTHead();
    let encabezados = header.insertRow(-1);
    headers.forEach(encabezado => {
        let celda = encabezados.insertCell(-1);
        celda.textContent = encabezado;
        celda.setAttribute("style", "font-weight: bold");
        encabezados.append(celda);
    });
    let btnComprar = document.createElement("input");
    btnComprar.setAttribute("type", "button");
    btnComprar.setAttribute("id", "btnComprar");
    btnComprar.setAttribute("value", "Comprar");
    btnComprar.classList.add("btn");
    let cuerpo = document.createElement("tbody");
    btnComprar.classList.add("btn-info");
    let btnComprarClonado = null;
    let contador = 0;
    otros.forEach((otro) => {
        let fila = cuerpo.insertRow(-1);
        let celda = fila.insertCell(-1);
        celda.append(otro.nombre);
        celda = fila.insertCell(-1);
        celda.append(otro.estado);
        celda = fila.insertCell(-1);
        celda.append(otro.descripcion);
        celda = fila.insertCell(-1);
        celda.append(otro.precio);
        celda = fila.insertCell(-1);
        btnComprarClonado = btnComprar.cloneNode(true);
        btnComprarClonado.id = btnComprarClonado.id+contador;
        contador++;
        btnComprarClonado.dataset.nombre = otro.nombre;
        celda.append(btnComprarClonado);
        btnComprarClonado.addEventListener("click", hacerCompraOtro);
    });
    tabla.append(cuerpo);
    let linea = tabla.insertRow(-1);
    let celda = linea.insertCell(-1);
    celda.setAttribute("colspan", "7");
    return tabla;
}

function hacerCompraOtro(oEvento) {
    let oE = oEvento || window.event;
    let nombreBuscar =oE.currentTarget.dataset.nombre;
    let otroAntiguo = buyfast.buscarNombreOtroDisponible(nombreBuscar);

    let nombre = otroAntiguo.nombre;
    let estado = otroAntiguo.estado;
    let descripcion = otroAntiguo.descripcion;
    let precio = otroAntiguo.precio;
    let propietario = otroAntiguo.propietario;
    let comprador = localStorage.getItem("nomUsuario");

    let otro = new Otro(precio, nombre, estado, descripcion, propietario, comprador);
    mensaje(buyfast.compraOtro(otro));
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
}

function comprarRopa() {
    let ropas = buyfast.getRopasDisponibles();
    document.getElementById("form").classList.add("oculto");
    document.getElementById("tabla").classList.remove("oculto");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    document.getElementById("tabla").append(crearTablaCompraRopa(["Nombre", "Estado", "Descripcion", "Marca", "Talla", "Sexo", "Precio"], ropas));
}

function crearTablaCompraRopa(headers, ropas) {
    let tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-bordered");
    tabla.classList.add("table-hover");
    tabla.classList.add("mt-5");
    tabla.classList.add("w-75");
    tabla.classList.add("mx-auto");
    let header = tabla.createTHead();
    let encabezados = header.insertRow(-1);
    headers.forEach(encabezado => {
        let celda = encabezados.insertCell(-1);
        celda.textContent = encabezado;
        celda.setAttribute("style", "font-weight: bold");
        encabezados.append(celda);
    });
    let btnComprar = document.createElement("input");
    btnComprar.setAttribute("type", "button");
    btnComprar.setAttribute("id", "btnComprar");
    btnComprar.setAttribute("value", "Comprar");
    btnComprar.classList.add("btn");
    let cuerpo = document.createElement("tbody");
    btnComprar.classList.add("btn-info");
    let btnComprarClonado = null;
    let contador = 0;
    ropas.forEach((ropa) => {
        let fila = cuerpo.insertRow(-1);
        let celda = fila.insertCell(-1);
        celda.append(ropa.nombre);
        celda = fila.insertCell(-1);
        celda.append(ropa.estado);
        celda = fila.insertCell(-1);
        celda.append(ropa.descripcion);
        celda = fila.insertCell(-1);
        celda.append(ropa.marca);
        celda = fila.insertCell(-1);
        celda.append(ropa.talla);
        celda = fila.insertCell(-1);
        celda.append(ropa.sexo);
        celda = fila.insertCell(-1);
        btnComprarClonado = btnComprar.cloneNode(true);
        btnComprarClonado.id = btnComprarClonado.id+contador;
        contador++;
        btnComprarClonado.dataset.nombre = ropa.nombre;
        celda.append(btnComprarClonado);
        btnComprarClonado.addEventListener("click", hacerCompraRopa);
    });
    tabla.append(cuerpo);
    let linea = tabla.insertRow(-1);
    let celda = linea.insertCell(-1);
    celda.setAttribute("colspan", "7");
    return tabla;
}

function hacerCompraRopa(oEvento) {
    let oE = oEvento || window.event;
    let nombreBuscar = oE.currentTarget.dataset.nombre;
    let ropaAntigua = buyfast.buscarNombreRopaDisponible(nombreBuscar);

    let nombre = ropaAntigua.nombre;
    let estado = ropaAntigua.estado;
    let descripcion = ropaAntigua.descripcion;
    let precio = ropaAntigua.precio;
    let marca = ropaAntigua.marca;
    let talla = ropaAntigua.talla;
    let sexo = ropaAntigua.sexo;
    let propietario = ropaAntigua.propietario;
    let comprador = localStorage.getItem("nomUsuario");

    let ropa = new Ropa(precio, nombre, estado, propietario, descripcion, comprador, talla, marca, sexo);
    mensaje(buyfast.compraRopa(ropa));
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
}

//Validaciones
function validarAltaVehiculo() {
    var oE = window.event;
    var bValido = true;
    var sError = "";

    //Validar nombre producto
    let nombre = formularioProductos.nombreProducto.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{3,15}$/;

    if (oExpReg.test(nombre) == false) {
        bValido = false;
        formularioProductos.nombreProducto.focus();
        sError = "El nombre de producto debe estar comprendido entre 3 y 15 caracteres";
    }

    //Validar descripcion
    let descripcion = formularioProductos.descripcion.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{5,200}$/;
    if (oExpReg.test(descripcion) == false) {
        if (bValido == true) {
            formularioProductos.descripcion.focus();
            bValido = false;
        }
        sError += "\n La descripcion debe estar comprendida entre 5 y 200 carcateres";
    }

    //Validar precio
    let precio = formularioProductos.precio.value.trim();
    oExpReg = /^[1-9]\d*(\.\d+)?$/;
    if (oExpReg.test(precio) == false) {
        if (bValido == true) {
            formularioProductos.precio.focus();
            bValido = false;
        }
        sError += "\n El precio deber ser números y el decimal separado con un punto";
    }

    //Validar modelo
    let modelo = formularioProductos.modelo.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{3,15}$/;
    if (oExpReg.test(modelo) == false) {
        if (bValido == true) {
            formularioProductos.modelo.focus();
            bValido = false;
        }
        sError += "\n El modelo debe ser entre 3 y 15 caracteres";
    }
    
    //Validar color 
    let color = formularioProductos.color.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{3,10}$/;
    if (oExpReg.test(color) == false) {
        if (bValido == true) {
            formularioProductos.color.focus();
            bValido = false;
        }
        sError += "\n El color debe estar comprendido entre 3 y 10 caracteres";
    }

    //Validar kms
    let kms = formularioProductos.kms.value.trim();
    oExpReg = /^([0-9])*$/;
    if (oExpReg.test(kms) == false) {
        if (bValido == true) {
            formularioProductos.kms.focus();
            bValido = false;
        }
        sError += "\n Los kilometros deben ser números";
    }

    //Mostrar errores
    if (bValido == false) {
        alert(sError);
        oE.preventDefault();
    } else {
        enviarVehiculos();
    }
}

function validarAltaRopa() {
    var oE = window.event;
    var bValido = true;
    var sError = "";

    //Validar nombre producto
    let nombre = formularioProductos.nombreProducto.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{3,15}$/;

    if (oExpReg.test(nombre) == false) {
        bValido = false;
        formularioProductos.nombreProducto.focus();
        sError = "El nombre de producto debe estar comprendido entre 3 y 15 caracteres";
    }

    //Validar descripcion
    let descripcion = formularioProductos.descripcion.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{5,200}$/;
    if (oExpReg.test(descripcion) == false) {
        if (bValido == true) {
            formularioProductos.descripcion.focus();
            bValido = false;
        }
        sError += "\n La descripcion debe estar comprendida entre 5 y 200 carcateres";
    }

    //Validar precio
    let precio = formularioProductos.precio.value.trim();
    oExpReg = /^[1-9]\d*(\.\d+)?$/;
    if (oExpReg.test(precio) == false) {
        if (bValido == true) {
            formularioProductos.precio.focus();
            bValido = false;
        }
        sError += "\n El precio deber ser números y el decimal separado con un punto";
    }

    //Validar marca
    let marca = formularioProductos.marca.value.trim();
    oExpReg =  /^[a-zA-Z0-9\s]{3,15}$/;
    if (oExpReg.test(marca) == false) {
        if (bValido == true) {
            formularioProductos.precio.focus();
            bValido = false;
        }
        sError += "\n La marca debe estar comprendida entre tres y 15 caracteres";
    }

    //Validar talla
    let talla = formularioProductos.talla.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{1,5}$/;
    if (oExpReg.test(talla) == false) {
        if (bValido == true) {
            formularioProductos.talla.focus();
            bValido = false;
        }
        sError += "\n La talla debe estar comprendida entre 1 y 5 caracteres";
    }

    //Mostrar errores
    if (bValido == false) {
        alert(sError);
        oE.preventDefault();
    } else {
        enviarRopa();
    }
}

function validarAltaElectronica() {
    var oE = window.event;
    var bValido = true;
    var sError = "";

    //Validar nombre producto
    let nombre = formularioProductos.nombreProducto.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{3,15}$/;

    if (oExpReg.test(nombre) == false) {
        bValido = false;
        formularioProductos.nombreProducto.focus();
        sError = "El nombre de producto debe estar comprendido entre 3 y 15 caracteres";
    }

    //Validar descripcion
    let descripcion = formularioProductos.descripcion.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{5,200}$/;
    if (oExpReg.test(descripcion) == false) {
        if (bValido == true) {
            formularioProductos.descripcion.focus();
            bValido = false;
        }
        sError += "\n La descripcion debe estar comprendida entre 5 y 200 carcateres";
    }

    //Validar precio
    let precio = formularioProductos.precio.value.trim();
    oExpReg = /^[1-9]\d*(\.\d+)?$/;
    if (oExpReg.test(precio) == false) {
        if (bValido == true) {
            formularioProductos.precio.focus();
            bValido = false;
        }
        sError += "\n El precio deber ser números y el decimal separado con un punto";
    }

    //Validar modelo
    let modelo = formularioProductos.modelo.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{3,15}$/;
    if (oExpReg.test(modelo) == false) {
        if (bValido == true) {
            formularioProductos.modelo.focus();
            bValido = false;
        }
        sError += "\n El modelo debe ser entre 3 y 15 caracteres";
    }

    //Validar tipo
    let tipo = formularioProductos.tipo.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{3,15}$/;
    if (oExpReg.test(tipo) == false) {
        if (bValido == true) {
            formularioProductos.tipo.focus();
            bValido = false;
        }
        sError += "\n El tipo debe estar comprendido entre 3 y 15 caracteres";
    }

    //Mostrar errores
    if (bValido == false) {
        alert(sError);
        oE.preventDefault();
    } else {
        enviarElectronica();
    }
}

function validarAltaOtros() {
    var oE = window.event;
    var bValido = true;
    var sError = "";

    //Validar nombre producto
    let nombre = formularioProductos.nombreProducto.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{3,15}$/;

    if (oExpReg.test(nombre) == false) {
        bValido = false;
        formularioProductos.nombreProducto.focus();
        sError = "El nombre de producto debe estar comprendido entre 3 y 15 caracteres";
    }

    //Validar descripcion
    let descripcion = formularioProductos.descripcion.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{5,200}$/;
    if (oExpReg.test(descripcion) == false) {
        if (bValido == true) {
            formularioProductos.descripcion.focus();
            bValido = false;
        }
        sError += "\n La descripcion debe estar comprendida entre 5 y 200 carcateres";
    }

    //Validar precio
    let precio = formularioProductos.precio.value.trim();
    oExpReg = /^[1-9]\d*(\.\d+)?$/;
    if (oExpReg.test(precio) == false) {
        if (bValido == true) {
            formularioProductos.precio.focus();
            bValido = false;
        }
        sError += "\n El precio deber ser números y el decimal separado con un punto";
    }

    if (bValido == false) {
        alert(sError);
        oE.preventDefault();
    } else {
        enviarOtro();
    }
}

// Cargar XML
function cargarDatos() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            cargarXML(this);
    };
    xhr.open("GET", "BBDD_Productos.xml", true);
    xhr.send();
}

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var vehiculos = docXML.getElementsByTagName("vehiculo");
    for (var i = 0; i < vehiculos.length; i++) {
        let nombre = vehiculos[i].getElementsByTagName("nombre")[0].textContent;
        let estado = vehiculos[i].getElementsByTagName("estado")[0].textContent;
        let descripcion = vehiculos[i].getElementsByTagName("descripcion")[0].textContent;
        let precio = vehiculos[i].getElementsByTagName("precio")[0].textContent;
        let modelo = vehiculos[i].getElementsByTagName("modelo")[0].textContent;
        let color = vehiculos[i].getElementsByTagName("color")[0].textContent;
        let kms = vehiculos[i].getElementsByTagName("kms")[0].textContent;
        let propietario = vehiculos[i].getElementsByTagName("propietario")[0].textContent;
        let comprador = "";
        let vehiculo = new Vehiculo(precio, nombre, estado, descripcion, propietario, comprador, color, modelo, kms);
        buyfast.altaVehiculos(vehiculo);
    }

    var ropas = docXML.getElementsByTagName("ropa");
    for (var i = 0; i < ropas.length; i++) {
        let nombre = ropas[i].getElementsByTagName("nombre")[0].textContent;
        let estado = ropas[i].getElementsByTagName("estado")[0].textContent;
        let descripcion = ropas[i].getElementsByTagName("descripcion")[0].textContent;
        let precio = ropas[i].getElementsByTagName("precio")[0].textContent;
        let marca = ropas[i].getElementsByTagName("marca")[0].textContent;
        let talla = ropas[i].getElementsByTagName("talla")[0].textContent;
        let sexo = ropas[i].getElementsByTagName("sexo")[0].textContent;
        let propietario = ropas[i].getElementsByTagName("propietario")[0].textContent;
        let comprador = "";

        let ropa = new Ropa(precio, nombre, estado, propietario, descripcion, comprador, talla, marca, sexo);
        buyfast.altaRopas(ropa);
    }

    var electronicas = docXML.getElementsByTagName("electronica");
    for (var i = 0; i < electronicas.length; i++) {
        let nombre = electronicas[i].getElementsByTagName("nombre")[0].textContent;
        let estado = electronicas[i].getElementsByTagName("estado")[0].textContent;
        let descripcion = electronicas[i].getElementsByTagName("descripcion")[0].textContent;
        let precio = electronicas[i].getElementsByTagName("precio")[0].textContent;
        let modelo = electronicas[i].getElementsByTagName("modelo")[0].textContent;
        let tipo = electronicas[i].getElementsByTagName("tipo")[0].textContent;
        let propietario = electronicas[i].getElementsByTagName("propietario")[0].textContent;
        let comprador = "";
        
        let electronica = new Electronica(precio, nombre, estado, descripcion, propietario, comprador, modelo, tipo);
        buyfast.altaElectronicas(electronica);
    }

    var otros = docXML.getElementsByTagName("otro");
    for (var i = 0; i < otros.length; i++) {
        let nombre = otros[i].getElementsByTagName("nombre")[0].textContent;
        let estado = otros[i].getElementsByTagName("estado")[0].textContent;
        let descripcion = otros[i].getElementsByTagName("descripcion")[0].textContent;
        let precio = otros[i].getElementsByTagName("precio")[0].textContent;
        let propietario = otros[i].getElementsByTagName("propietario")[0].textContent;
        let comprador = "";

        let otro = new Otro(precio, nombre, estado, descripcion, propietario, comprador);
        buyfast.altaOtros(otro);
    }
}

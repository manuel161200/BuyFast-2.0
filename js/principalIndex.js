"use strict";

window.addEventListener("load", inicio, false);

var buyfast = new BuyFast();
var opcion = "";

//Funcion de inicio para el index
function inicio() {
    cargarDatos();
    mostrarLogin();
    
    document.getElementById("login").addEventListener("click", mostrarLogin);
    document.getElementById("registro").addEventListener("click", mostrarRegistro);

    mensaje("");
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

//Ocultar//Desocultar
function mostrarLogin() {
    opcion = "login";
    ocultaCosas(["T-nomUsuario", "T-contraseña", "F-dni", "F-nombre", "F-apellidos", "F-gmail", "F-direccion"]);
}

function mostrarRegistro() {
    opcion = "registro";
    ocultaCosas(["T-nomUsuario", "T-contraseña", "T-dni", "T-nombre", "T-apellidos", "T-gmail", "T-direccion"]);
}

//Enviar
function enviar() {
    if (opcion == "login") {
        enviarLogin();
    } else if (opcion == "registro") {
        validarRegistro();
    }
}

function enviarRegistro() {
    let dni = formulario.dni.value;
    let nombre = formulario.nombre.value;
    let apellidos = formulario.apellidos.value;
    let gmail = formulario.gmail.value;
    let direccion = formulario.direccion.value;
    let nomUsuario = formulario.nomUsuario.value;
    let contraseña = formulario.contraseña.value;

    let usuario = new Usuario(dni, nombre, apellidos, gmail, direccion, nomUsuario, contraseña);
    mensaje(buyfast.altaUsuario(usuario));
}

function enviarLogin() {
    let nomUsuario = formulario.nomUsuario.value;
    let contraseña = formulario.contraseña.value;
    localStorage.setItem("nomUsuario", nomUsuario);
    mensaje(buyfast.verificaUsuarios(nomUsuario, contraseña));
}

//Validaciones

function validarRegistro() {
    //Validar registro
    var oE = window.event;
    var bValido = true;
    var sError = "";


    //Validar Dni
    let dni = formulario.dni.value.trim();
    var oExpReg = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    if (oExpReg.test(dni) == false) {
        bValido = false;
        formulario.dni.focus();
        sError = "El DNi debe estar compues por 8 dígitos y una letra";
    }

    //Validar nombre
    let nombre = formulario.nombre.value.trim();
    oExpReg = /[/sa-zA-Z]{3,20}/;


    if (oExpReg.test(nombre) == false) {
        if (bValido == true) {
            formulario.nombre.focus();
            bValido = false;
        }   
        sError += "\n El nombre debe ser alfabetico entre 3 y 20 caracteres";
    }

    //Validar apellido
    let apellido = formulario.apellidos.value.trim();
    oExpReg = /[/sa-zA-Z]{5,40}/;

    if (oExpReg.test(apellido) == false) {
        if (bValido == true) {
            formulario.apellidos.focus();
            bValido = false;
        }
        sError += "\n El apellido deber ser alfabetico entre 5 y 40 caracteres";
    }

    //Validar gmail
    let gmail = formulario.gmail.value.trim();
    oExpReg = /^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;

    if (oExpReg.test(gmail) == false) {
        if (bValido == true) {
            formulario.gmail.focus();
            bValido = false;
        }
        sError += "\n El email es incorrecto";
    }

    //Validar direccion
    let direccion = formulario.direccion.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{5,60}$/;

    if (oExpReg.test(direccion) == false) {
        if (bValido == true) {
            formulario.direccion.focus();
            bValido = false;
        }
        sError += "\n La direccion tienes que estar comprendida entre 5 y 60 casracteres";
    }

    //Validar nombre de usuario 
    let nomUsuario = formulario.nomUsuario.value.trim();
    oExpReg = /^[a-z\d_]{4,15}$/i;

    if (oExpReg.test(nomUsuario) == false) {
        if (bValido == true) {
            formulario.nomUsuario.focus();
            bValido = false;
        }
        sError += "\n El nombre de usuario tiene que estar comprendido entre 4 y 15 caracteres";
    }

    //Validar contraseña
    let contraseña = formulario.contraseña.value.trim();
    oExpReg =  /(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/; 

    if (oExpReg.test(contraseña) == false) {
        if (bValido == true) {
            formulario.contraseña.focus();
            bValido = false;
        }
        sError += "\n La conttraseña deve tener minimo 5 caracteres, un caracter especial y un número";
    }

    //Mostrar errores
    if (bValido == false) {
        alert(sError);
        oE.preventDefault();
    } else {
        enviarRegistro();
    }
}

// Cargar XML
function cargarDatos() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
        }
    };
    xhr.open("GET", "BBDD.xml", true);
    xhr.send();
}

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var usuarios = docXML.getElementsByTagName("usuario");

    for (var i = 0; i < usuarios.length; i++) {
        let dni = usuarios[i].getElementsByTagName("dni")[0].textContent;
        let nombre = usuarios[i].getElementsByTagName("nombre")[0].textContent;
        let apellido = usuarios[i].getElementsByTagName("apellido")[0].textContent;
        let email = usuarios[i].getElementsByTagName("email")[0].textContent;
        let direccion = usuarios[i].getElementsByTagName("direccion")[0].textContent;
        let nomUsuario = usuarios[i].getElementsByTagName("nomUsuario")[0].textContent;
        let contraseña = usuarios[i].getElementsByTagName("contraseña")[0].textContent;
        let usuario = new Usuario(dni, nombre, apellido, email, direccion, nomUsuario, contraseña);
        buyfast.altaUsuario(usuario);
    }
}
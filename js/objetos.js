var texto;

class Usuario {
    constructor(dni, nombre, apellidos, gmail, direccion, nomUsuario, contraseña) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.gmail = gmail;
        this.direccion = direccion;
        this.nomUsuario = nomUsuario;
        this.contraseña = contraseña;
    }
}

class Producto{
    constructor(precio, nombre, estado, descripcion, propietario, comprador) {
        this.precio = precio;
        this.nombre = nombre;
        this.estado = estado;
        this.descripcion = descripcion;
        this.propietario = propietario;
        this.comprador = comprador;
    }
}

class Vehiculo extends Producto {
    constructor(nombre, precio, estado, descripcion, propietario, comprador, color, modelo, kms) {
        super(nombre, precio, estado, descripcion, propietario, comprador);
        this.color = color;
        this.modelo = modelo;
        this.kms = kms;
    }
}

class Ropa extends Producto {
    constructor(nombre, precio, estado, descripcion, propietario, comprador, talla, marca, sexo) {
        super(nombre, precio, estado, propietario, descripcion, comprador);
        this.talla = talla;
        this.marca = marca;
        this.sexo = sexo;
    }
}

class Electronica extends Producto {
    constructor(nombre, precio, estado, descripcion, propietario, comprador, modelo, tipo) {
        super(nombre, precio, estado, descripcion, propietario, comprador);
        this.modelo = modelo;
        this.tipo = tipo;
    }
}

class Otro extends Producto {
    constructor(nombre, precio, estado, descripcion, propietario, comprador) {
        super(nombre, precio, estado, descripcion, propietario, comprador);
    }
}

class BuyFast {
    constructor() {
        this.usuarios = [];
        this.productos = [];
    }

    //ALTAS
    altaUsuario(usuario) {
        if (this.usuarios.filter(otroUsuario => otroUsuario.gmail == usuario.gmail).length == 0) {
            this.usuarios.push(usuario);
            texto = "Alta usuario correcta";
        } else {
            texto = "El usuario ya esta registrado";
        }
    return texto;
    }

    verificaUsuarios(nomUsuario, contraseña) {
        if (this.usuarios.filter(otroUsuario => otroUsuario.nomUsuario == nomUsuario).length == 0) {
            texto = "Nombre de usuario o contraseña incorrecto";
        } else {
            if (this.usuarios.filter(otroUsuario => otroUsuario.contraseña == contraseña).length == 0) {
                texto = "Nombre de usuario o contraseña incorrecta";
            } else {
                texto = "Datos validos";
                window.location="productos.html"
            }
        }
        return texto;
    }

    altaVehiculos(vehiculo) {
        let opcion = this.buscaVehiculo(vehiculo.nombre, vehiculo.propietario);

        if (opcion == 0) {
            this.productos.push(vehiculo);
            texto = "Producto subido";
        } else {
            texto = "Ese producto ya ha sido subido";
        }

        return texto;
    }

    altaRopas(ropa) {
        let opcion = this.buscaRopa(ropa.nombre, ropa.propietario);

        if (opcion == 0) {
            this.productos.push(ropa);
            texto = "Producto subido";
        } else {
            texto = "Ese producto ya ha sido subido";
        }

        return texto;
    }

    altaElectronicas(electronica) {
        let opcion = this.buscaElectronica(electronica.nombre, electronica.propietario);

        if (opcion == 0) {
            this.productos.push(electronica);
            texto = "Producto subido";
        } else {
            texto = "Ese producto ya ha sido subido";
        }
        return texto;
    }

    altaOtros(otro) {
        let opcion = this.buscaOtro(otro.nombre, otro.propietario);

        if (opcion == 0) {
            this.productos.push(otro);
            texto = "Producto subido";
        } else {
            texto = "Ese producto ya ha sido subido";
        }
        return texto;
    }

    //Actualizar
    actualizaVehiculo(oVehiculo) {
        let antiguoVehiculo = this.buscarNombreVehiculo(oVehiculo.nombre);
        this.productos.splice(this.productos.indexOf(antiguoVehiculo), 1);
        this.productos.push(oVehiculo);
        return "Actualizado correctamente";
    }

    actualizaRopa(oRopa) {
        let antiguaRopa = this.buscarNombreRopa(oRopa.nombre);
        this.productos.splice(this.productos.indexOf(antiguaRopa), 1);
        this.productos.push(oRopa);
        return "Actualizado correctamente";
    }

    actualizaElectronica(oElectronica) {
        let antiguaElectronica = this.buscarNombreElectronica(oElectronica.nombre);
        this.productos.splice(this.productos.indexOf(antiguaElectronica), 1);
        this.productos.push(oElectronica);
        return "Actualizado correctamente";
    }

    actualizaOtro(oOtro) {
        let antiguoOtro = this.buscarNombreOtro(oOtro.nombre);
        this.productos.splice(this.productos.indexOf(antiguoOtro), 1);
        this.productos.push(oOtro);
        return "Actualizado correctamente";
    }

    //Eliminar
    eliminarVehiculo(nombre) {
        let vehiculoAEliminar = this.buscarNombreVehiculo(nombre);
        this.productos.splice(this.productos.indexOf(vehiculoAEliminar), 1);
        return "El vehiculo ha sido eliminado correctamente";
    }

    eliminarRopa(nombre) {
        let ropaAEliminar = this.buscarNombreRopa(nombre);
        this.productos.splice(this.productos.indexOf(ropaAEliminar), 1);
        return "La prenda ha sido eliminada correctamente";
    }

    eliminarElectronica(nombre) {
        let electronicaAEliminar = this.buscarNombreElectronica(nombre);
        this.productos.splice(this.productos.indexOf(electronicaAEliminar), 1);
        return "El producto electronico ha sido eliminado correctamente"
    }

    eliminarOtro(nombre) {
        let otroAEliminar = this.buscarNombreOtro(nombre);
        this.productos.splice(this.productos.indexOf(otroAEliminar), 1);
        return "El producto ha sido eliminado correctamente";
    }

    //Comprar
    compraVehiculo(oVehiculo) {
        let antiguoVehiculo = this.buscarNombreVehiculoDisponible(oVehiculo.nombre);
        this.productos.splice(this.productos.indexOf(antiguoVehiculo), 1);
        this.productos.push(oVehiculo);
        return "La compra se ha realizado con exito";
    }

    compraRopa(oRopa) {
        let antiguaRopa = this.buscarNombreRopaDisponible(oRopa.nombre);
        this.productos.splice(this.productos.indexOf(antiguaRopa), 1);
        this.productos.push(oRopa);
        return "La compra se ha realizado correctamente";
    }

    compraElectronica(oElectronica) {
        let antiguaElectronica = this.buscarNombreElectronicaDisponible(oElectronica.nombre);
        this.productos.splice(this.productos.indexOf(antiguaElectronica), 1);
        this.productos.push(oElectronica);
        return "La compra se ha realizado correctamente";
    }

    compraOtro(oOtro) {
        let antiguoOtro = this.buscarNombreOtroDisponible(oOtro.nombre);
        this.productos.splice(this.productos.indexOf(antiguoOtro), 1);
        this.productos.push(oOtro);
        return "La compra se ha realizado correctamente";
    }

    //GET
    getVehiculos() {
        let usuario = localStorage.getItem("nomUsuario");
        let vehiculos = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Vehiculo" && producto.propietario == usuario) {
                vehiculos.push(producto);
            }
        });
        return vehiculos;
    }

    getRopas() {
        let usuario = localStorage.getItem("nomUsuario");
        let ropas = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Ropa" && producto.propietario == usuario) {
                ropas.push(producto);
            }
        });
        return ropas;
    }

    getElectronicas() {
        let usuario = localStorage.getItem("nomUsuario");
        let electronicas = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Electronica" && producto.propietario == usuario) {
                electronicas.push(producto);
            }
        });
        return electronicas;
    }

    getOtros() {
        let usuario = localStorage.getItem("nomUsuario");
        let otros = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Otro" && producto.propietario == usuario) {
                otros.push(producto);
            }
        })
        return otros;
    }

    //DISPONIBLES
    getVehiculosDisponibles() {
        let usuario = localStorage.getItem("nomUsuario");
        let vehiculos = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Vehiculo" && producto.propietario != usuario && producto.comprador == "") {
                vehiculos.push(producto);
            }
        });
        return vehiculos;
    }

    getRopasDisponibles() {
        let usuario = localStorage.getItem("nomUsuario");
        let ropas = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Ropa" && producto.propietario != usuario && producto.comprador == "") {
                ropas.push(producto);
            }
        });
        return ropas;
    }

    getElectronicasDisponibles() {
        let usuario = localStorage.getItem("nomUsuario");
        let electronicas = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Electronica" && producto.propietario != usuario && producto.comprador == "") {
                electronicas.push(producto);
            }
        });
        return electronicas;
    }

    getOtrosDisponibles() {
        let usuario = localStorage.getItem("nomUsuario");
        let otros = [];
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Otro" && producto.propietario != usuario && producto.comprador == "") {
                otros.push(producto);
            }
        });
        return otros;
    }
    
    //BUSCADOR
    buscaVehiculo (nombreVehiculo, propietario) {
        let existe = 0;
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Vehiculo" && producto.nombre == nombreVehiculo && producto.propietario == propietario) {
                existe = 1;
            } 
        });
        return existe;
    }

    buscaRopa (nombreRopa, propietario) {
        let existe = 0;
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Ropa" && producto.nombre == nombreRopa && producto.propietario == propietario) {
                existe = 1;
            }
        });
        return existe;
    }

    buscaElectronica (nombreElectronica, propietario) {
        let existe = 0;
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Electronica" && producto.nombre == nombreElectronica && producto.propietario == propietario) {
                existe = 1;
            }
        });
        return existe;
    }

    buscaOtro (nombreOtro, propietario) {
        let existe = 0;
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Otro" && producto.constructor.name == nombreOtro && producto.propietario == propietario) {
                existe = 1;
            }
        });
        return existe;
    }

    buscarNombreVehiculo (nombreVehiculo) {
        let usuario = localStorage.getItem("nomUsuario");
        let vehiculoADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Vehiculo" && producto.nombre == nombreVehiculo && producto.propietario == usuario) {
                vehiculoADevolver = producto;
                return vehiculoADevolver
            }
        });
        return vehiculoADevolver;
    } 

    buscarNombreRopa (nombreRopa) {
        let usuario = localStorage.getItem("nomUsuario");
        let ropaADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Ropa" && producto.nombre == nombreRopa && producto.propietario == usuario) {
                ropaADevolver = producto;
                return ropaADevolver
            }
        });
        return ropaADevolver;
    }

    buscarNombreElectronica (nombreElectronica) {
        let usuario = localStorage.getItem("nomUsuario");
        let electronicaADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Electronica" && producto.nombre == nombreElectronica && producto.propietario == usuario) {
                electronicaADevolver = producto;
                return electronicaADevolver;
            }
        });
        return electronicaADevolver;
    }

    buscarNombreOtro (nombreOtro) {
        let usuario = localStorage.getItem("nomUsuario");
        let otroADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Otro" && producto.nombre == nombreOtro && producto.propietario == usuario) {
                otroADevolver = producto;
                return otroADevolver;
            } 
        });
        return otroADevolver;
    }

    buscarNombreVehiculoDisponible (nombreVehiculo) {
        let usuario = localStorage.getItem("nomUsuario");
        let vehiculoADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Vehiculo" && producto.nombre == nombreVehiculo && producto.propietario != usuario) {
                vehiculoADevolver = producto;
                return vehiculoADevolver
            }
        });
        return vehiculoADevolver;
    }

    buscarNombreRopaDisponible(nombreRopa) {
        let usuario = localStorage.getItem("nomUsuario");
        let ropaADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Ropa" && producto.nombre == nombreRopa && producto.propietario != usuario) {
                ropaADevolver = producto;
                return ropaADevolver;
            }
        });
        return ropaADevolver;
    }

    buscarNombreElectronicaDisponible(nombreElectronica) {
        let usuario = localStorage.getItem("nomUsuario");
        let electronicaADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Electronica" && producto.nombre == nombreElectronica && producto.propietario != usuario) {
                electronicaADevolver = producto;
                return electronicaADevolver;
            }
        });
        return electronicaADevolver;
    }

    buscarNombreOtroDisponible(nombreOtro) {
        let usuario = localStorage.getItem("nomUsuario");
        let otroADevolver = "";
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Otro" && producto.nombre == nombreOtro && producto.propietario != usuario) {
                otroADevolver = producto;
                return otroADevolver;
            } 
        });
        return otroADevolver;
    }

    //LISTADOS 

    listadoVehiculos(headers) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Vehiculo" && producto.propietario == usuario) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.modelo);
                celda = fila.insertCell(-1);
                celda.append(producto.color);
                celda = fila.insertCell(-1);
                celda.append(producto.kms);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "8");
        return tabla;
    }

    listadoRopas(headers) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name=="Ropa" && producto.propietario==usuario) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.marca);
                celda = fila.insertCell(-1);
                celda.append(producto.talla);
                celda = fila.insertCell(-1);
                celda.append(producto.sexo);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "8");
        return tabla;
    }

    listadoElectronicas(headers) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Electronica" && producto.propietario == usuario) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.modelo);
                celda = fila.insertCell(-1);
                celda.append(producto.tipo);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "7");
        return tabla;
    }

    listadoOtros(headers) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Otro" && producto.propietario == usuario) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "5");
        return tabla;
    }

    listadoTodos(headers) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.propietario == usuario) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
                celda = fila.insertCell(-1);
                if (producto.constructor.name == "Vehiculo") {
                    celda.append("Vehiculo");
                } else if (producto.constructor.name == "Ropa") {
                    celda.append("Ropa");
                } else if (producto.constructor.name == "Electronica") {
                    celda.append("Electronica");
                } else if (producto.constructor.name == "Otro") {
                    celda.append("Otro");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "5");
        return tabla;
    }

    buscarVehiculoExistente(headers, nombre) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Vehiculo" && producto.propietario == usuario && producto.nombre == nombre) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.modelo);
                celda = fila.insertCell(-1);
                celda.append(producto.color);
                celda = fila.insertCell(-1);
                celda.append(producto.kms);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "8");
        return tabla;
    }

    buscarRopaExistente(headers, nombre) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name=="Ropa" && producto.propietario==usuario && producto.nombre == nombre) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.marca);
                celda = fila.insertCell(-1);
                celda.append(producto.talla);
                celda = fila.insertCell(-1);
                celda.append(producto.sexo);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "8");
        return tabla;
    }

    buscarElectronicaExistente(headers, nombre) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Electronica" && producto.propietario == usuario && producto.nombre == nombre) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.modelo);
                celda = fila.insertCell(-1);
                celda.append(producto.tipo);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "7");
        return tabla;
    }

    buscarOtroExistente(headers, nombre) {
        let usuario = localStorage.getItem("nomUsuario");
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
        let cuerpo = document.createElement("tbody");
        this.productos.forEach((producto) => {
            if (producto.constructor.name == "Otro" && producto.propietario == usuario && producto.nombre == nombre) {
                let fila = cuerpo.insertRow(-1);
                let celda = fila.insertCell(-1);
                celda.append(producto.nombre);
                celda = fila.insertCell(-1);
                celda.append(producto.estado);
                celda = fila.insertCell(-1);
                celda.append(producto.descripcion);
                celda = fila.insertCell(-1);
                celda.append(producto.precio);
                celda = fila.insertCell(-1);
                if (producto.comprador == "") {
                    celda.append("No");
                } else {
                    celda.append("Si");
                }
            }
        });
        tabla.append(cuerpo);
        let linea = tabla.insertRow(-1);
        let celda = linea.insertCell(-1);
        celda.setAttribute("colspan", "5");
        return tabla;
    }
}
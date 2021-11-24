let arrayDatosLocalMostrar;

// ENTIDADES | FACTORY | ENTIDAD "USER".
class User {
    constructor(
        user,
        password
    ){
        this.user     = user;
        this.password = password;
    }
}

// Usuario y contraseña CORRECTA.
const userLogin = new User (`rocio`, 2712);


// FUNCIONES:

// BUTTON ejecuta "verificarLogin()".
document.getElementById(`btnLogIn`).addEventListener(`click`, () => {verificarLogin(), resetForm()});


// FUNCTION "resetForm()". (Se elimina la información ingresada en los inputs dejando el formulario en blanco luego de apretar el botón "Login").
const resetForm = () => {
    document.getElementById(`formBo`).reset();
}


// FUNCTION "verificarLogin()". (Se verifica que los datos ingresados para Usuario y Contraseña sean correctos (`rocio`, 2712) de lo contrario se imprimirá "Usuario Incorrecto").
const verificarLogin = () => {
    usuario    = document.getElementById(`user`).value;
    contraseña = Number(document.getElementById(`password`).value);

        if ((usuario === `rocio`) && (contraseña === 2712)) {
            imprimirDatos();
        } else {
            alert (`Usuario Incorrecto`)
        }
}


// FUNCTION "extraerDatosLocalMostrar()".
const extraerDatosLocalMostrar = () => {
    if (JSON.parse(localStorage.getItem(`listaReservas`)) == null) {
        alert (`No hay datos almacenados para mostrar`)
    } else {
        arrayDatosLocalMostrar = JSON.parse(localStorage.getItem(`listaReservas`));
        return arrayDatosLocalMostrar;
    }
}


// FUNCTION "imprimirDatos()". Si el usuario es correcto se imprimen los datos con esta function.
const imprimirDatos = () => {
    let indice = 0;
    extraerDatosLocalMostrar().forEach(element => {
    indice += 1;

    document.getElementById(`tableHostInfo`).innerHTML += `
    <tr>
        <td>${indice}</td>
        <td>${element.nombre}</td>
        <td>${element.cantidadAdultos}</td>
        <td>${element.cantidadMenores}</td>
        <td>${element.cantidadNoches}</td>
        <td>${element.designacionDeCabaña}</td>
        <td>${element.formaDePago}</td>
        <td>${element.mail}</td>
    </tr>
    `
    })
}



// BUSCADOR //
const guardarValorBuscado = () => {
    let valorBuscado = document.getElementById(`hostNameSearch`).value;
    return valorBuscado;
}


// BUTTON ejecuta "guardarValorBuscado()".
document.getElementById(`btnSearch`).addEventListener(`click`, () => {guardarValorBuscado(), imprimirDatosBuscador})


// FUNCTION "buscadorNombre()". (A través de un buscador se puede ingresar el nombre de un alojado en particular y se imprimán sus datos).
const buscadorNombre = () => {
    let busqueda = "";
    let nombre = document.getElementById(`nombre`);
    
    //////////////////////
    // if {
    //     nombre 
    // }

    let arrayBuscado = extraerDatosLocalMostrar().filter(element => element.nombre = guardarValorBuscado());
    return arrayBuscado;
}

const imprimirDatosBuscador = () => {
    let indice = 0;
    extraerDatosLocalMostrar().forEach(element => {
    indice += 1;

    document.getElementById(`tableSearch`).innerHTML += `
    <tr>
        <td>${indice}</td>
        <td>${element.nombre}</td>
        <td>${element.cantidadAdultos}</td>
        <td>${element.cantidadMenores}</td>
        <td>${element.cantidadNoches}</td>
        <td>${element.designacionDeCabaña}</td>
        <td>${element.formaDePago}</td>
        <td>${element.mail}</td>
    </tr>
    `
    })
}


// BUTTON ejecuta "resetFormSearch()".
document.getElementById(`btnSearch`).addEventListener(`click`, () => {resetFormSearch()});


// FUNCTION "resetFormSearch()". (Se elimina la información ingresada en los inputs dejando el formulario en blanco luego de apretar el botón "Search").
const resetFormSearch = () => {
    document.getElementById(`formSearch`).reset();
}
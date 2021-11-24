// Se desarrolla un nuevo HTML y JS para generar el acceso a usuarios específicos, quienes tendrán acceso a los los datos guardados en el Local Storage de cada reserva realizada.

let arrayDatosReservaLSmostrar;

// ENTIDAD "USUARIO".
class Usuario {
    constructor (usuario, contraseña) {
        this.usuario     = usuario;
        this.contraseña  = contraseña;
    };
};

// Usuario y contraseña CORRECTA.
const usuarioLogin = new Usuario (`rocio`, 2712);

// FUNCIONES:
// Botón ejecuta "verificarLogin()".
document.getElementById(`btn__logIn`).addEventListener(`click`, () => {verificarLogin(), resetLoginForm()});

// Función para resetear el formulario de LOGIN una vez realizado el ingreso.
const resetFormLogin = () => {
    document.getElementById('login__form').reset();
};

// Función "verificarLogin()". Se verifica que los datos ingresados para Usuario y Contraseña sean correctos (`rocio`, 2712) de lo contrario se imprimirá en un alert "Usuario Incorrecto".
const verificarLogin = () => {
    user    = document.getElementById(`user`).value;
    password = Number(document.getElementById(`password`).value);

        if ((user === `rocio`) && (password === 2712)) {
            imprimirDatosReserva();
        } else {
            alert (`Usuario Incorrecto`)
        }
};

// Función para extraer los datos del formulario DISPONIBILIDAD.
const extraerDatosReservaLSmostrar = () => {
    if (JSON.parse(localStorage.getItem(`listaFormPago`)) == null) {
        alert (`No hay datos almacenados para mostrar`)
    } else {
        arrayDatosReservaLSmostrar = JSON.parse(localStorage.getItem(`listaFormPago`));
        return arrayDatosReservaLSmostrar;
    }
};

// CREAR ELEMENTOS / AGREGAR NODOS:
// Función "imprimirDatosReservas" Si los datos del usuario y la contraseña fueron ingresados correctamente, se imprimen los datos de las reservas realizadas almacenadas en el Local Storage.
const imprimirDatosReserva = () => {

    let indice = 0;
    extraerDatosReservaLSmostrar().forEach(element => {
        indice += 1;
        const tableRow = document.createElement("tr");

        const tableDataIndice       = document.createElement("td");
        tableDataIndice.textContent = indice;
        tableRow.appendChild(tableDataIndice);

        const tableDataFirstName = document.createElement("td");
        tableDataFirstName.textContent = element.nombre;
        tableRow.appendChild(tableDataFirstName);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataLastName = document.createElement("td");
        tableDataLastName.textContent = element.apellido;
        tableRow.a(tableDataLastName);
        document.getElementById("logIn__table-guestInfo").a(tableRow);

        const tableDataPhone = document.createElement("td");
        tableDataPhone.textContent = element.numeroDeContacto;
        tableRow.a(tableDataPhone);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataMail = document.createElement("td");
        tableDataMail.textContent = element.mail;
        tableRow.appendChild(tableDataMail);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataPais = document.createElement("td");
        tableDataPais.textContent = element.pais;
        tableRow.appendChild(tableDataPais);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataCiudad = document.createElement("td");
        tableDataCiudad.textContent = element.ciudad;
        tableRow.appendChild(tableDataCiudad);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataDireccion = document.createElement("td");
        tableDataDireccion.textContent = element.direccion;
        tableRow.appendChild(tableDataDireccion);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataCP = document.createElement("td");
        tableDataCP.textContent = element.cp;
        tableRow.appendChild(tableDataCP);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataFormaDePago = document.createElement("td");
        tableDataFormaDePago.textContent = element.formaDePago;
        tableRow.appendChild(tableDataFormaDePago);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataDesignacionDeCabaña = document.createElement("td");
        tableDataDesignacionDeCabaña.textContent = element.designacionDeCabaña;
        tableRow.appendChild(tableDataDesignacionDeCabaña);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataMontoEstadia = document.createElement("td");
        tableDataMontoEstadia.textContent = element.montoEstadia;
        tableRow.appendChild(tableDataMontoEstadia);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);

        const tableDataMontoEstadiaUSD = document.createElement("td");
        tableDataMontoEstadiaUSD.textContent = element.montoEstadiaUSD;
        tableRow.appendChild(tableDataMontoEstadiaUSD);
        document.getElementById("logIn__table-guestInfo").appendChild(tableRow);
    })
};
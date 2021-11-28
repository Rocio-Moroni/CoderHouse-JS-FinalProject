// ENTIDADES | FACTORY | Se crearán 2 entidades, la primer entidad llamada DISPONIBILIDAD que almacenará los datos de un primer formulario y luego una segunda entidad denominada RESERVA, la cual almacenará datos más detallados del usuario que realiza lel pago de la reserva.

// ENTIDAD "DISPONIBILIDAD".
class Disponibilidad {
    constructor ({
        nombreCompleto,
        cantidadAdultos,
        cantidadMenores,
        totalAlojados,
        cantidadNoches,
        designacionDeCabaña,
        montoEstadia,
        montoEstadiaUSD
        })
        {
        this.nombreCompleto      = nombreCompleto;
        this.cantidadAdultos     = cantidadAdultos;
        this.cantidadMenores     = cantidadMenores;
        this.totalAlojados       = totalAlojados;
        this.cantidadNoches      = cantidadNoches;
        this.designacionDeCabaña = designacionDeCabaña;
        this.montoEstadia        = montoEstadia;
        this.montoEstadiaUSD     = montoEstadiaUSD;
    }
};

// Entidad "RESERVA".
class Reserva {
    constructor ({
        nombre,
        apellido,
        numeroDeContacto,
        mail,
        pais,
        ciudad,
        direccion,
        cp,
        formaDePago,
        designacionDeCabaña,
        montoEstadia,
        montoEstadiaUSD
    })
    {
        this.nombre              = nombre;
        this.apellido            = apellido;
        this.numeroDeContacto    = numeroDeContacto;
        this.mail                = mail;
        this.pais                = pais;
        this.ciudad              = ciudad;
        this.direccion           = direccion;
        this.cp                  = cp;
        this.formaDePago         = formaDePago;
        this.designacionDeCabaña = designacionDeCabaña;
        this.montoEstadia        = montoEstadia;
        this.montoEstadiaUSD     = montoEstadiaUSD;
    }
}

// FUNCIONES.

// Función para resetear el formulario de RESERVA una vez realizado el pago.
const resetFormReserva = () => {
    document.getElementById('form__reserva').reset();
};

// Función para extraer los datos del formulario DISPONIBILIDAD.
const extraerDatosFormDisponibilidad = () => {

    let precioDolarCompra        = dolarBlueFuncion();
    totalAlojadosCalculado       = totalAlojadosFuncion();
    designacionDeCabañaOtorgada  = designacionDeCabañaFuncion();
    montoEstadia                 = montoEstadiaFuncion();
    montoEstadiaUSDcalculado     = montoEstadia / precioDolarCompra;

    const nuevaDisponibilidad = new Disponibilidad ({
        nombreCompleto:      document.getElementById("form__disponibilidad-name").value,
        cantidadAdultos:     +document.getElementById("form__disponibilidad-adults").value,
        cantidadMenores:     +document.getElementById("form__disponibilidad-children").value,
        totalAlojados:       totalAlojadosCalculado,
        cantidadNoches:      +document.getElementById("form__disponibilidad-nights").value,
        designacionDeCabaña: designacionDeCabañaOtorgada,
        montoEstadia:        montoEstadia,
        montoEstadiaUSD:     Math.round(montoEstadiaUSDcalculado)
    })
    return nuevaDisponibilidad;
};

// Función para extraer los datos del formulario RESERVA.
const extraerDatosFormPago = () => {

    let precioDolarCompra        = dolarBlueFuncion();
    totalAlojadosCalculado       = totalAlojadosFuncion();
    designacionDeCabañaOtorgada  = designacionDeCabañaFuncion();
    formaDePagoElegido           = formaDePagoFuncion();
    montoEstadia                 = montoEstadiaFuncion();
    montoEstadiaUSDcalculado     = montoEstadia / precioDolarCompra;

    const nuevaReserva = new Reserva ({
        nombre:              document.getElementById("form__reserva-firstName").value,
        apellido:            document.getElementById("form__reserva-lastName").value,
        numeroDeContacto:    document.getElementById("form__reserva-phone").value,
        mail:                document.getElementById("form__reserva-email").value,
        pais:                document.getElementById("form__reserva-country").value,
        ciudad:              document.getElementById("form__reserva-city").value,
        direccion:           document.getElementById("form__reserva-address").value,
        cp:                  document.getElementById("form__reserva-postalCode").value,
        formaDePago:         formaDePagoElegido,
        designacionDeCabaña: designacionDeCabañaOtorgada,
        montoEstadia:        montoEstadia,
        montoEstadiaUSD:     Math.round(montoEstadiaUSDcalculado)
    })
    return nuevaReserva;
};

// Función "totalAlojadosFuncion()" (Se suman la cantidad de adultos y la cantidad de menores que quieren alojarse por reserva).
const totalAlojadosFuncion = () => {

    let adultos = +document.getElementById("form__disponibilidad-adults").value;
    let menores = +document.getElementById("form__disponibilidad-children").value;

    let totalAlojadosCalculado = adultos + menores;
    return totalAlojadosCalculado;
};

// Función "designacionDeCabañaFuncion()" (Dependiendo del "totalAlojados" se designa una cabaña acorde a su capacidad de personas para alojar).
const designacionDeCabañaFuncion = () => {

    let totalAlojados = (+document.getElementById("form__disponibilidad-adults").value) + (+document.getElementById("form__disponibilidad-children").value);

    if ((totalAlojados) <= 4) {
        return cabañaDesignada = "La Cascada";
    } else if (totalAlojados > 4 && totalAlojados <= 8) {
        return cabañaDesignada = "Los Aromos";
    } else if (totalAlojados > 8 && totalAlojados <= 12) {
        return cabañaDesignada = "Los Espinillos";
    };
};

// Función "montoEstadiaFuncion()" (Cálculo del monto total de la estadía dependiendo de la cantidad de noches y la cabaña asignada).
const montoEstadiaFuncion = () => {

    let montoEstadia;
    let cabañaSeleccionada = designacionDeCabañaFuncion();
    let cantidadNoches = +document.getElementById("form__disponibilidad-nights").value;

    if (cabañaSeleccionada == "La Cascada") {
        cabañaSeleccionada = 2000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } else if (cabañaSeleccionada == "Los Aromos") {
        cabañaSeleccionada = 4000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    } else if (cabañaSeleccionada == "Los Espinillos") {
        cabañaSeleccionada = 6000;
        montoEstadia = cantidadNoches * cabañaSeleccionada;
        return montoEstadia;
    };
};

// Función "dolarLocalStorage()".
// API Dolar con FETCH: Se tomará el precio del dolar blue. Primero se consume la API, se la almacena en el Local Storage y luego se la vuelve a llamar con getItem para así, al final del proceso tener el valor del dolar blue compra.

let arrayDolar = [];
let arrayDolarBlue;
let nuevoArray = [];
let valorCompraDolar;
const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

const dolarLocalStorage = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (localStorage.getItem("arrayDolar") == null) {
            let arrayDolar = [];
            arrayDolar.push(data);
            localStorage.setItem("arrayDolar", JSON.stringify(arrayDolar));
        } else {
            arrayDolar = JSON.parse(localStorage.getItem("arrayDolar"));
            arrayDolar = [];
            arrayDolar.push(data);
            localStorage.setItem("arrayDolar", JSON.stringify(arrayDolar));;
        }
    });
};

// Función "dolarLocalStorage()" (Se llama a la API y se ejecuta automáticamente cuando se le de refresh a la página).
dolarLocalStorage();

const dolarBlueFuncion = () => {
    arrayDolar = JSON.parse(localStorage.getItem("arrayDolar"));
    arrayDolarBlue = arrayDolar[0][1];

    for (i in arrayDolarBlue);
    nuevoArray.push(arrayDolarBlue[i].compra);
    let valorCompraDolar = parseInt(nuevoArray[0]);

    return valorCompraDolar;
};

// Función "formaDePago()" (Dependiendo de si se eligió pagar con tarjeta de crédito o con transferencia bancaria, el valor final de "formaDePago" será la opción elegida por el usuario).
const formaDePagoFuncion = () => {

    if (creditCard.checked == true) {
        const formaDePago = document.getElementById("creditCard").value;
        return formaDePago;
    } else if (wireTransfer.checked == true) {
        const formaDePago = document.getElementById("wireTransfer").value;
        return formaDePago;
    }
};


// Guardar en Local Storage.
// Función "guardarLocalStorageDisponibilidad()".
const guardarLocalStorageFormDisponibilidad = () => {

    if (JSON.parse(localStorage.getItem('listaDisponibilidad')) == null) {
        let listaDisponibilidad = [];
        listaDisponibilidad.push(extraerDatosFormDisponibilidad());
        localStorage.setItem('listaDisponibilidad', JSON.stringify(listaDisponibilidad));
    } else {
        listaDisponibilidad = JSON.parse(localStorage.getItem('listaDisponibilidad'));
        listaDisponibilidad.push(extraerDatosFormDisponibilidad());
        localStorage.setItem('listaDisponibilidad', JSON.stringify(listaDisponibilidad));
    }
};

// Función "guardarLocalStorageReserva()".
const guardarLocalStorageFormReserva = () => {

    if (JSON.parse(localStorage.getItem('listaFormPago')) == null) {
        let listaFormPago = [];
        listaFormPago.push(extraerDatosFormPago());
        localStorage.setItem('listaFormPago', JSON.stringify(listaFormPago));
    } else {
        listaFormPago = JSON.parse(localStorage.getItem('listaFormPago'));
        listaFormPago.push(extraerDatosFormPago());
        localStorage.setItem('listaFormPago', JSON.stringify(listaFormPago));
    }
};


// EVENTOS CON JQUERY:
// Método Shortcut CLICK y animación SHOW:
// Al escuchar el evento se muestra un nuevo form para realizar el pago con tarjeta de crédito, el cual está oculto desde el html con style = "display: none").
$("#creditCard").click (() => {
    $(".form__credit-div").show();
});

// Método Shortcut CLICK y animación HIDE:
// Si se elige como forma de pago transferencia bancaria, el "form" de tarjeta de crédito se oculta.
$("#wireTransfer").click (() => {
    $(".form__credit-div").hide();
});

// Método Shortcut CLICK y animación SHOW:
// Al escuchar el evento se muestra un nuevo viewport, el cual está oculto desde el html con style = "display: none".
$("#btn__availability").click (() => {
    $("#availability__container").show();
});


// CREAR ELEMENTOS / AGREGAR NODOS:
// Función "mensajeFinal" (Si el total de alojados es inferior a 12 se mostrará el mensaje con el resúmen de la Disponibilidad, si es mayor a 12 se indicará que solo se pueden alojar hasta 12 personas).
const mensajeDisponibilidad = () => {
    let nombreCompleto              = document.getElementById("form__disponibilidad-name").value;
    let totalAlojadosCalculado      = totalAlojadosFuncion();
    let cantidadNoches              = +document.getElementById("form__disponibilidad-nights").value;
    let designacionDeCabañaOtorgada = designacionDeCabañaFuncion();
    let montoEstadia                = montoEstadiaFuncion();

    // Creación de nuevo nodo con el método 'createElement()' especificando por parámetro la etiqueta 'div'.
    const mensajeDeDisponibilidad = document.createElement("div");

    // Menos de 13 alojados:
    if (totalAlojadosCalculado < 13 == true) {
        const mensajeD       = document.createElement("p");

        mensajeD.textContent = `Hello ${nombreCompleto}! Welcome to "Cabañas Las Cañitas". We have some good news for you! Our cottage ${designacionDeCabañaOtorgada} is available for receiving ${totalAlojadosCalculado} guests. The total amount of your stay for ${cantidadNoches} nights is $${montoEstadia}. If you want to continue with payment, please click on "Continue Booking".`;

        mensajeDeDisponibilidad.appendChild(mensajeD);

        document.getElementById("availability__message1").appendChild(mensajeD);
        return;

    // Más de 12 alojados, reserva rechazada.
    } else {
        const superiorAdoce       = document.createElement("p");

        superiorAdoce.textContent = `Hello ${nombreCompleto}! Welcome to "Cabañas Las Cañitas". We are sorry, we do not have cottages to accommodate more than 12 people`;

        mensajeDeDisponibilidad.appendChild(superiorAdoce);

        document.getElementById("availability__message1").appendChild(superiorAdoce);
        return;
    }
};


// EVENTOS CON JAVASCRIPT:
// Botón ejecuta:
// 1) "guardarLocalStorageDisponibilidad()".
// 2) "mostrarSeccionDisponibilidad()".
// 3) "mostrarMensajeDisponibilidad()".
document.getElementById('btn__availability').addEventListener('click', () => {guardarLocalStorageFormDisponibilidad(), mensajeDisponibilidad()});

// Botón ejecuta:
// 1) "guardarLocalStorageReserva()".
// 2) "resetFormPago()".
document.getElementById('btn__book').addEventListener('click', () => {guardarLocalStorageFormReserva(), resetFormReserva()})

// Botón ejecuta:
// 1) "resetFormReserva()".
document.getElementById('btn__resetFormReserva').addEventListener('click', () => {resetFormReserva()});

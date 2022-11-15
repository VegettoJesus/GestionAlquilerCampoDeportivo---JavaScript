const montoHoraDia = 50;
const montoHoraNoche = 90;
let alquilerJSON=[];


function mostrarAlquileres(){
    
    lista.innerHTML="";

    for(const alquiler of alquileres){
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = alquiler.codigo;

        const td2 = document.createElement("td");
        td2.innerText = alquiler.registro;

        const td3 = document.createElement("td");
        td3.innerText = alquiler.dni;

        const td4 = document.createElement("td");
        td4.innerText = alquiler.nombreCliente;

        const td5 = document.createElement("td");
        td5.innerText = alquiler.celular;

        const td6 = document.createElement("td");
        td6.innerText = alquiler.reserva;

        const td7 = document.createElement("td");
        td7.innerText = alquiler.iniciaH;

        const td8 = document.createElement("td");
        td8.innerText = alquiler.finalizaH;

        const td9 = document.createElement("td");
        td9.innerText = alquiler.campo;

        const td10 = document.createElement("td");
        td10.innerText = alquiler.precio;


        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        tr.append(td7);
        tr.append(td8);
        tr.append(td9);
        tr.append(td10);

        lista.append(tr);
        
    }
    for(const alquiler of alquilerJSON){
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = alquiler.codigo;

        const td2 = document.createElement("td");
        td2.innerText = alquiler.registro;

        const td3 = document.createElement("td");
        td3.innerText = alquiler.dni;

        const td4 = document.createElement("td");
        td4.innerText = alquiler.nombreCliente;

        const td5 = document.createElement("td");
        td5.innerText = alquiler.celular;

        const td6 = document.createElement("td");
        td6.innerText = alquiler.reserva;

        const td7 = document.createElement("td");
        td7.innerText = alquiler.iniciaH;

        const td8 = document.createElement("td");
        td8.innerText = alquiler.finalizaH;

        const td9 = document.createElement("td");
        td9.innerText = alquiler.campo;

        const td10 = document.createElement("td");
        td10.innerText = alquiler.precio;


        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        tr.append(td7);
        tr.append(td8);
        tr.append(td9);
        tr.append(td10);

        lista.append(tr);
        
    }
}



//RETORNAR VALORES STRING A ENTEROS (PARA CALCULAR PRECIO)
function returnarEnteroHora(valor){
    if(valor === "8:00"){
        return 8;
    }
    if(valor === "9:00"){
        return 9;
    }
    if(valor === "10:00"){
        return 10;
    }
    if(valor === "11:00"){
        return 11;
    }
    if(valor === "12:00"){
        return 12;
    }
    if(valor === "13:00"){
        return 13;
    }
    if(valor === "14:00"){
        return 14;
    }
    if(valor === "15:00"){
        return 15;
    }
    if(valor === "16:00"){
        return 16;
    }
    if(valor === "17:00"){
        return 17;
    }
    if(valor === "18:00"){
        return 18;
    }
    if(valor === "19:00"){
        return 19;
    }
    if(valor === "20:00"){
        return 20;
    }
    if(valor === "21:00"){
        return 21;
    }
    if(valor === "22:00"){
        return 22;
    }
    if(valor === "23:00"){
        return 23;
    }
}

//VALIDAR QUE LA FECHA DE REGISTRO SEA MAYOR QUE LA FECHA ACTUAL
function fechaMayorAHoy(fecha){
    const fechaHoy = new Date();
    const fechaRegistro = new Date(fecha);
    if(fechaRegistro < fechaHoy){
        return false;
    }
    return true;
    //(fechaRegistro < fechaHoy) ? false : true;
}
//VALIDAR QUE LA FECHA DE RESERVA SEA MAYOR QUE LA FECHA DE REGISTRO
function fechaMayorARegistro(fecha2, fecha){
    const fechaRegistro = new Date(fecha2);
    const fechaReserva = new Date(fecha);
    if(fechaReserva < fechaRegistro){
        return false;
    }
    return true;
   // (fechaReserva < fechaRegistro) ? false : true;
}

//VALIDAR QUE LA HORA FINALIZADA DEBE SER MAYOR QUE LA DE INICIO
function horaInicioMayorQueFinal(horaInicio, horaFinal){
    if(horaFinal < horaInicio){
        return false;
    }
    return true;
}

//CALCULAR PRECIO
function pagoHora(horaIngreso,horaSalida){
    if(horaIngreso>=8 && horaIngreso <=18){
        if(horaSalida>=8 && horaSalida <=18){
            const hAlquilada = horaSalida - horaIngreso;
            let pago =hAlquilada * montoHoraDia;
            return pago;
        }
        if(horaSalida>18){
            const hAlquilada = horaSalida - horaIngreso;
            let pago = (hAlquilada * montoHoraDia) + montoHoraDia/2
            return pago;
        }
    }
    if(horaIngreso>18){
        const hAlquilada = horaSalida - horaIngreso;
        let pago = hAlquilada * montoHoraNoche;
        return pago;
    }
}

//VERIFICAR SI EL REGISTRO DE ALQUILER EXISTE
function alquilerDisponible(iniciaH,reserva,campo){
    return !alquileres.some((buscar) => {
        if(buscar.reserva === reserva){
            if(buscar.campo === campo){
                return buscar.iniciaH === iniciaH;
            }
        }
    });
}

function obtenerAlquileres(){
    const alquileresLS = localStorage.getItem("alquileres");
    if(alquileresLS !== null){
        return JSON.parse(alquileresLS);
    }
    return [];
}

class Alquiler{
    constructor(codigoRegistro,dni,nombreCliente,nroCelular,fechaReserva,horaIngreso,horaAlquilada,horaFinal,nombreCampo,montoTotal){
        this.codigoRegistro = codigoRegistro;
        this.dni = dni;
        this.nombreCliente = nombreCliente;
        this.nroCelular = nroCelular;
        this.fechaReserva = fechaReserva;
        this.horaIngreso = horaIngreso;
        this.horaAlquilada = horaAlquilada;
        this.horaFinal = horaFinal;
        this.nombreCampo = nombreCampo;
        this.montoTotal = parseFloat(montoTotal);
    }
}



const formularioDeAlquiler = document.getElementById("alquiler");
const inputCodigo = document.getElementById("codigo");
const inputRegistro = document.getElementById("registro");
const inputDni = document.getElementById("dni");
const inputnomCliente = document.getElementById("nomCliente");
const inputCelular = document.getElementById("celular");
const inputReserva = document.getElementById("reserva");
const inputIniciaH = document.getElementById("iniciaH");
const inputFinalH = document.getElementById("finalizaH");
const inputCampoDeportivo = document.getElementById("campoDeportivo");
const inputBotton = document.getElementById("btn-registrar");


const alquileres = obtenerAlquileres();

const lista = document.getElementById("lista");


async function obtenerJSON() {
    const URLJSON="/alquilerDatos.json";
    const resp = await fetch(URLJSON);
    const data = await resp.json();
    alquilerJSON = data;
    mostrarAlquileres();
}
obtenerJSON();


formularioDeAlquiler.addEventListener("submit",(event)=>{
    event.preventDefault();
    //OBTENIENDO DATOS DEL INPUT Y SELECT
    const codigo = inputCodigo.value;
    const registro = inputRegistro.value;
    const dni = inputDni.value;
    const nombreCliente = inputnomCliente.value;
    const celular = inputCelular.value;
    const reserva = inputReserva.value;
    const iniciaH = inputIniciaH.value;
    const finalizaH = inputFinalH.value;
    const campo = inputCampoDeportivo.value;
    let precio = 0;

    const valorHoraIngreso = returnarEnteroHora(iniciaH);
    const valorHoraSalida = returnarEnteroHora(finalizaH);
    precio = pagoHora(valorHoraIngreso,valorHoraSalida);
    
    if(alquilerDisponible(iniciaH,reserva,campo)){
        if(fechaMayorAHoy(registro)){
            if(fechaMayorARegistro(registro,reserva)){
                if(horaInicioMayorQueFinal(valorHoraIngreso,valorHoraSalida)){
                    event.preventDefault();

                    //CARGAMOS EL ALQUILER AL ARRAY
                    alquileres.push({
                        codigo: codigo,
                        registro: registro,
                        dni: dni,
                        nombreCliente: nombreCliente,
                        celular: celular,
                        reserva: reserva,
                        iniciaH: iniciaH,
                        finalizaH: finalizaH,
                        campo: campo,
                        precio: precio,
                    });
                    
                    //CARGAR ARRAY AL LOCALSTORAGE
                    localStorage.setItem("alquileres",JSON.stringify(alquileres));
                    inputCodigo.value = "";
                    inputDni.value = "";
                    inputRegistro.value = "";
                    inputReserva.value = "";
                    inputnomCliente.value = "";
                    inputCelular.value = "";
                    inputIniciaH.value= "";
                    inputFinalH.value = "";
                    inputCampoDeportivo.value = "";

                    inputBotton.onclick = () => {
                        Swal.fire({
                            title: 'SE RESERVO CORRECTAMENTE',
                            text: 'SE AGREGO CORRECTAMENTE LA RESERVA DEL CAMPO',
                            icon: 'success',
                            showConfirmButton: true
                        })
                    }
                }else{
                    inputBotton.onclick = () => {
                        Swal.fire({
                            title: 'EL INGRESO DE LA HORA FINALIZADO ES INCORRECTO',
                            text: 'DEBE INGRESAR UNA HORA MAYOR QUE LA HORA DE INGRESO',
                            icon: 'error',
                            showConfirmButton: true
                        })
                    }
                }
                
            }else{
                inputBotton.onclick = () => {
                    Swal.fire({
                        title: 'LA FECHA DE RESERVA DEBE SER MAYOR AL REGISTRO',
                        text: 'DEBE INGRESAR UNA FECHA MAYOR AL ACTUAL',
                        icon: 'error',
                        showConfirmButton: true
                    })
                }
            }
            
        }else{
            inputBotton.onclick = () => {
                Swal.fire({
                    title: 'LA FECHA DE REGISTRO DEBE SER MAYOR AL ACTUAL',
                    text: 'DEBE INGRESAR UNA FECHA MAYOR AL ACTUAL',
                    icon: 'error',
                    showConfirmButton: true
                })
            }
        }
        
        
    }else{
        inputBotton.onclick = () => {
            Swal.fire({
                title: 'ALQUILER ESTA RESERVADO',
                text: 'NO ESTA DISPONIBLE ESTA RESERVACIÓN',
                icon: 'error',
                showConfirmButton: true
            })
        }
    }
});
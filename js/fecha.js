let fecha;
let segundos;
let minutos;
let hora;

let dia;
let diaNum;
let mes;

const obtenerFecha = () => {
  fecha = new Date();

  segundos = fecha.getSeconds();
  minutos = fecha.getMinutes();
  hora = fecha.getHours();

  dia = dias[fecha.getDay()];
  diaNum = fecha.getDate();
  mes = meses[fecha.getMonth()];
}

obtenerFecha();
setInterval(obtenerFecha, 1000)
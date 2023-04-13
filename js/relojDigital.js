const relojD = () => {

  let tiempoH = `${formato(hora)} : ${formato(minutos)} : ${formato(segundos)}`
  let tiempoF = `${dia} ${diaNum}, ${mes}`

  document.getElementById('tiempo').innerHTML = tiempoH;
  document.getElementById('fecha').innerHTML = tiempoF;
}

function formato(tiempo) {
  if (tiempo < 10) {
    tiempo = '0' + tiempo;
  }
  return tiempo;
}

relojD();
setInterval(relojD, 1000)
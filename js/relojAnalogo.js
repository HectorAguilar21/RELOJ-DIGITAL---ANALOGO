const manecillaHora = document.getElementById('hora');
const manecillaMinuto = document.getElementById('minuto');
const manecillaSegundo = document.getElementById('segundo');

const relojA = () => {
  let segundosGrados = (segundos / 60) * 360;
  let minutosGrados = (minutos / 60) * 360;
  let horasGrados = (hora / 12) * 360;

  manecillaSegundo.style.transform = `rotate(${segundosGrados}deg)`
  manecillaMinuto.style.transform = `rotate(${minutosGrados}deg)`
  manecillaHora.style.transform = `rotate(${horasGrados}deg)`

}

relojA();
setInterval(relojA, 1000)
// Este programa gestiona las reservas de mesas en un restaurante.

let mesa1 = 8;
let mesa2 = 8;
let mesa3 = 8;
let mesa4 = 8;

alert("PROGRAMA DE GESTIÓN DE RESERVAS")

function preguntaMesa() {
  let mesaSolicitada = parseInt(prompt("¿En qué mesa estaría deseando ubicarse?\n- 1\n- 2\n- 3\n- 4"));
  return mesaSolicitada;
}

function preguntaLugares() {
  let cantidadSolicitada = parseInt(prompt("¿Cuántos lugares necesita?"));
  return cantidadSolicitada;
}

function bienvenida() {
  let nombre = prompt("Ingrese su nombre: ");
  alert(`Hola ${nombre}, vamos a ver si hay lugares disponibles en la mesa que deseas.`);
}

function disponibilidad(cantidadSolicitada, mesaSolicitada) {
  let mesaSeleccionada;
  
  switch (mesaSolicitada) {
    case 1:
      mesaSeleccionada = mesa1;
      break;
    case 2:
      mesaSeleccionada = mesa2;
      break;
    case 3:
      mesaSeleccionada = mesa3;
      break;
    case 4:
      mesaSeleccionada = mesa4;
      break;
    default:
      alert("Número de mesa no válido.");
      return;
  }

  if (cantidadSolicitada <= mesaSeleccionada) {
    alert(`Su reserva ha sido realizada con éxito. Hay suficientes lugares disponibles en la mesa ${mesaSolicitada}.`);
    switch (mesaSolicitada) {
      case 1:
        mesa1 -= cantidadSolicitada;
        break;
      case 2:
        mesa2 -= cantidadSolicitada;
        break;
      case 3:
        mesa3 -= cantidadSolicitada;
        break;
      case 4:
        mesa4 -= cantidadSolicitada;
        break;
    }
  } else {
    alert(`Lo sentimos, no hay suficientes lugares en la mesa ${mesaSolicitada}.`);
  }
}

bienvenida();

let seguirConsultando = true;

while (seguirConsultando) {
  let mesaElegida = preguntaMesa();
  let lugaresNecesarios = preguntaLugares();

  disponibilidad(lugaresNecesarios, mesaElegida);

  let respuesta = prompt("¿Desea realizar otra reserva? (Sí/No)").toLowerCase();
  if (respuesta !== "sí" && respuesta !== "si") {
    seguirConsultando = false;
  }
}

alert("Gracias por usar nuestro servicio de consulta de disponibilidad de mesas.");

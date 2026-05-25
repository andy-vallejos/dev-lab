function crearJugador(nombre) {
  let nombreJugador = nombre;
  let xp = 0;
  let level = Math.floor(xp / 100) + 1;

  return {
    ganarExperiencia(valor) {
      xp += valor;
      level = Math.floor(xp / 100) + 1;
    },

    verEstadisticas() {
      console.log(nombreJugador);
      console.log("XP: " + xp);
      console.log("Nivel: " + level);
    },
  };
}

let jugador = crearJugador("Andy");

jugador.verEstadisticas();

jugador.ganarExperiencia(100);
jugador.verEstadisticas();

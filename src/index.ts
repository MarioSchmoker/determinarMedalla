let btnCalcular = document.getElementById("btnCalcular");
//let llegada = document.getElementById("posicion");
btnCalcular.addEventListener("click", () => {
  let llegada: number = Number(posicion.value);

  if (llegada === 1) {
    console.log("Entregar medalla de Oro.");
  } else {
    if (llegada === 2) {
      console.log("Entregar medalla de Plata.");
    } else {
      if (llegada === 3) {
        console.log("Entregar medalla de Bronce.");
      } else {
        console.log("Entregar mención de Participación.");
      }
    }
  }
});

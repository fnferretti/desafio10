var platoDelDia = document.querySelector("#viernes");
var clases = [".ensalada", ".principal", ".acompanamiento"];
var platos = [];

clases.forEach(clase => platos.push(platoDelDia.querySelector(clase).textContent));

console.log("¡Plato del día!");
platos.forEach(plato => console.log(plato));
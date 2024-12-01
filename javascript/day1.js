// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁,
// pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones.
// Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.
// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados)
// y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

// Función para preparar los regalos
function prepareGifts(gifts) {
  // Usamos un Set para eliminar duplicados
  // Luego, convertimos el Set de nuevo a un arreglo y lo ordenamos de menor a mayor
  return [...new Set(gifts)].sort((a, b) => a - b);
}

// Ejemplo 1: Lista de regalos con algunos números duplicados
const gifts1 = [3, 1, 2, 3, 4, 2, 5];
// Preparando los regalos
const preparedGifts1 = prepareGifts(gifts1);
// Mostramos los regalos preparados en consola
console.log(preparedGifts1); // Salida esperada: [1, 2, 3, 4, 5]

// Ejemplo 2: Lista de regalos con duplicados de un solo número
const gifts2 = [6, 5, 5, 5, 5];
// Preparando los regalos
const preparedGifts2 = prepareGifts(gifts2);
// Mostramos los regalos preparados en consola
console.log(preparedGifts2); // Salida esperada: [5, 6]

// Ejemplo 3: Lista vacía
const gifts3 = [];
// Preparando los regalos
const preparedGifts3 = prepareGifts(gifts3);
// Mostramos los regalos preparados en consola
console.log(preparedGifts3); // Salida esperada: []

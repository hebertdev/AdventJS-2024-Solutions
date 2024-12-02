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



//IMPLEMENTACION EN CLASICA
console.log('----------classic----------');
function prepareGiftsClassic(gifts) {
  // Paso 1: Eliminar duplicados usando un ciclo `for`
  let uniqueGifts = [];
  for (let i = 0; i < gifts.length; i++) {
    // Solo agregamos el regalo si no está ya en el arreglo `uniqueGifts`
    if (!uniqueGifts.includes(gifts[i])) {
      uniqueGifts.push(gifts[i]);
    }
  }

  // Paso 2: Ordenar los regalos de menor a mayor utilizando un ciclo `for` (algoritmo de ordenación Bubble Sort)
  for (let i = 0; i < uniqueGifts.length; i++) {
    for (let j = 0; j < uniqueGifts.length - 1; j++) {
      // Si el elemento actual es mayor que el siguiente, los intercambiamos
      if (uniqueGifts[j] > uniqueGifts[j + 1]) {
        let temp = uniqueGifts[j];
        uniqueGifts[j] = uniqueGifts[j + 1];
        uniqueGifts[j + 1] = temp;
      }
    }
  }

  // Paso 3: Devolvemos el arreglo sin duplicados y ordenado
  return uniqueGifts;
}

// Ejemplo de uso
const gifts = [4, 1, 3, 2, 1, 5, 3];
console.log(prepareGiftsClassic(gifts));  // Resultado esperado: [1, 2, 3, 4, 5]
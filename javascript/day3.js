// Santa Claus 🎅 necesita organizar el inventario del taller para preparar la entrega de regalos.
// Recibirás un array de objetos con la información de los juguetes: su nombre, cantidad y categoría.
// La función debe:
// - Agrupar los juguetes por categoría.
// - Sumar las cantidades de los juguetes con el mismo nombre dentro de cada categoría.
// - Devolver un objeto estructurado por categorías, con los nombres de los juguetes como claves y las cantidades como valores.
// - Si el array está vacío, devolver un objeto vacío {}

// Función para organizar el inventario
function organizeInventory(inventory) {
    const organized = {};

    for (const item of inventory) {
        const { category, name, quantity } = item;

        // Si la categoría no existe, inicialízala como un objeto vacío
        if (!organized[category]) {
            organized[category] = {};
        }

        // Si el juguete ya existe en la categoría, suma la cantidad; de lo contrario, inicialízalo
        if (organized[category][name]) {
            organized[category][name] += quantity;
        } else {
            organized[category][name] = quantity;
        }
    }

    return organized;
}

// Ejemplo 1: Inventario con múltiples categorías y juguetes duplicados
const inventory1 = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];
console.log(organizeInventory(inventory1));
/*
Resultado esperado:
{
  toys: {
    doll: 5,
    car: 5
  },
  sports: {
    ball: 2,
    racket: 4
  }
}
*/

// Ejemplo 2: Inventario con una sola categoría y un juguete duplicado
const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
];
console.log(organizeInventory(inventory2));
/*
Resultado esperado:
{
  education: {
    book: 15
  },
  art: {
    paint: 3
  }
}
*/

// Ejemplo 3: Inventario vacío
const inventory3 = [];
console.log(organizeInventory(inventory3));
/*
Resultado esperado:
{}
*/


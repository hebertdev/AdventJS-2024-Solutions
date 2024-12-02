// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️.
// El marco debe cumplir las siguientes reglas:
// 1. Cada nombre debe estar alineado a la izquierda en el marco.
// 2. El marco debe tener un borde de una línea de ancho, hecho de '*', y un espacio de margen a los lados.
// 3. La anchura del marco debe adaptarse automáticamente al nombre más largo, más el margen requerido.

// Función para crear el marco mágico
function createFrame(names) {
    // Determinamos la longitud del nombre más largo
    let maxLength = Math.max(...names.map(name => name.length));
    // Calculamos el ancho del marco (nombre más largo + 2 espacios de margen)
    let frameWidth = maxLength + 2;
    // Creamos la parte superior e inferior del marco
    let topBottomBorder = '*'.repeat(frameWidth + 2);
    // Creamos el contenido del marco con cada nombre alineado a la izquierda
    let framedNames = names.map(name => {
        return `* ${name}${' '.repeat(maxLength - name.length)} *`;
    });
    // Combinamos las partes del marco en una sola cadena
    return [topBottomBorder, ...framedNames, topBottomBorder].join('\n');
}

// Ejemplo 1: Lista de nombres variados
console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
/*
Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

// Ejemplo 2: Lista con un solo nombre
console.log(createFrame(['midu']));
/*
Resultado esperado:
********
* midu *
********
*/

// Ejemplo 3: Lista con nombres de diferentes longitudes
console.log(createFrame(['a', 'bb', 'ccc']));
/*
Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******
*/


//IMPLEMENTACION EN CLASICA
console.log('----------classic----------');
function createFrameClassic(names) {
    // Paso 1: Encontrar la longitud del nombre más largo usando un for tradicional
    let maxLength = 0;
    for (let i = 0; i < names.length; i++) {
      if (names[i].length > maxLength) {
        maxLength = names[i].length;
      }
    }
  
    // Paso 2: Calcular el ancho del marco (longitud del nombre más largo + 4)
    let frameWidth = maxLength + 4;
  
    // Paso 3: Crear el borde superior e inferior
    let topBottomBorder = '';
    for (let i = 0; i < frameWidth; i++) {
      topBottomBorder += '*';
    }
  
    // Paso 4: Crear el contenido del marco con los nombres
    let frameLines = '';
    for (let i = 0; i < names.length; i++) {
      let padding = maxLength - names[i].length; // Calcular el número de espacios que faltan
      let framedName = '* ' + names[i] + ' '.repeat(padding) + ' *\n'; // Crear la línea con el nombre
      frameLines += framedName; // Agregar la línea al marco
    }
  
    // Paso 5: Combinar todo: borde superior, líneas de nombres, borde inferior
    return topBottomBorder + '\n' + frameLines + topBottomBorder;
  }
  
  // Ejemplo de uso:
  console.log(createFrameClassic(['midu', 'madeval', 'educalvolpz']));

  

# Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁,
# pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones.
# Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.
# Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) 
# y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

# Función para preparar los regalos
def prepare_gifts(gifts):
    # Usamos set() para eliminar duplicados
    # Luego, convertimos el set de nuevo a una lista y la ordenamos de menor a mayor
    return sorted(list(set(gifts)))

# Ejemplo 1: Lista de regalos con algunos números duplicados
gifts1 = [3, 1, 2, 3, 4, 2, 5]
# Preparando los regalos
prepared_gifts1 = prepare_gifts(gifts1)
# Mostramos los regalos preparados en consola
print(prepared_gifts1)  # Salida esperada: [1, 2, 3, 4, 5]

# Ejemplo 2: Lista de regalos con duplicados de un solo número
gifts2 = [6, 5, 5, 5, 5]
# Preparando los regalos
prepared_gifts2 = prepare_gifts(gifts2)
# Mostramos los regalos preparados en consola
print(prepared_gifts2)  # Salida esperada: [5, 6]

# Ejemplo 3: Lista vacía
gifts3 = []
# Preparando los regalos
prepared_gifts3 = prepare_gifts(gifts3)
# Mostramos los regalos preparados en consola
print(prepared_gifts3)  # Salida esperada: []

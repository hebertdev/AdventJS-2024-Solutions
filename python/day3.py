# Santa Claus 🎅 necesita organizar el inventario del taller para preparar la entrega de regalos.
# Recibirás una lista de diccionarios con la información de los juguetes: su nombre, cantidad y categoría.
# La función debe:
# - Agrupar los juguetes por categoría.
# - Sumar las cantidades de los juguetes con el mismo nombre dentro de cada categoría.
# - Devolver un diccionario estructurado por categorías, con los nombres de los juguetes como claves y las cantidades como valores.
# - Si la lista está vacía, devolver un diccionario vacío {}

# Función para organizar el inventario
def organize_inventory(inventory):
    organized = {}  # Diccionario para almacenar el inventario organizado

    # Iterar sobre cada item en el inventario
    for item in inventory:
        category = item['category']  # Obtener la categoría
        name = item['name']  # Obtener el nombre del juguete
        quantity = item['quantity']  # Obtener la cantidad del juguete

        # Si la categoría no existe, inicialízala como un diccionario vacío
        if category not in organized:
            organized[category] = {}

        # Si el juguete ya existe en la categoría, suma la cantidad; de lo contrario, inicialízalo
        if name in organized[category]:
            organized[category][name] += quantity
        else:
            organized[category][name] = quantity

    return organized

# Ejemplo 1: Inventario con múltiples categorías y juguetes duplicados
inventory1 = [
    {'name': 'doll', 'quantity': 5, 'category': 'toys'},
    {'name': 'car', 'quantity': 3, 'category': 'toys'},
    {'name': 'ball', 'quantity': 2, 'category': 'sports'},
    {'name': 'car', 'quantity': 2, 'category': 'toys'},
    {'name': 'racket', 'quantity': 4, 'category': 'sports'}
]
# Imprimir el resultado esperado para el ejemplo 1
print(organize_inventory(inventory1))
# Resultado esperado:
# {
#     'toys': {
#         'doll': 5,
#         'car': 5
#     },
#     'sports': {
#         'ball': 2,
#         'racket': 4
#     }
# }

# Ejemplo 2: Inventario con una sola categoría y un juguete duplicado
inventory2 = [
    {'name': 'book', 'quantity': 10, 'category': 'education'},
    {'name': 'book', 'quantity': 5, 'category': 'education'},
    {'name': 'paint', 'quantity': 3, 'category': 'art'}
]
# Imprimir el resultado esperado para el ejemplo 2
print(organize_inventory(inventory2))
# Resultado esperado:
# {
#     'education': {
#         'book': 15
#     },
#     'art': {
#         'paint': 3
#     }
# }

# Ejemplo 3: Inventario vacío
inventory3 = []
# Imprimir el resultado esperado para el ejemplo 3
print(organize_inventory(inventory3))
# Resultado esperado:
# {}

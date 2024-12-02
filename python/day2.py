# Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️.
# El marco debe cumplir las siguientes reglas:
# 1. Cada nombre debe estar alineado a la izquierda en el marco.
# 2. El marco debe tener un borde de una línea de ancho, hecho de '*', y un espacio de margen a los lados.
# 3. La anchura del marco debe adaptarse automáticamente al nombre más largo, más el margen requerido.

def create_frame(names):
    # Determinamos la longitud del nombre más largo
    max_length = max(len(name) for name in names)
    
    # Calculamos el ancho del marco (nombre más largo + 2 espacios de margen)
    frame_width = max_length + 2
    
    # Creamos la parte superior e inferior del marco
    top_bottom_border = '*' * (frame_width + 2)
    
    # Creamos el contenido del marco con cada nombre alineado a la izquierda
    framed_names = [
        f"* {name}{' ' * (max_length - len(name))} *" for name in names
    ]
    
    # Combinamos las partes del marco en una sola cadena
    return '\n'.join([top_bottom_border] + framed_names + [top_bottom_border])


# Ejemplo 1: Lista de nombres variados
print(create_frame(['midu', 'madeval', 'educalvolpz']))
'''
Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
'''

# Ejemplo 2: Lista con un solo nombre
print(create_frame(['midu']))
'''
Resultado esperado:
********
* midu *
********
'''

# Ejemplo 3: Lista con nombres de diferentes longitudes
print(create_frame(['a', 'bb', 'ccc']))
'''
Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******
'''

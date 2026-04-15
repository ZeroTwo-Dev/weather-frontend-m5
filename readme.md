# Módulo 3 – App del Clima (Teyvat Edition)
* Estudiante: César Ossa
* Repositorio: https://github.com/ZeroTwo-Dev/weather-frontend-m3.git

# Descripción
Esta es la evolución de mi proyecto de la App del Clima.
Mantengo la temática de Genshin Impact (Teyvat),
pero ahora el enfoque fue mejorar la calidad del código CSS,
organizando mejor los estilos y preparando el prpyecto para algo
más profesional.

# Mejoras Técnicas

**SASS:** Dividí todo en las carpetas "Base, Component, Layout".
**Metología BEM:** Usé la clase "place-card__nombre" para que el 
HTML y CSS se entiendan mejor.
**Bootstrap 4:** Sigo usando la grilla de Bootstrap para que las regiones de Teyvat se vean bien tanto en celular como en PC.
**Simulación de API:** Decidí crear un archivo "regiones.json"
con toda la información de los climas, debido a que no existe ninguna
API del clima relacionada a Genshin Impact. 

# Estructura del Proyecto:
**/scss:** Archivos SASS (variables, place-card y layout).
**/css:** Archivo main.css con generación automática al compilar todos los archivos.
**/js:** JavaScript mostrando las regiones.
**regiones.json:** Datos del clima de las diferentes naciones de Teyvat.
 
# Tecnologías Utilizadas
**HTML5 Semántico:** Estructura clara y accesible.
**Bootstrap 5:** Diseño responsivo y componentes.
**JavaScript:** Manipulación e interacción del DOM e interacción.
**Git/GitHub:** Control de versiones.

## Instrucciones de Ejecución
1. Clonar el repositorio.
2. Abrir el archivo `index.html` en cualquier navegador.
# Módulo 4 – App del Clima (Teyvat Edition)
* Estudiante: César Ossa
* Repositorio: https://github.com/ZeroTwo-Dev/weather-frontend-m4.git

# Descripción
Esta entrega marca la fase de Lógica y Estadísticas del proyecto. 
La aplicación ya no solo muestra información visual, 
sino que procesa datos climáticos de las naciones de Teyvat de forma dinámica. 
Se modificó contenido del HTML para dar paso a una interfaz generada íntegramente mediante JavaScript.

# Mejoras Técnicas
**Modelado de Datos Dinámicos:** Se implementó un arreglo de objetos (regiones) que contiene la información actual 
y el pronóstico semanal de 12 locaciones, incluyendo IDs únicos y estados climáticos específicos.
**Lógica de Estadísticas:** Se desarrollaron funciones que recorren los arreglos de pronóstico mediante ciclos para calcular: "Temperatura mínima y máxima de la semana".
**Promedio de temperatura semanal y conteo de climas:** Algoritmo que identifica cuántos días de la semana corresponden a cada estado (Soleado, Tormenta, etc.). 
**Generación de Mensajes Condicionales:** Implementación de lógica if/else para generar recomendaciones personalizadas al viajero basadas en el promedio de temperatura como alertas de frío extremo en Snezhnaya o calor en Natlan.
**Manipulación Avanzada del DOM:** Uso de plantillas para inyectar dinámicamente tanto la lista de regiones en el Home como los detalles técnicos en la vista de Detalle.

# Estructura del Proyecto:
**/assets/scss:** Arquitectura SASS (Base, Components, Layout) para un mantenimiento escalable.
**/assets/js/app.js:** El "motor" de la aplicación. Contiene el arreglo de objetos, las funciones de búsqueda y los algoritmos de cálculo estadístico.
**index.html:** Estructura base que sirve como contenedor para la inyección de cards.
**detalle.html:** Interfaz dinámica que recibe parámetros por URL para mostrar la información de la región seleccionada

# Estadísticas Calculadas
**Temperaturas Extremas:** Identifica los picos máximos y mínimos del pronóstico.
**Promedio Semanal:** Calcula la media aritmética de las temperaturas máximas.
**Resumen de Aventurero:** Un mensaje de advertencia o sugerencia que cambia según el clima predominante.

# Tecnologías Utilizadas
**JavaScript:** Ciclos, condicionales y manipulación de arreglos.
**Bootstrap:** Sistema de grillas responsivas (Grid System) y componentes de interfaz.
**SASS:** Preprocesador de CSS con metodología BEM.
**Git/GitHub:** Flujo de trabajo incremental con commits descriptivos.

## Instrucciones de Ejecución
1. Clonar el repositorio.
2. Abrir el archivo `index.html` en cualquier navegador.
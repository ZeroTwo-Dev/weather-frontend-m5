# Módulo 5 – App del Clima (Teyvat World Weather API)
* Estudiante: César Ossa
* Repositorio: https://github.com/ZeroTwo-Dev/weather-frontend-m5.git

# 1. Descripción y Propósito
En esta quinta etapa, la aplicación ha evolucionado hacia una arquitectura robusta basada en POO 
(Programación Orientada a Objetos). Se ha eliminado la dependencia de datos locales estáticos 
para implementar un sistema de consumo de datos asíncronos mediante una API personalizada que simula las condiciones atmosféricas de las 12 regiones de Teyvat.

# 2. Estructura de Clases (POO)
Siguiendo los requisitos técnicos, se implementó una arquitectura modular:
**WeatherApp:** La clase maestra que orquestra la aplicación. 
Gestiona el estado de los lugares, coordina las llamadas a la API y decide qué vista (Home o Detalle) renderizar en el DOM.
**ApiClient:** Clase especializada en la comunicación externa. 
Utiliza fetch y async/await para obtener los recursos JSON de forma asíncrona.
**UIHandler:** Encargada exclusivamente de la manipulación del DOM, asegurando una separación clara entre la lógica de negocio y la interfaz.

# 3. Consumo de API y Asincronía
La aplicación ahora consume datos desde un endpoint dinámico (simulado/propio):
**Gestión de Carga:** Se implementaron estados de "Cargando..." para mejorar la UX mientras se reciben los datos.
**Manejo de Errores:** El sistema cuenta con bloques try/catch que muestran mensajes amigables en la interfaz en caso de fallos de conexión.
**Asincronía Total:** Uso extensivo de async/await para garantizar que la interfaz no se bloquee durante las peticiones.

# 4. Optimizaciones de Alto Impacto
Para esta entrega se realizaron mejoras críticas de rendimiento y diseño visual:
**Optimización de Recursos (Íconos):** Se sustituyeron imágenes pesadas por una implementación avanzada de Bootstrap Icons 
con colores semánticos dinámicos vía CSS (Atributos data-*), reduciendo las peticiones HTTP y el peso total de carga.
**Glassmorphism & Difuminación:** Se aplicó un diseño de "vidrio esmerilado" en las tarjetas y un fondo con filter: blur() regulado mediante pseudo-elementos (::before), logrando una estética moderna sin sacrificar legibilidad.
**Barra de Navegación Temática:** Inserción de íconos elementales centrados con efectos de brillo 
(drop-shadow) y escalado interactivo.

# 5. Estadísticas y Alertas de Clima
Los cálculos se realizan ahora sobre los datos frescos obtenidos de la API:
**Algoritmos de Procesamiento:** Cálculo automático de promedios, máximas y mínimas semanales.
**Sistema de Alertas Dinámicas:** Se activan avisos especiales 
(ej. "Alerta de Calor" en Natlan o "Tormenta Electrizante" en Inazuma) basados en reglas lógicas aplicadas al flujo de datos asíncronos.

## 6. Tecnologías y Funcionalidades ES6+
**JavaScript:** Clases, Arrow Functions, Template Literals, Desestructuración y Módulos.
**CSS/SASS:** Filtros avanzados, transformaciones y variables para temas dinámicos.
**Git:** Flujo de trabajo con más de 3 commits descriptivos para demostrar desarrollo incremental.

## 7. Instrucciones de Ejecución
Clonar el repositorio.
Para el correcto funcionamiento de las funciones asíncronas (fetch), el proyecto no debe abrirse directamente como un archivo local.
Abrir la carpeta del proyecto en Visual Studio Code.
Ejecutar mediante la extensión Open with Live Server (o similar) en index.html (click derecho) para iniciar un servidor local.
Navegar por la aplicación desde la dirección local proporcionada (ej. http://127.0.0.1:5500).
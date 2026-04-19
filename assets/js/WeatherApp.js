class WeatherApp {
    constructor() {
        this.urlAPI = './assets/data/clima.json';
        this.regiones = [];
        this.cargando = true;
    }
  async obtenerDatos() {
    try {
        const respuesta = await fetch(this.urlAPI); 
        this.regiones = await respuesta.json(); 
        console.log("Datos cargados:", this.regiones); 
    } catch (error) {
        console.error(error); 
        this.mostrarError("No se pudieron cargar los datos de Teyvat.");
    }
}
    calcularEstadisticas(pronostico) {
        let max = -Infinity;
        let min = Infinity;
        let suma = 0;
        let conteoClimas = {};

        pronostico.forEach(dia => {
            if (dia.max > max) max = dia.max;
            if (dia.min < min) min = dia.min;
            suma += (dia.max + dia.min) / 2;
            
                conteoClimas[dia.estado] = (conteoClimas[dia.estado] || 0) + 1;
        });

        const promedio = (suma / pronostico.length).toFixed(1);

        return { max, min, promedio, conteoClimas };
    }

      generarAlerta(stats) {
        if (stats.promedio > 25) return "🔥 Alerta de Calor: El poder de la Nación del Fuego es fuerte esta semana."; 
        if (stats.promedio < 0) return "❄️ Alerta de Frío: Acércate a un punto de calor.";
        if (stats.conteoClimas['Lluvia'] > 2) return "🌧️ Alerta de Lluvia: Prepárate para reacciones Hydro."; 
        return "✨ Clima estable: Ideal para explorar.";
    }

    renderHome(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    contenedor.innerHTML = this.regiones.map(reg => `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card place-card h-100">
                <div class="card-body text-center">
                   <i class="bi ${reg.icono} weather-icon" data-clima="${reg.estadoActual}"></i>
                    <h5 class="place-card__name">${reg.nombre}</h5>
                    <p class="place-card__temp">${reg.tempActual}°C</p>
                    <p class="place-card__status badge bg-secondary">${reg.estadoActual}</p>
                    
                    <div class="mt-2 small text-muted">
                        <span class="me-2"><i class="bi bi-droplet"></i> ${reg.humedad}</span>
                        <span><i class="bi bi-wind"></i> ${reg.viento}</span>
                    </div>

                    <a href="detalle.html?id=${reg.id}" class="btn btn-primary mt-3">Ver Detalles</a>
                </div>
            </div>
        </div>
    `).join('');
}

    mostrarError(mensaje) {
        const msgDiv = document.getElementById('mensaje-app');
        if (msgDiv) msgDiv.innerHTML = `<div class="alert alert-danger">${mensaje}</div>`;
    }
}


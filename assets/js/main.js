const app = new WeatherApp();

document.addEventListener('DOMContentLoaded', async () => {
    await app.obtenerDatos();

    app.renderHome('contenedor-regiones'); 

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    if (id) {
        const region = app.regiones.find(r => r.id === id);
        if (region) {
            const stats = app.calcularEstadisticas(region.pronosticoSemanal);
            const alerta = app.generarAlerta(stats);
            
            const nombreElem = document.getElementById('nombre-region');
            const alertaTexto = document.getElementById('alerta-texto');
            const alertaDiv = document.getElementById('seccion-alerta');

            if (nombreElem) nombreElem.innerText = region.nombre;
            
            if (alertaTexto && alertaDiv) {
                alertaTexto.innerText = alerta;
                alertaDiv.classList.remove('d-none');
            }
            
            if (document.getElementById('temp-promedio')) {
                document.getElementById('temp-promedio').innerText = `${stats.promedio}°C`;
                document.getElementById('temp-maxima').innerText = `${stats.max}°C`;
                document.getElementById('temp-minima').innerText = `${stats.min}°C`;
            }
        }
    }
});
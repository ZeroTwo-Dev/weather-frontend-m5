const regiones = [
    { 
        id: 1, 
        nombre: "Mondstadt", 
        tempActual: 22, 
        estadoActual: "Despejado", 
        icono: "bi-sun",
        pronosticoSemanal: [
            { dia: "Lunes", min: 15, max: 25, estado: "Soleado" },
            { dia: "Martes", min: 14, max: 24, estado: "Nublado" },
            { dia: "Miércoles", min: 16, max: 26, estado: "Soleado" },
            { dia: "Jueves", min: 12, max: 20, estado: "Lluvia" },
            { dia: "Viernes", min: 15, max: 23, estado: "Soleado" },
            { dia: "Sábado", min: 17, max: 25, estado: "Soleado" },
            { dia: "Domingo", min: 16, max: 24, estado: "Nublado" }
        ]
    },
    { 
        id: 2, 
        nombre: "Espinadragón", 
        tempActual: -15, 
        estadoActual: "Ventisca", 
        icono: "bi-snow",
        pronosticoSemanal: [
            { dia: "Lunes", min: -20, max: -10, estado: "Nieve" },
            { dia: "Martes", min: -22, max: -12, estado: "Ventisca" },
            { dia: "Miércoles", min: -18, max: -8, estado: "Nieve" },
            { dia: "Jueves", min: -25, max: -15, estado: "Tormenta" },
            { dia: "Viernes", min: -19, max: -9, estado: "Nieve" },
            { dia: "Sábado", min: -15, max: -5, estado: "Nublado" },
            { dia: "Domingo", min: -17, max: -7, estado: "Nieve" }
        ]
    },
    { 
        id: 3, 
        nombre: "Puerto de Liyue", 
        tempActual: 28, 
        estadoActual: "Soleado", 
        icono: "bi-brightness-high",
        pronosticoSemanal: [
            { dia: "Lunes", min: 20, max: 30, estado: "Soleado" },
            { dia: "Martes", min: 19, max: 29, estado: "Despejado" },
            { dia: "Miércoles", min: 21, max: 31, estado: "Caluroso" },
            { dia: "Jueves", min: 18, max: 27, estado: "Nublado" },
            { dia: "Viernes", min: 20, max: 29, estado: "Soleado" },
            { dia: "Sábado", min: 22, max: 32, estado: "Soleado" },
            { dia: "Domingo", min: 21, max: 30, estado: "Despejado" }
        ]
    },
    { 
        id: 4, 
        nombre: "Inazuma", 
        tempActual: 24, 
        estadoActual: "Tormentoso", 
        icono: "bi-cloud-lightning",
        pronosticoSemanal: [
            { dia: "Lunes", min: 18, max: 26, estado: "Tormenta" },
            { dia: "Martes", min: 17, max: 25, estado: "Lluvia" },
            { dia: "Miércoles", min: 19, max: 27, estado: "Tormenta" },
            { dia: "Jueves", min: 16, max: 22, estado: "Lluvia Fuerte" },
            { dia: "Viernes", min: 18, max: 25, estado: "Nublado" },
            { dia: "Sábado", min: 20, max: 28, estado: "Soleado" },
            { dia: "Domingo", min: 19, max: 26, estado: "Tormenta" }
        ]
    },
    { 
        id: 5, 
        nombre: "Isla Seirai", 
        tempActual: 22, 
        estadoActual: "Electrificado", 
        icono: "bi-lightning-charge",
        pronosticoSemanal: [
            { dia: "Lunes", min: 20, max: 24, estado: "Truenos" },
            { dia: "Martes", min: 19, max: 23, estado: "Tormenta" },
            { dia: "Miércoles", min: 21, max: 25, estado: "Electrificado" },
            { dia: "Jueves", min: 18, max: 22, estado: "Truenos" },
            { dia: "Viernes", min: 20, max: 24, estado: "Tormenta" },
            { dia: "Sábado", min: 22, max: 26, estado: "Electrificado" },
            { dia: "Domingo", min: 21, max: 25, estado: "Tormenta" }
        ]
    },
    { 
        id: 6, 
        nombre: "Bosque Avidya", 
        tempActual: 26, 
        estadoActual: "Lluvia", 
        icono: "bi-cloud-rain",
        pronosticoSemanal: [
            { dia: "Lunes", min: 22, max: 28, estado: "Húmedo" },
            { dia: "Martes", min: 21, max: 27, estado: "Lluvia" },
            { dia: "Miércoles", min: 23, max: 29, estado: "Nublado" },
            { dia: "Jueves", min: 20, max: 25, estado: "Lluvia Fuerte" },
            { dia: "Viernes", min: 22, max: 28, estado: "Húmedo" },
            { dia: "Sábado", min: 24, max: 30, estado: "Soleado" },
            { dia: "Domingo", min: 23, max: 29, estado: "Lluvia" }
        ]
    },
    { 
        id: 7, 
        nombre: "Desierto de Hadramavet", 
        tempActual: 42, 
        estadoActual: "Tormenta de Arena", 
        icono: "bi-wind",
        pronosticoSemanal: [
            { dia: "Lunes", min: 30, max: 45, estado: "Calor Extremo" },
            { dia: "Martes", min: 28, max: 43, estado: "Arena" },
            { dia: "Miércoles", min: 32, max: 46, estado: "Calor Extremo" },
            { dia: "Jueves", min: 25, max: 40, estado: "Viento" },
            { dia: "Viernes", min: 29, max: 44, estado: "Arena" },
            { dia: "Sábado", min: 31, max: 47, estado: "Calor Extremo" },
            { dia: "Domingo", min: 30, max: 45, estado: "Despejado" }
        ]
    },
    { 
        id: 8, 
        nombre: "Corte de Fontaine", 
        tempActual: 20, 
        estadoActual: "Nublado", 
        icono: "bi-cloud-sun",
        pronosticoSemanal: [
            { dia: "Lunes", min: 16, max: 22, estado: "Nublado" },
            { dia: "Martes", min: 15, max: 21, estado: "Lluvia Ligera" },
            { dia: "Miércoles", min: 17, max: 23, estado: "Despejado" },
            { dia: "Jueves", min: 14, max: 20, estado: "Lluvia" },
            { dia: "Viernes", min: 16, max: 22, estado: "Nublado" },
            { dia: "Sábado", min: 18, max: 24, estado: "Soleado" },
            { dia: "Domingo", min: 17, max: 23, estado: "Nublado" }
        ]
    },
    { 
        id: 9, 
        nombre: "Snezhnaya", 
        tempActual: -30, 
        estadoActual: "Hielo Eterno", 
        icono: "bi-cloud-snow-fill",
        pronosticoSemanal: [
            { dia: "Lunes", min: -35, max: -25, estado: "Frío Extremo" },
            { dia: "Martes", min: -38, max: -28, estado: "Nieve" },
            { dia: "Miércoles", min: -32, max: -22, estado: "Gélido" },
            { dia: "Jueves", min: -40, max: -30, estado: "Ventisca" },
            { dia: "Viernes", min: -34, max: -24, estado: "Nieve" },
            { dia: "Sábado", min: -30, max: -20, estado: "Nublado" },
            { dia: "Domingo", min: -33, max: -23, estado: "Gélido" }
        ]
    },
    { 
        id: 10, 
        nombre: "Gran Volcán de Natlan", 
        tempActual: 38, 
        estadoActual: "Cenizas", 
        icono: "bi-fire",
        pronosticoSemanal: [
            { dia: "Lunes", min: 32, max: 40, estado: "Cenizas" },
            { dia: "Martes", min: 30, max: 38, estado: "Calor" },
            { dia: "Miércoles", min: 34, max: 42, estado: "Lava" },
            { dia: "Jueves", min: 31, max: 39, estado: "Cenizas" },
            { dia: "Viernes", min: 33, max: 41, estado: "Calor" },
            { dia: "Sábado", min: 35, max: 44, estado: "Lava" },
            { dia: "Domingo", min: 34, max: 42, estado: "Cenizas" }
        ]
    },
    { 
        id: 11, 
        nombre: "Nod Krai", 
        tempActual: 15, 
        estadoActual: "Lluvia Inversa", 
        icono: "bi-cloud-upload",
        pronosticoSemanal: [
            { dia: "Lunes", min: 12, max: 18, estado: "Extraño" },
            { dia: "Martes", min: 11, max: 17, estado: "Lluvia" },
            { dia: "Miércoles", min: 13, max: 19, estado: "Niebla" },
            { dia: "Jueves", min: 10, max: 16, estado: "Inverso" },
            { dia: "Viernes", min: 12, max: 18, estado: "Extraño" },
            { dia: "Sábado", min: 14, max: 20, estado: "Nublado" },
            { dia: "Domingo", min: 13, max: 19, estado: "Niebla" }
        ]
    },
    { 
        id: 12, 
        nombre: "Celestia", 
        tempActual: 10, 
        estadoActual: "Etéreo", 
        icono: "bi-magic",
        pronosticoSemanal: [
            { dia: "Lunes", min: 8, max: 12, estado: "Calmo" },
            { dia: "Martes", min: 7, max: 11, estado: "Etéreo" },
            { dia: "Miércoles", min: 9, max: 13, estado: "Brillante" },
            { dia: "Jueves", min: 6, max: 10, estado: "Calmo" },
            { dia: "Viernes", min: 8, max: 12, estado: "Etéreo" },
            { dia: "Sábado", min: 10, max: 14, estado: "Divino" },
            { dia: "Domingo", min: 9, max: 13, estado: "Brillante" }
        ]
    }
];

function buscarRegion(id) {
    return regiones.find(r => r.id == id);
}

function obtenerEstadisticas(pronostico) {
    let sumaMax = 0;
    let tempMaximaAbsoluta = -100;
    let tempMinimaAbsoluta = 100;

    for (let i = 0; i < pronostico.length; i++) {
        let dia = pronostico[i];
        sumaMax += dia.max;

        if (dia.max > tempMaximaAbsoluta) tempMaximaAbsoluta = dia.max;
        if (dia.min < tempMinimaAbsoluta) tempMinimaAbsoluta = dia.min;
    }

    let promedio = (sumaMax / pronostico.length).toFixed(1);

        let mensaje = "El clima en Teyvat está cambiando, Viajero/a, ¡Prepárate para la aventura!";
    if (promedio > 20) mensaje = "Hace mucho calor, ideal para refrescarse en las ¡Playas de Natlan!";
    if (promedio < 5) mensaje = "Clima frío detectado, por favor toma las precauciones necesarias antes de salir de tu posada.";

    return { promedio, max: tempMaximaAbsoluta, min: tempMinimaAbsoluta, mensaje };
}

const contenedorHome = document.getElementById('contenedor-regiones');
if (contenedorHome) {
    regiones.forEach(r => {
        contenedorHome.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card place-card shadow-sm h-100">
                    <div class="card-body text-center">
                        <i class="bi ${r.icono} display-4 text-primary"></i>
                        <h5 class="place-card__name mt-3">${r.nombre}</h5>
                        <p class="place-card__temp">${r.tempActual}°C</p>
                        <a href="detalle.html?id=${r.id}" class="btn btn-outline-primary">Ver Detalles</a>
                    </div>
                </div>
            </div>
        `;
    });
}

const contenedorDetalle = document.getElementById('detalle-contenido');
if (contenedorDetalle) {
    const urlParams = new URLSearchParams(window.location.search);
    const idRegion = urlParams.get('id');
    const region = buscarRegion(idRegion);

    if (region) {
        const stats = obtenerEstadisticas(region.pronosticoSemanal);
        
    contenedorDetalle.innerHTML = `
    <div class="col-12">
        <h2 class="text-center mb-5 text-white shadow-text">${region.nombre}</h2>
    </div>
    
    <div class="col-12 col-lg-6">
        <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h4 class="card-title mb-4"><i class="bi bi-calendar3"></i> Pronóstico Semanal</h4>
                <ul class="list-group list-group-flush">
                    ${region.pronosticoSemanal.map(d => `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span class="fw-bold">${d.dia}</span>
                            <span>${d.min}° / ${d.max}° - <small class="text-muted">${d.estado}</small></span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    </div>

    <div class="col-12 col-lg-6">
        <div class="card h-100 shadow-sm border-info">
            <div class="card-body d-flex flex-column">
                <h4 class="card-title mb-4"><i class="bi bi-graph-up"></i> Estadísticas Semanales</h4>
                <div class="stats-content flex-grow-1">
                    <p class="mb-2"><strong>Promedio Máx:</strong> <span class="badge bg-primary fs-6">${stats.promedio}°C</span></p>
                    <p class="mb-2"><strong>Temperatura Máxima:</strong> <span class="text-danger fw-bold">${stats.max}°C</span></p>
                    <p class="mb-4"><strong>Temperatura Mínima:</strong> <span class="text-info fw-bold">${stats.min}°C</span></p>
                    
                    <div class="alert alert-light border mt-auto">
                        <i class="bi bi-info-circle-fill text-info"></i> 
                        <span class="fst-italic">"${stats.mensaje}"</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}
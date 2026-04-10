const regiones = [
    { id: 1, nombre: "Mondstadt", temp: "22°C", estado: "Despejado", icono: "bi-sun", humedad: "40%", viento: "10 km/h" },
    { id: 2, nombre: "Espinadragón", temp: "-15°C", estado: "Ventisca", icono: "bi-snow", humedad: "15%", viento: "40 km/h" },
    { id: 3, nombre: "Puerto de Liyue", temp: "28°C", estado: "Soleado", icono: "bi-brightness-high", humedad: "55%", viento: "12 km/h" },
    { id: 4, nombre: "Inazuma", temp: "24°C", estado: "Tormentoso", icono: "bi-cloud-lightning", humedad: "75%", viento: "30 km/h" },
    { id: 5, nombre: "Isla Seirai (Inazuma)", temp: "22°C", estado: "Electrificado", icono: "bi-lightning-charge", humedad: "70%", viento: "35 km/h" },
    { id: 6, nombre: "Bosque Avidya", temp: "26°C", estado: "Lluvia", icono: "bi-cloud-rain", humedad: "85%", viento: "5 km/h" },
    { id: 7, nombre: "Desierto de Hadramavet", temp: "42°C", estado: "Tormenta de Arena", icono: "bi-wind", humedad: "5%", viento: "60 km/h" },
    { id: 8, nombre: "Corte de Fontaine", temp: "20°C", estado: "Nublado", icono: "bi-cloud-sun", humedad: "60%", viento: "15 km/h" },
    { id: 9, nombre: "Snezhnaya", temp: "-30°C", estado: "Hielo Eterno", icono: "bi-cloud-snow-fill", humedad: "10%", viento: "50 km/h" },
    { id: 10, nombre: "Gran Volcán de Tollan (Natlan)", temp: "38°C", estado: "Cenizas", icono: "bi-fire", humedad: "12%", viento: "20 km/h" },
    { id: 11, nombre: "Nod Krai", temp: "15°C", estado: "Lluvia Inversa", icono: "bi-cloud-upload", humedad: "90%", viento: "10 km/h" },
    { id: 12, nombre: "Celestia", temp: "10°C", estado: "Etéreo", icono: "bi-magic", humedad: "0%", viento: "100 km/h" }
    
];

if (document.getElementById('contenedor-ciudades')) {
    const contenedor = document.getElementById('contenedor-ciudades');
    regiones.forEach(r => {
        contenedor.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3">
                <article class="card h-100 shadow border-0 text-center p-3 card-hover">
                    <i class="bi ${r.icono} display-4 text-info"></i>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${r.nombre}</h5>
                        <p class="fs-3 text-secondary">${r.temp}</p>
                        <button onclick="verDetalle(${r.id})" class="btn btn-info text-white w-100">Ver Detalles</button>
                    </div>
                </article>
            </div>
        `;
    });
}

function verDetalle(id) {
    window.location.href = `detalle.html?id=${id}`;
}


if (document.getElementById('detalle-region')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const r = regiones.find(item => item.id == id);
    const div = document.getElementById('detalle-region');

    if (r) {
        div.innerHTML = `
            <div class="col-md-8 col-lg-6">
                <div class="card border-0 shadow-lg text-center p-5">
                    <h2 class="display-4 fw-bold text-primary">${r.nombre}</h2>
                    <i class="bi ${r.icono} display-1 text-warning my-4"></i>
                    <p class="h1">${r.temp}</p>
                    <span class="badge bg-secondary mb-4">${r.estado}</span>
                    <div class="row g-2 text-muted">
                        <div class="col-6">Humedad: ${r.humedad}</div>
                        <div class="col-6">Viento: ${r.viento}</div>
                    </div>
                    <hr>
                    <h5 class="text-start">Pronóstico Semanal:</h5>
                    <ul class="list-group list-group-flush text-start">
                        <li class="list-group-item">Lunes: ${r.estado}</li>
                        <li class="list-group-item">Martes: ${r.temp}</li>
                        <li class="list-group-item">Miércoles: Estable</li>
                    </ul>
                </div>
            </div>
        `;
    }
}
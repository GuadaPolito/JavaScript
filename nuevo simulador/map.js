//MAPA

var map = L.map('map').setView([-38.416097, -63.6], 4.3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// ICONO BUCEO

var customIcon = new L.Icon({
    iconUrl: 'bandera.png',
    iconSize: [30, 30],
    iconAnchor: [25, 50]
  });


// LUGARES BUCEO

//Bariloche
L.marker([-41.1282023, -71.4099539], {icon: customIcon}).addTo(map)
    .bindPopup('Lagos Moreno y Nahuel Huapi, Bariloche, Río Negro<br> Easily customizable.')
    .openPopup();

//Calamuchita
L.marker([-32.2394722,-64.6875594], {icon: customIcon}).addTo(map)
    .bindPopup('Embalse Cerro Pelado, Córdoba<br> Easily customizable.')
    .openPopup();

//Esteros del Iberá
L.marker([-28.2215015,-57.6136426], {icon: customIcon}).addTo(map)
    .bindPopup('Esteros del Iberá, Corrientes<br> Easily customizable.')
    .openPopup();

//La Florida, San Luis
L.marker([-33.1106131, -66.0472593], {icon: customIcon}).addTo(map)
    .bindPopup('Dique La Florida, San Luis<br> Easily customizable.')
    .openPopup();

//La Rioja
L.marker([-27.9129104, -68.824385], {icon: customIcon}).addTo(map)
    .bindPopup('Cráter Corona del Inca, La Rioja<br> Easily customizable.')
    .openPopup();

//Lago Futalaufquen
L.marker([-42.8166504,-71.7254218], {icon: customIcon}).addTo(map)
    .bindPopup('Lago Futalaufquen, Chubut<br> Easily customizable.')
    .openPopup();

//Malargue
L.marker([-35.1599749, -69.8705985], {icon: customIcon}).addTo(map)
    .bindPopup('Laguna de la Niña Encantada, Malargue, Mendoza<br> Easily customizable.')
    .openPopup();

//Mar del Plata
L.marker([-38.0174106, -57.6705735], {icon: customIcon}).addTo(map)
    .bindPopup('Mar del Plata, Bs. As.<br> Easily customizable.')
    .openPopup();

//Potrerillos
L.marker([-32.95, -69.183], {icon: customIcon}).addTo(map)
    .bindPopup('Potrerillos, Mendoza<br> Easily customizable.')
    .openPopup();

//Penísula de Valdés
L.marker([-42.4745729,-64.4136], {icon: customIcon}).addTo(map)
    .bindPopup('Península de Valdés, Chubut<br> Easily customizable.')
    .openPopup();

//San Juan
L.marker([-31.5192064, -68.8199947], {icon: customIcon}).addTo(map)
    .bindPopup('Dique Punta Negra, San Juan<br> Easily customizable.')
    .openPopup();

//San Rafael
L.marker([-34.6175, -68.3356], {icon: customIcon}).addTo(map)
    .bindPopup('San Rafael, Mendoza<br> Easily customizable.')
    .openPopup();

//Tandil
L.marker([-37.3464917,-58.9726138], {icon: customIcon}).addTo(map)
    .bindPopup('Cantera El Carpincho, Tandil, Bs. As.<br> Easily customizable.')
    .openPopup();

//Ushuaia
L.marker([-54.8064, -68.305], {icon: customIcon}).addTo(map)
    .bindPopup('Ushuaia<br> Easily customizable.')
    .openPopup();

//Villa Traful
L.marker([-40.6538913, -71.3976323], {icon: customIcon}).addTo(map)
    .bindPopup('Bosque Sumergido, Villa Traful, Neuquen<br> Easily customizable.')
    .openPopup();





let url = window.location.search
let parametro = new URLSearchParams(url)
let idEvento = parametro.get("serch")

// con estos paso que hice es para acceder desde la url al id de las card y luego compararlo
// con el resto de id(palabras textuales es para conparar el id desde el navegador)

let comparacion = data.events.find((card) => card._id == idEvento)

function crearTargeta(tarjeta){
   
    return `  <div class="card" id="targeta-detalle">
    <img  id="imagen-detalle" src="${tarjeta.image}" class="card-img-top" alt="food_fair">
    <div class="card-body">
      <h5 class="card-title">${tarjeta.name}</h5>
      <p class="card-text">${tarjeta.description} </p>
      <p class="card-text"><strong>${tarjeta.date}</strong> </p>
      <p class="card-text"><strong>${tarjeta.category}</strong> </p>
      <p class="card-text"><strong>${tarjeta.place}</strong></p>
      <p class="card-text"><strong>${tarjeta.capacity}</strong></p>
      <p class="card-text"><strong>${tarjeta.assistance || tarjeta.estimate}</strong></p>
      <p class="card-text"><strong>${tarjeta.price}</strong></p> 
    </div>
  </div>`
}
document.getElementById("targeta-detalle").innerHTML = crearTargeta(comparacion)


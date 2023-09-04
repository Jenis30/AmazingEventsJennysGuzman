// mi parametro en este caso es un objeto
// funcion es un mini programa que ejecuta un bloque de codigo

function nuevasTarjetas(objetoTarjeta) {
    return `
    <div class="card" style="width: 16rem ">
<img src="${objetoTarjeta.image}" class="card-img-top" alt="food_fair">
<div class="card-body">
  <h5 class="card-title">${objetoTarjeta.name}</h5>
  <p class="card-text">${objetoTarjeta.description}</p>
  <div class="contain-detailes">
    <h3>$ ${objetoTarjeta.price}</h3>
    <a href="./assets/pages/details.html" class="btn btn-dark">details</a>
  </div>
</div>
</div>`
}

// aqui estay almacenando  la informacion de todas las tarjetas
// tarjetas data es un arrai
function totalTarjetas(tarjetasData) {
    // con esta funcion nos devuelve todo un string

    let totalTarjetas = ""   //  let total tarjetas equivale a un string vacio donde se guarda  cada una de las tarjetas
    //  cada ves que el bucle se reitere o de la vuelta
    for (let tarjeta of tarjetasData) {
        totalTarjetas = totalTarjetas + nuevasTarjetas(tarjeta)
    }
    return totalTarjetas
}
let informeTotal = totalTarjetas(data.events)


function mostrarTarjetas(verTotalidadTarjetas, id) {
    let containerInfo = document.getElementById(id)
    containerInfo.innerHTML = verTotalidadTarjetas
}
// aqui es donde ejecuto la funcion con la informacion real
mostrarTarjetas(informeTotal, "container-tarjetas")






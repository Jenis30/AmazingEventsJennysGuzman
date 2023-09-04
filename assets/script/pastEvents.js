function nuevasTarjetas(objetoTarjeta){
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

// la funcion es como por decir que es un molde 

function filtrar (listaTarjeta){ 
    let upcoming= []
    for (let tarjeta of listaTarjeta) {
     if (tarjeta.date < data.currentDate){
        upcoming.push(tarjeta)
     }
    }
    return upcoming
}
let listaUpcoming = filtrar (data.events) 



function totalTarjetas(tarjetasData){  
    let totalTarjetas="" 
for (let tarjeta of tarjetasData ) {
   totalTarjetas = totalTarjetas + nuevasTarjetas(tarjeta) 
}
return totalTarjetas
}
let informeTotal = totalTarjetas(listaUpcoming)


function mostrarTarjetas(verTotalidadTarjetas , id){
    let containerInfo = document.getElementById(id)
    containerInfo.innerHTML = verTotalidadTarjetas
}
// aqui es donde ejecuto la funcion con la informacion real
mostrarTarjetas(informeTotal , "container-events")

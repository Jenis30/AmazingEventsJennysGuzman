 function filtrar (listaTarjeta){ 
    let upcoming= []
    for (let tarjeta of listaTarjeta) {
     if (tarjeta.date >= data.currentDate){
        upcoming.push(tarjeta)
     }
    }
    return upcoming
}

let listaUpcoming = filtrar (data.events) 



let containerTarjeta = document.getElementById("container-tarjetas")
let containerSearch = document.getElementById("inputSearch")
let containerCheckbox = document.getElementById("container-check")
function nuevasTarjetas(objetoTarjeta) {
  return `
    <div class="card" style="width: 16rem ">
    <img src="${objetoTarjeta.image}" class="card-img-top" alt="food_fair">
    <div class="card-body">
      <h5 class="card-title">${objetoTarjeta.name}</h5>  
      <p class="card-text">${objetoTarjeta.description}</p>
      <div class="contain-detailes">
        <h3>$ ${objetoTarjeta.price}</h3>
        <a href="./details.html?serch=${objetoTarjeta._id}" class="btn btn-dark">details</a>
      </div>
    </div>
    </div>`
}


function totalTarjetas(tarjetasData , contenedor) {
 

  let template = ""  
  for (let tarjeta of tarjetasData) {
    template +=  nuevasTarjetas(tarjeta)
  }
 contenedor.innerHTML=template
}

totalTarjetas(listaUpcoming , containerTarjeta)


// checkbox

let funcionDelMap = evento => evento.category

let categoriasMap = data.events.map(funcionDelMap)
let categorias = [...new Set(categoriasMap)]


function estructuraCheckbox(categorias) {
  return `<div class="form-check">
  <input class="form-check-input" type="checkbox" value="${categorias}" id="${categorias.replace(" ", "-")}">
  <label class="form-check-label" for="${categorias.replace(" ", "-")}">
    ${categorias}
  </label>
</div>`
}

function totalCheckbox(dataCheckbox , contenedor) {
  let totalCheckbox = ""
  for (let checkbox of dataCheckbox) {
    totalCheckbox = totalCheckbox + estructuraCheckbox(checkbox)
  }
 contenedor.innerHTML = totalCheckbox
}
totalCheckbox(categorias ,containerCheckbox)

// ------------------------------------------------------------------------------------------------------------
// escuchadores de eventos

containerSearch.addEventListener("input" ,()=>{
  tercerFiltro()
})

containerCheckbox.addEventListener("change",() =>{
  tercerFiltro()
})

// filtros

function primerFiltro(array , inputValue){
  return array.filter(evento => evento.name.toLowerCase().includes(inputValue.toLowerCase()))
}

function segundoFiltro(array , category)  { 
  return array.filter(evento=>(category.includes(evento.category)|| category.length==0))
}

function tercerFiltro(){
  let checkValue = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(elemento => elemento.value)
  let primeraVuelta = primerFiltro(listaUpcoming , containerSearch.value)
  let segundoVuelta = segundoFiltro(primeraVuelta , checkValue)
  totalTarjetas(segundoVuelta , containerTarjeta)
}
import { totalTarjetas , totalCheckbox , tercerFiltro} from "../modules/functions.js"

let URL_API = "https://mindhub-xj03.onrender.com/api/amazing"

let containerTarjeta = document.getElementById("container-tarjetas")
let containerSearch = document.getElementById("inputSearch")
let containerCheckbox = document.getElementById("container-check")

let eventos

fetch(URL_API)
.then(Response => Response.json())
.then(({events}) =>{
  eventos = events 
  totalTarjetas(events , containerTarjeta)
  let categoriasMap = events.map( evento => evento.category)
  let categorias = [...new Set(categoriasMap)]
  totalCheckbox(categorias ,containerCheckbox)
  console.log(categorias)
})
.catch(err => console.log(err))
// checkbox

 // lo que esta haciendo el map es que me recorre mi 
// array de objetos y me devuelve un array con la misma longitud del original
// pero solo con el evento que le estoy indicando 
 // aqui el set lo que hace es que toma el array y me elimina los elemetos
// repetidos los trespuntos se refiere a que se adacte a la informacion que llegue de mi array

// escuchadores de eventos

containerSearch.addEventListener("input" ,()=>{
  tercerFiltro(eventos , containerSearch , containerTarjeta)
  // Este evento se activa cada vez que el contenido del campo de entrada cambia 
})
containerCheckbox.addEventListener("change",() =>{
  tercerFiltro(eventos , containerSearch , containerTarjeta)
})
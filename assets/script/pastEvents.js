import { filtrarPast , totalTarjetasUpPas , totalCheckbox , tercerFiltroUpPast} from "../modules/functions.js"
let URL_API = "https://mindhub-xj03.onrender.com/api/amazing"

let containerTarjeta = document.getElementById("container-tarjetas")
let containerSearch = document.getElementById("inputSearch")
let containerCheckbox = document.getElementById("container-check")
let eventos

fetch(URL_API)
.then(Response => Response.json())
.then(({events , currentDate}) =>{
eventos = events
  let listaPasado = filtrarPast(events , currentDate) 
  totalTarjetasUpPas(listaPasado , containerTarjeta)
  let categoriasMap = events.map(evento => evento.category)
  let categorias = [...new Set(categoriasMap)]
  totalCheckbox(categorias ,containerCheckbox)

})
.catch(err => console.log(err))
  
// escuchadores de eventos

containerSearch.addEventListener("input" ,()=>{
  tercerFiltroUpPast(eventos , containerSearch  , containerTarjeta)
})

containerCheckbox.addEventListener("change",() =>{
  tercerFiltroUpPast( eventos , containerSearch  , containerTarjeta)
})



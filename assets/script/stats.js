import { maximaAsistencia , menorAsistencia , maxCapacidad , segundaTabla , filtrar , filtrarPast , tercerTabla} from "../modules/functions.js"
let URL_API = "https://mindhub-xj03.onrender.com/api/amazing"


let mayorPorcentaje = document.getElementById("mayorPorcentaje")
let menorPorcenaje = document.getElementById("menorPorcentaje")
let mayorCapacidad = document.getElementById("mayorCapacidad")
let $segundaTabla = document.getElementById("segundaTabla")
let $terceraTabla = document.getElementById("terceraTabla")

fetch(URL_API)

.then(Response => Response.json())
.then(({events , currentDate}) =>{
mayorPorcentaje.innerHTML = maximaAsistencia(events)
menorPorcenaje.innerHTML = menorAsistencia(events)
mayorCapacidad.innerHTML = maxCapacidad(events)
let eventosUpcoming = filtrar (events , currentDate)
let categoriasMap = events.map( evento => evento.category)
let categorias = [...new Set(categoriasMap)]
$segundaTabla.innerHTML = segundaTabla(categorias , eventosUpcoming)

let eventosPast = filtrarPast(events , currentDate)
console.log(eventosPast)
$terceraTabla.innerHTML = tercerTabla(categorias , eventosPast)
console.log(tercerTabla(categorias , eventosPast))
})
.catch(err => console.log(err))
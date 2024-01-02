


//! Nuevo 

//?Variables
const year = document.querySelector('#year')
const marca = document.querySelector('#marca')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//Contenido para resultados
const resultado = document.querySelector('#resultado')


const max = new Date().getFullYear()
const min = max - 10


//3. Generar un objeto con la busqueda
//Tenemos que generar un selector
const datosBusqueda = {

    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}



//?Eventos

document.addEventListener('DOMContentLoaded', ()=> {

    //Muestra los automoviles
    mostrarAutos(autos)  

    //LLena las ociones de years

    llenarSelect()

})

//*Event lisener para los selecto de busqueda

marca.addEventListener('change', (e)=>{
    datosBusqueda.marca = e.target.value

    filtrarAuto()
})

year.addEventListener('change', (e)=> {

    datosBusqueda.year = parseInt(e.target.value)

    filtrarAuto()
})

minimo.addEventListener('change', e => {

    datosBusqueda.minimo = parseInt(e.target.value)

    filtrarAuto()

})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = parseInt(e.target.value)
    filtrarAuto()
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto()

})



//?Funciones

//1 mostramos los datos en el HTML
function mostrarAutos(autos) {

    //Eliminar el HTML previo
    limpiarHTML()

    autos.forEach(auto => {
        const autoHTML = document.createElement('p')


        const {marca, modelo, year, puertas, transmision, precio, color} = auto 

        autoHTML.textContent = `

            ${marca} ${modelo} - ${year} - ${puertas} Puestas - Transmision: ${transmision} - precio ${precio} - Color: ${color}
        
        `

        //Insertar en HTML
        resultado.appendChild(autoHTML)

    })    
}

//LimpiarHTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}


//2 Genera los anos del select
function llenarSelect() {

    for (let i = max; i >= min; i--) {
        
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)

        
    }
    
}

//Funcion de alto nivel - funcion que toma otra funcion como parametro
function filtrarAuto() {

    const resultado = autos.filter(filtrarMarca).filter( filtrarYear ).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPurtas).filter(filtrarTransmision).filter(filtrarColor)

    console.log(resultado);

    
    if (resultado.length) {
        mostrarAutos(resultado)
        
    }else{
        noResultado()
    }

}


function noResultado() {
    
    limpiarHTML()

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay resutlados, realiza otra busqueda...'
    resultado.appendChild(noResultado)
}

//pasamos la funcion al parametro de filter
function filtrarMarca(auto) {
    
    const {marca} = datosBusqueda

    if (marca) {
        return auto.marca === marca
    }
    return auto
}

function filtrarYear(auto) {

    if (datosBusqueda.year) {

        return auto.year === datosBusqueda.year
    }

    return auto

}

function filtrarMinimo(auto) {
    
    const {minimo} = datosBusqueda

    if (minimo) {
        return auto.precio >= minimo

    }

    return auto
}
function filtrarMaximo(auto) {
    
    const {maximo} = datosBusqueda

    if (maximo) {
        return auto.precio <= maximo

    }

    return auto
}

function filtrarPurtas(auto) {
    
    const {puertas} = datosBusqueda

    if (puertas) {
        return auto.puertas === puertas
    }
    return auto
}
function filtrarTransmision(auto) {
    
    const {transmision} = datosBusqueda

    if (transmision) {
        return auto.transmision === transmision
    }
    return auto
}
function filtrarColor(auto) {
    
    const {color} = datosBusqueda

    if (color) {
        return auto.color === color
    }
    return auto
}













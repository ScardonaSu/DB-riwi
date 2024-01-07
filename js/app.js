



//Variables

const resultado = document.querySelector('#resultado')
const genero = document.querySelector('#genero')
const color = document.querySelector('#colores')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const mascotas = document.querySelector('#mascotas')
const generoMusical = document.querySelector('#generoMusical')




//Generar un objeto con la busqueda 

const datosBusqueda = {

    genero: '',
    color: '',
    minimo: '',
    maximo: '',
    mascotas: '',
    generoMusical: '',
    hobby: ''

}

document.addEventListener('DOMContentLoaded', ()=> {
    
    mostarData(baseDatos)


})

// Event listener para los select de busqeda

genero.addEventListener('change', (e)=> {

    datosBusqueda.genero = e.target.value

    filtrarEstudiante()

})

color.addEventListener('change', (e)=> {

    datosBusqueda.color = e.target.value
    
    console.log(datosBusqueda);

    filtrarEstudiante()
})

minimo.addEventListener('change', (e)=> {

    datosBusqueda.minimo = e.target.value

    filtrarEstudiante()
})
maximo.addEventListener('change', (e)=> {

    datosBusqueda.maximo = e.target.value

    filtrarEstudiante()
})

mascotas.addEventListener('change', (e)=> {

    datosBusqueda.mascotas = e.target.value

    filtrarEstudiante()
})

generoMusical.addEventListener('change', (e)=>{
    datosBusqueda.generoMusical = e.target.value

    filtrarEstudiante()
})


//Funcion que filtra en base a la busqueda

function filtrarEstudiante() {
    
    const resultado = baseDatos.filter(filtrarGenero).filter(filtrarColor).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarMascota).filter(filtrarGeneroMusical)


    if(resultado.length){
        mostarData(resultado)
    }else{
        noResultado()
    }

}


//Funciones de filtrado
function filtrarGenero(data) {

    const {genero} = datosBusqueda

    if (genero) {
        return data.genero === genero
    }
    return data
}

function filtrarColor(data) {

    const {color} = datosBusqueda


    if (color){
        return data.color == color
    }
    return  data



}

function filtrarMinimo(data) {
    const {minimo} = datosBusqueda

    if (minimo){
        return data.edad >= minimo
    }
    return  data
}

function filtrarMaximo(data) {

    const {maximo} = datosBusqueda


    if (maximo){
        return data.edad <= maximo
    }
    return  data

}
function filtrarMascota(data) {

    const {mascotas} = datosBusqueda

    if (mascotas){
        return data.mascotas === mascotas
    }
    return  data

}

function filtrarGeneroMusical(data) {

    console.log(data.gustoMusical)


    const {generoMusical} = datosBusqueda


    if (generoMusical){
        return data.gustoMusical == generoMusical
    }
    return  data
}





function noResultado() {

    limpiarHTML()
    
    const noREsultado = document.createElement('div')
    noREsultado.classList.add('alerta', 'error')
    noREsultado.textContent = 'No hay resultados, Intenta con otra busqueda'
    resultado.appendChild(noREsultado)
}




//Funcion para mostrar datos en HTML
function mostarData(baseDatos) {

    limpiarHTML()
    
    baseDatos.forEach(person => {

        const {nombre, genero, edad, hobbies, color, camidaFavorita, gustoMusical,cancionFavorita, mascotas, peliculaFavorita, image } = person


        //Catd principal
        const card = document.createElement("div");
        card.classList.add("card", person.category);

        //contenedor img
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        //imagen
        const imagePerson = document.createElement("img");
        imagePerson.classList.add('img-card')
        imagePerson.setAttribute("src", image);
        imgContainer.appendChild(imagePerson);

        //nombre
        const personalName = document.createElement('p')
        personalName.classList.add('textLeft')
        personalName.textContent = `Nombre: ${nombre}`

        //edad
        const personalAge = document.createElement('p')
        personalAge.classList.add('textLeft')
        personalAge.textContent = `Edad: ${edad}`

        //Genero
        const personalGenero = document.createElement('p')
        personalGenero.classList.add('textLeft')
        personalGenero.textContent= `Genero: ${genero}`

        const personalHobbies = document.createElement('p')
        personalHobbies.classList.add('textLeft', )
        personalHobbies.textContent = `Hobies: ${ hobbies }`

        const personalComida= document.createElement('p')
        personalComida.classList.add('textLeft', )
        personalComida.textContent = `Comida favorita: ${ camidaFavorita }`

        const personalMusic = document.createElement('p')
        personalMusic.classList.add('textLeft', )
        personalMusic.textContent = `Musica favorita: ${ gustoMusical }`

        const personalPet = document.createElement('p')
        personalPet.classList.add('textLeft', )
        personalPet.textContent = `Mascotas: ${ mascotas }`

        const personalColor = document.createElement('p')
        personalColor.classList.add('textLeft', )
        personalColor.textContent = `Color: ${ color }`

    /*  const personalMovie = document.createElement('p')
        personalMovie.classList.add('textLeft')
        personalMovie.textContent = `Pelicula favorita: ${peliculaFavorita}` */




        card.appendChild(imgContainer);
        card.appendChild(personalName)
        card.appendChild(personalAge)
        card.appendChild(personalGenero)
        card.appendChild(personalHobbies)
        card.appendChild(personalComida)
        card.appendChild(personalMusic)
        card.appendChild(personalPet)
        card.appendChild(personalColor)
        // card.appendChild(personalMovie)

        resultado.appendChild(card)


    }) 

}

//Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}


function colores (micolor) {

    const resultadoColor = baseDatos.filter(data => data.color === micolor)

    if (resultadoColor === 'Negro') {

        console.log('Aqui Negro');
    }else{
        console.log('No negro');
    }
}




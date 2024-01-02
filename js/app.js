



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
    minima: '',
    maxima: '',
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


//Funcion que filtra en base a la busqueda

function filtrarEstudiante() {
    
    const resultado = baseDatos.filter(filtrarGenero)

    mostarData(resultado)
/*     if(resultado.length){
    }else{
        noResultado()
    } */


}

//Funciones de filtrado
function filtrarGenero(data) {
    
    const {genero} = datosBusqueda

    if (genero) {
        return data.genero === genero
    }
    return data
}

function noResultado() {

    limpiarHTML()
    
    const noREsultado = document.createElement('div')
    noREsultado.classList.add('alerta', 'error')
    noREsultado.textContent = 'No hay resultados, Intenta con otra busqueda'
    resutlado.appendChild(noREsultado)
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
        personalColor.textContent = `Mascotas: ${ color }`

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



const baseDatos = [
  {
    nombre: "Manuela",
    genero: "Femenino",
    edad: "16",
    foto: [],
    hobbies: ["Escribir"],
    color: ["Azul"],
    camidaFavorita: ["Mexicana"],
    gustoMusical: ["Electronica"],
    cancionFavorita: [
      {
        nombreCancion: "Animals de Martin ",
        descripcion: "Por que si, suena bien",
      },
    ],
    mascotas: ["Rufi", "Lola", "Juana"],
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    peliculaFavorita: ["Beetle Juice"],
  },

  {
    nombre: "Daniel Hurtado",
    genero: "Masculino",
    edad: "18",
    foto: [
      {
        opcion: "No",
        foto: "n/n",
      },
    ],
    hobbies: ["Escuchar musica", "Futbol", "Peliculas"],
    color: ["Negro"],
    camidaFavorita: ["Sancocho"],
    gustoMusical: ["Metal"],
    cancionFavorita: "Chop Suey",
    mascotas: ["Perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Van Helsing",
        motivo: "Esta el actor favorito",
      },
    ],
  },

  {
    nombre: "Juan Pablo Alvarez",
    genero: "Masculino",
    edad: "26",
    foto: [
      {
        opcion: "No",
        foto: "no",
      },
    ],
    hobbies: ["Pelicula porno", "Leer", "Esuchar musica", "Jugar", "Dormir"],
    color: ["Negro", "Rojo"],
    camidaFavorita: ["Mexicana", "Italiana", "Hamburgesa"],
    gustoMusical: ["Techno"],
    cancionFavorita: ["Some one like you"],
    mascotas: ["Gatos"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombre: "Game of Ender",
        motivo: "Actor y las actices",
      },
    ],
  },

  {
    nombre: "Duvan Morales",
    genero: "Masculino",
    edad: "18",
    foto: [
      {
        opcion: "No",
        foto: "no",
      },
    ],
    hobbies: ["Gym", "Footbol"],
    color: ["Azul"],
    camidaFavorita: ["Pastas", "Pizza"],
    gustoMusical: ["Trap", "Rap", "Reggeton", "Crossover"],
    cancionFavorita: ["Tuyo de mora"],
    mascotas: ["Pez"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Avengers",
        motivo: "Por la trama",
      },
    ],
  },

  {
    nombre: "Richard",
    genero: "Masculino",
    edad: "34",
    foto: [
      {
        opcion: "Si",
        foto: "Pendiente",
      },
    ],
    hobbies: ["Ver series", "Fotografia"],
    color: ["Negro"],
    camidaFavorita: ["Costillas BBQ"],
    gustoMusical: ["Rock", "Metal"],
    cancionFavorita: ["Trooperl Airoman"],
    mascotas: ["Perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "La emboscada",
        motivo: "Aparece Charse Theron",
      },
    ],
  },

  {
    nombre: "David Rico",
    genero: "Masculino",
    edad: "18",
    foto: [
      {
        opcion: "Si",
        foto: "Si",
      },
    ],
    hobbies: ["Modelaje", "Deporte", "Video Juegos"],
    color: ["Rojo"],
    camidaFavorita: ["Pastas"],
    gustoMusical: ["Rock", "Pop", "Regge", "Hip Hop"],
    cancionFavorita: ["Love is a butterfly"],
    mascotas: ["Gato"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Virnes 13",
        motivo: "Lo desestresa, le gusta a maldad",
      },
    ],
  },

  {
    nombre: "Angeli",
    genero: "Femenino",
    edad: "19",
    foto: [
      {
        opcion: "Si",
        foto: "Si",
      },
    ],
    hobbies: ["Modelar", "Cocinar", "Viajar"],
    color: ["Rojo"],
    camidaFavorita: ["Salchipapas", "Tacos", "Cordon Blue"],
    gustoMusical: ["Salsa", "Rap"],
    cancionFavorita: ["Sol de Wiliam"],
    mascotas: ["No le gustan"],
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    peliculaFavorita: [
      {
        nombrePelicula: "No tiene",
        motivo: "No le gustan las peliculas",
      },
    ],
  },

  {
    nombre: "Henry Fiol",
    genero: "Masculino",
    edad: "35",
    foto: [
      {
        opcion: "Si",
        foto: "Si",
      },
    ],
    hobbies: ["Play Station", "Programacion", "Estudiar"],
    color: ["Verde"],
    camidaFavorita: ["Bandeja paisa"],
    gustoMusical: ["Salsa"],
    cancionFavorita: ["Asi eres tu mi vida"],
    mascotas: ["No"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Jumper",
        motivo: "Diversidad, paisajes, libertad",
      },
    ],
  },

  {
    nombre: "Daniel Montiel",
    genero: "Masculino",
    edad: "18",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Caminar"],
    color: ["Azul", "Morado"],
    camidaFavorita: ["Frijoles"],
    gustoMusical: ["Pop"],
    cancionFavorita: ["Billie Jean"],
    mascotas: ["Perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Masacre en texas",
        motivo: "Es emocionante",
      },
    ],
  },

  {
    nombre: "vladimir Alejandro",
    genero: "Masculino",
    edad: "39",
    foto: [
      {
        opcion: "NO",
        foto: "NO",
      },
    ],
    hobbies: ["Patinaje", "Guitarra electica", "Artes maricales"],
    color: ["Esmeralda"],
    camidaFavorita: ["Frijoles"],
    gustoMusical: ["Rock", "Salsa"],
    cancionFavorita: ["Rooster de alice in chains"],
    mascotas: ["Gatos"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Sueño de fuga",
        motivo: "La presion y el tiempo",
      },
    ],
  },

  {
    nombre: "Jose Manuel",
    genero: "Masculino",
    edad: "18",
    foto: [
      {
        opcion: "Si",
        foto: "si",
      },
    ],
    hobbies: ["Footbol"],
    color: ["Rojo"],
    camidaFavorita: ["Pastas"],
    gustoMusical: ["Metalica"],
    cancionFavorita: ["Drain You"],
    mascotas: ["Perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Sangre, sudor y gloria",
        motivo: "Divertida",
      },
    ],
  },

  {
    nombre: "Laura Velasquez",
    genero: "Femenino",
    edad: "18",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Fotografia"],
    color: ["Negro"],
    camidaFavorita: ["Papas fritas"],
    gustoMusical: ["Rock alternativo"],
    cancionFavorita: ["Love lost"],
    mascotas: ["No"],
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    peliculaFavorita: [
      {
        nombrePelicula: "Interestelar",
        motivo: "Por que es del espacio",
      },
    ],
  },

  {
    nombre: "Juan Diego",
    genero: "Masculino",
    edad: "23",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Las motos"],
    color: ["Azul"],
    camidaFavorita: ["Comida chatarra"],
    gustoMusical: ["Salsa"],
    cancionFavorita: ["Cuenta regresiva"],
    mascotas: ["Perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Intocable",
        motivo: "Por que tiene un mesaje chevere",
      },
    ],
  },

  {
    nombre: "Mariana",
    genero: "Femenino",
    edad: "18",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Video Juegos"],
    color: ["Blanco"],
    camidaFavorita: ["Hamburguesa"],
    gustoMusical: ["Rock"],
    cancionFavorita: ["Still of the nigth"],
    mascotas: ["Perro"],
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    peliculaFavorita: [
      {
        nombrePelicula: "Forrest Gump",
        motivo: "Por que si",
      },
    ],
  },

  {
    nombre: "Juan david usuga",
    genero: "Masculino",
    edad: "21",
    foto: [
      {
        opcion: "no",
        foto: "no",
      },
    ],
    hobbies: ["viajar"],
    color: ["azul"],
    camidaFavorita: ["pastas"],
    gustoMusical: ["pop"],
    cancionFavorita: ["human"],
    mascotas: ["perros, gatos, conejos"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "End game",
        motivo:
          "porque representa la culminacion de mucho tiempo desperdiciado",
      },
    ],
  },

  {
    nombre: "Duvian lopez",
    genero: "Masculino",
    edad: "32",
    foto: [
      {
        opcion: "no",
        foto: "no",
      },
    ],
    hobbies: ["Ninguno antes jugaba en linea"],
    color: ["Negro"],
    camidaFavorita: ["Masamorra"],
    gustoMusical: ["Rock alternativo"],
    cancionFavorita: ["dear agoni"],
    mascotas: ["no"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Señor de los anillos, el retorno del rey",
        motivo: "Le gusta mucho la ciencia ficcion",
      },
    ],
  },

  {
    nombre: "Alejandro ruiz",
    genero: "Masculino",
    edad: "22",
    foto: [
      {
        opcion: "no",
        foto: "no",
      },
    ],
    hobbies: ["Videojuegos"],
    color: ["Negro"],
    camidaFavorita: ["Mexicana"],
    gustoMusical: ["Salsa y Rock"],
    cancionFavorita: ["Do i wanna know"],
    mascotas: ["perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Interestellar",
        motivo: "Por la esencia de la pelicula",
      },
    ],
  },

  {
    nombre: "David Monterrosa",
    genero: "Masculino",
    edad: "21",
    foto: [
      {
        opcion: "no",
        foto: "no",
      },
    ],
    hobbies: ["Ejercicio, estudiar"],
    color: ["Negro"],
    camidaFavorita: ["Bandeja paisa"],
    gustoMusical: ["Rap"],
    cancionFavorita: ["Gosebumps"],
    mascotas: ["Gato"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "No tiene",
        motivo: "no",
      },
    ],
  },

  {
    nombre: "Victor Marin",
    genero: "Masculino",
    edad: "30",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Detectar metales", "Leer"],
    color: ["Negro"],
    camidaFavorita: ["Pizza"],
    gustoMusical: ["Reggeton"],
    cancionFavorita: ["Somos de calle"],
    mascotas: ["No"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Interestelar",
        motivo: "Por la trama",
      },
    ],
  },
  {
    nombre: "Andres Patiño",
    genero: "Masculino",
    edad: "22",
    foto: [
      {
        opcion: "No",
        foto: "no",
      },
    ],
    hobbies: ["Cubos de rubick"],
    color: ["Morado"],
    camidaFavorita: ["Hamburguesa"],
    gustoMusical: ["Rock"],
    cancionFavorita: ["Ya lo vea venir"],
    mascotas: ["Perro", "Pez", "Hamster"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "El castillo del vagabundo",
        motivo: "La banda sonora es muy genial",
      },
    ],
  },

  {
    nombre: "Jhoan Rios",
    genero: "Masculino",
    edad: "18",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Gym"],
    color: ["Rojo"],
    camidaFavorita: ["Pizza"],
    gustoMusical: ["Trap"],
    cancionFavorita: ["Sould out dates"],
    mascotas: ["Gato"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Ted",
        motivo: "Lo marco la infancia",
      },
    ],
  },

  {
    nombre: "Juan Felipe Gutierrez",
    genero: "Masculino",
    edad: "28",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Caminar"],
    color: ["Verde"],
    camidaFavorita: ["Bandeja Paisa"],
    gustoMusical: ["Rap"],
    cancionFavorita: ["Aveces"],
    mascotas: ["Perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Shrek",
        motivo: "Divertida y le gusta el burro",
      },
    ],
  },

  {
    nombre: "Santiago Tobon",
    genero: "Masculino",
    edad: "23",
    foto: [
      {
        opcion: "no",
        foto: "no",
      },
    ],
    hobbies: ["Dormir", "Pintar", "Comer"],
    color: ["Turquesa"],
    camidaFavorita: ["Mexicana"],
    gustoMusical: ["Rock", "Rap", "Punk"],
    cancionFavorita: ["Rapp Snitch Knisshes"],
    mascotas: ["Perro"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Scott vs the World",
        motivo: "La post produccion",
      },
    ],
  },

  {
    nombre: "Dina Luz Martinez",
    genero: "Femenino",
    edad: "22",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Dormir", "Peliculas", "Comer"],
    color: ["Verde"],
    camidaFavorita: ["Pizza"],
    gustoMusical: ["Pop"],
    cancionFavorita: ["Dance for my"],
    mascotas: ["No tiene"],
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    peliculaFavorita: [
      {
        nombrePelicula: "Infinite Ward",
        motivo:
          "Por que no era predecible y porque estaba los personajes favoritos",
      },
    ],
  },

  {
    nombre: "Juan Pablo Giraldo",
    genero: "Masculino",
    edad: "36",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Gym", "Leer", "Videojuegos"],
    color: ["Rojo"],
    camidaFavorita: ["Pollo Frisby"],
    gustoMusical: ["Rock"],
    cancionFavorita: ["Nothing else matters"],
    mascotas: ["Gato"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Dead Pool",
        motivo: "Por la comedia negra",
      },
    ],
  },

  {
    nombre: "Daniel Torres",
    genero: "Masculino",
    edad: "32",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Jugar Play", "Footbol"],
    color: ["Azul"],
    camidaFavorita: ["Perras Calientes"],
    gustoMusical: ["Vallenato"],
    cancionFavorita: ["Cama y mesa"],
    mascotas: ["No"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Hitch",
        motivo: "Por que esta un actor favorito",
      },
    ],
  },

  {
    nombre: "Sebastian Arboleda",
    genero: "Masculino",
    edad: "25",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Programar", "Diseño grafico", "Ver series"],
    color: ["Azul"],
    camidaFavorita: ["Pastas"],
    gustoMusical: ["Rock", "Electronica"],
    cancionFavorita: ["Fire storn"],
    mascotas: ["No"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Lucy",
        motivo: "Por los temas que trata, temas cientificos y ciencia ficcion",
      },
    ],
  },

  {
    nombre: "Valentina Mesa",
    genero: "Femenino",
    edad: "29",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Programar"],
    color: ["Rosado"],
    camidaFavorita: ["Costilla BBQ"],
    gustoMusical: ["Pop"],
    cancionFavorita: ["Cuando la vi"],
    mascotas: ["Perros y gatos"],
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    peliculaFavorita: [
      {
        nombrePelicula: "Tres metros sobre el cielo",
        motivo: "Tematica, drama y actores",
      },
    ],
  },

  {
    nombre: "Santiago Cadavid",
    genero: "Masculino",
    edad: "31",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Electicidad"],
    color: ["Negro"],
    camidaFavorita: ["Frijoles"],
    gustoMusical: ["Salsa", "Rock"],
    cancionFavorita: ["One Mettalica"],
    mascotas: ["No"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "Saw",
        motivo: "Simpre le ha gustado",
      },
    ],
  },

  {
    nombre: "Sebastian Ramirez",
    genero: "Masculino",
    edad: "16",
    foto: [
      {
        opcion: "No",
        foto: "No",
      },
    ],
    hobbies: ["Jugar Baloncesto", "Programar"],
    color: ["Rojo"],
    camidaFavorita: ["Pizza"],
    gustoMusical: ["Rock"],
    cancionFavorita: ["Lamento Boliviano"],
    mascotas: ["No"],
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    peliculaFavorita: [
      {
        nombrePelicula: "No",
        motivo: "No le gusta ver peliculas",
      },
    ],
  },
];






/* 
            //Create Card
            let card = document.createElement("div");
            //Card should have category and should stay hidden initially
            card.classList.add("card", person.category);
            //image div
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("image-container");
            //img tag
            let imagePerson = document.createElement("img");
            imagePerson.classList.add('img-card')
            imagePerson.setAttribute("src", image);
            imgContainer.appendChild(imagePerson);
            card.appendChild(imgContainer);
            //container
            let container = document.createElement("div");
            container.classList.add("container");
            //studient name
            let name = document.createElement("h5");
            name.classList.add("nombre-estudiante");
            name.innerText = nombre.toUpperCase();
            container.appendChild(name);
            //genero
            let sexo = document.createElement("h6");
            genero.innerText = genero;
            container.appendChild(sexo);
            //Hobby
            let hobby = document.createElement('h5')
            hobby.innerText = hobbies;
            container.appendChild(hobby)
            //Comida favorita
            let comida = document.createElement('h5')
            comida.innerText = camidaFavorita;
            container.appendChild(comida)
            //age
            const age = document.createElement('h5')
            const edadTexto = document.createElement('P')
            edadTexto.textContent = 'Edad'
            age.innerText = age
            age.classList.add("color-text");
            
            container.appendChild(age)

            card.appendChild(container);
            document.getElementById("resultado").appendChild(card); */

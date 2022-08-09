const ContenedorPeliculas = document.getElementById('peliculas');
const ContenedorModal = document.getElementById('contenedor-modal');
const modal = document.getElementById('modal');
const imagenModal = document.getElementById('imagen-pelicula');
const contenidoPelicula = document.getElementById('contenido-pelicula');
const tituloPelicula = document.getElementById('titulo-pelicula');


const ObtenerPelicula = async () => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);
    datos.results.forEach(element => {
        peliculas+= `
        <div class="pelicula">
            <button class="ver-mas" onclick="abrir(${element.id})"> 
                <img class = "poster" src="https://image.tmdb.org/t/p/w500${element.poster_path}">
            </button>    
            <p class="titulo">${element.title}</p>
            
        </div>` 
    });
    ContenedorPeliculas.innerHTML = peliculas;
}
function abrir(id){
    ObtenerPeliculaSeleccionada(id);
}

ObtenerPelicula();

const ObtenerPeliculaSeleccionada = async (id) => {
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=786ee52ce60c9ebb3805127db53d7f67`);
    
    const data = await respuesta.json();
    console.log(data);
    //ContenedorPeliculas.className = "hide";
    ContenedorModal.classList.remove("hide");
    contenidoPelicula.innerHTML = "";
    imagenModal.innerHTML="";
    let img = document.createElement('img')
    img.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    let sinopsis = document.createElement('p');
    sinopsis.innerHTML = data.overview;
    
    tituloPelicula.innerHTML= data.title;
    contenidoPelicula.appendChild(sinopsis);
    imagenModal.appendChild(img);

}
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    header: {
        'content-type': 'application/json;charset=utf-8',
    },
    params:{
        'api_key': API_KEY,
    },
});


const trendingContainerMovies = document.getElementById("trending-container-movies")
const trendingContainerTvs = document.getElementById("trending-container-tvs")
const categoriesListContainer = document.getElementById("categories-list-container") 


async function getTrendingMoviesPreview(){
    trendingContainerMovies.innerHTML = '';
    const { data } = await api('trending/movie/day');
    const movies = data.results
    console.log(movies)
    movies.forEach(element => {
        let movie = `
        <div class="movie-container">
            <img
            src="https://image.tmdb.org/t/p/w300${element.poster_path}"
            class="movie-img"
            alt="${element.title}"
            />
            <p class="title" >${element.title}</p>
        </div>
        `
        trendingContainerMovies.innerHTML += movie;
    });
}

async function getTrendingTvPreview(){
    trendingContainerTvs.innerHTML = '';
    const { data } = await api('trending/tv/day');
    const tvs = data.results
    tvs.forEach(element => {
        let tv = `
        <div class="tv-container">
            <img
            src="https://image.tmdb.org/t/p/w300${element.poster_path}"
            class="tv-img"
            alt="${element.name}"
            />
            <p class="title" >${element.name}</p>
        </div>
        `
        trendingContainerTvs.innerHTML += tv;
    });
}



async function getCategoriesPreview(){
    categoriesListContainer.innerHTML = '';
    const {data} = await api('genre/movie/list');
    const categories = data.genres
    categories.forEach(element => {
        let categorie = `
            <div class="category-container">
                    <h3 id="id${element.id}" class="category-title">${element.name}</h3>
            </div>
        `
        categoriesListContainer.innerHTML += categorie;
    });
}




















/*const ContenedorPeliculas = document.getElementById('peliculas');
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
*/


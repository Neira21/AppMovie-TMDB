window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

const trendingMovies = document.getElementById('trending-movies');
const trendingTvs = document.getElementById('trending-tvs');
const categoriesContainer = document.getElementById('categories');
const backButton = document.getElementById('back-button');

const movies = document.getElementById('movies');
const detail = document.getElementById('detail');


const seeAllMovie = document.getElementById('seeAllMovies');
const seeAllTv = document.getElementById('seeAllTvs');

let peliculas = [];
peliculas = document.getElementsByClassName('movie-img')
console.log(peliculas);
console.log(peliculas[0]);
seeAllMovie.addEventListener('click', () => {
    location.hash = '#trends';
})
seeAllTv.addEventListener('click', () => {
    location.hash = '#trends';
})



function navigator(){
    console.log({location});
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();

    }else if(location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }else if(location.hash.startsWith('#category=')){
        categoryPage();
    }else{
        homePage();
    }
}

function homePage(){
    console.log('HOME!!');
    backButton.classList.add('hide');
    getTrendingMoviesPreview();
    getTrendingTvPreview();
    getCategoriesPreview();

    movies.classList.add('hide');
    detail.classList.add('hide');
}
function movieDetailsPage(){
    console.log('MOVIE DETAILS!!');
    
    backButton.classList.remove('hide');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
    detail.classList.remove('hide');
}
function searchPage(){
    console.log('SEARCH!!');
    
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
}
function trendsPage(){
    console.log('TREENDS!!');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
}
function categoryPage(){
    console.log('CATEGORY!!');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
    movies.classList.remove('hide');
}

backButton.addEventListener('click', () => {
    location.hash='#home';
    window.location.reload();
})
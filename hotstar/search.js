import navbar from './components/navbar.js';

let nav = navbar();
let n = document.getElementById('navbar').innerHTML=nav;

let innn = document.getElementById('movie');

innn.addEventListener('input', function(){
    debounce(searchMovies, 1000)
})


let carousel_div = document.getElementById('carousel');

function carousel() {
    let images = [`https://wallpapercave.com/wp/wp3919888.jpg`, `https://wallpapercave.com/wp/wp1985437.jpg`, `https://i0.wp.com/ytimg.googleusercontent.com/vi/N4HMdZg4z3Y/maxresdefault.jpg?resize=160,120`, `https://w0.peakpx.com/wallpaper/454/792/HD-wallpaper-beauty-and-the-beast-beauty-and-the-beast-1991.jpg`, `https://c4.wallpaperflare.com/wallpaper/51/15/741/cinderella-disney-princess-desktop-hd-wallpaper-for-pc-tablet-and-mobile-1920%C3%971200-wallpaper-preview.jpg`];
    let imgElement = document.createElement('img');
    imgElement.src = images[0];
    carousel_div.append(imgElement);

    let i = 1;

    setInterval(function() {
        
        imgElement.src = images[i];
        carousel_div.append(imgElement);
        i++;

        if(i == images.length) {
            i = 0;
        }

    }, 2000) 
}

carousel();

import movie_append from './scripts/append.js';



async function searchMovies() {
    let loader_div = document.getElementById('loader_gif');
    loader_div.style.display='block';

    let movie_name = document.getElementById('movie').value;

   try {

        let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=30962d03&s=${movie_name}`);

        let data = await response.json();
        
        let real_data = data.Search;
        movie_append(real_data);

   } catch(err) {

        console.log('err:', err);

   }



    // response.then(function(success){

    //     let data = success.json();
    //     data.then(function(success){
    //        movie_append(success.Search);
    //     });
    //     data.catch(function(error){
    //         console.log('error:', error); 
    //     });

    // });
    // response.catch(function(error){

    // });
}

let movie_grid = document.getElementById('movie_grid');
// function movie_append(movies) {

//     document.getElementById('movie_grid').innerHTML=null;

//     let loader_div = document.getElementById('loader_gif');
//     loader_div.style.display='none';
    
//     movies.forEach(function(el) {
//         let div = document.createElement('div');

//         let img = document.createElement('img');
//         img.src = el.Poster;

//         let name = document.createElement('p');
//         name.innerHTML = el.Title;

//         let release = document.createElement('p');
//         release.innerHTML = el.Year;

//         let imdb = document.createElement('p');
//         imdb.innerText = `IMDB ID: ${el.imdbID}`;

//         div.append(img, name, release, imdb);
//         movie_grid.append(div);
//     });
// }


let searchbutton = document.querySelector('#insidenav > button:nth-child(1)');
searchbutton.style.display='none';

let id;

function debounce(func, delay)  {

    if(id) {
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay);
}
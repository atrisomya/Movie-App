import navbar from './components/navbar.js';

let nav = navbar();
let n = document.getElementById('navbar').innerHTML=nav;



//oswald: https://wallpapercave.com/wp/wp3919888.jpg
//noddy: https://wallpapercave.com/wp/wp1985437.jpg
//baby looney toones: https://i0.wp.com/ytimg.googleusercontent.com/vi/N4HMdZg4z3Y/maxresdefault.jpg?resize=160,120
//beauty and the beast: https://w0.peakpx.com/wallpaper/454/792/HD-wallpaper-beauty-and-the-beast-beauty-and-the-beast-1991.jpg
//cinderella: https://c4.wallpaperflare.com/wallpaper/51/15/741/cinderella-disney-princess-desktop-hd-wallpaper-for-pc-tablet-and-mobile-1920%C3%971200-wallpaper-preview.jpg

let carousel_div = document.getElementById('carousel');

function carousel() {
    let images = [`https://wallpaperaccess.com/full/1755091.jpg`, `https://wallpapercave.com/wp/wp1985437.jpg`, `https://i.pinimg.com/736x/18/f7/30/18f730f6696dfe7eb93fe3ae33fb9a81---movie-spider-man.jpg`, `https://w0.peakpx.com/wallpaper/454/792/HD-wallpaper-beauty-and-the-beast-beauty-and-the-beast-1991.jpg`, `https://mypostercollection.com/wp-content/uploads/2020/03/justice-league-poster-4-1024x473.jpg`];
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

let movies = [
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6837/1286837-v-32fd6c6b4461',
        Title: 'The Princess',
        Year: '2022',
        imdb: '5.6',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4669/674669-v',
        Title: 'Beauty and The Beast',
        Year: '2017',
        imdb: '7.1',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8629/1048629-v-b32938d4d73e',
        Title: 'Cruella',
        Year: '2021',
        imdb: '7.3',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9712/629712-v',
        Title: 'Cinderella',
        Year: '2015',
        imdb: '6.9',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/570/650570-v',
        Title: 'Maleficent',
        Year: '2014',
        imdb: '6.9',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5150/875150-v',
        Title: 'Aladdin',
        Year: '2019',
        imdb: '6.9',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6662/846662-v',
        Title: 'Mulan',
        Year: '2020',
        imdb: '5.7',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4594/674594-v',
        Title: 'The Princess Diaries',
        Year: '2001',
        imdb: '6.3',
    },
    {
        Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5206/875206-v',
        Title: 'Frozen',
        Year: '2013',
        imdb: '7.4',
    },
]

let movie_grid = document.getElementById('movie_grid');
// function movie_append(movies) {

//     document.getElementById('movie_grid').innerHTML=null;

//     let loader_div = document.getElementById('loader_gif');
//     loader_div.style.display='none';
    
//     movies.forEach(function(el) {
//         let div = document.createElement('div');

//         let img = document.createElement('img');
//         img.src = el.img;

//         let name = document.createElement('p');
//         name.innerHTML = el.name;

//         let release = document.createElement('p');
//         release.innerHTML = el.release;

//         let imdb = document.createElement('p');
//         imdb.innerText = `IMDB Rating: ${el.imdb}`;

//         div.append(img, name, release, imdb);
//         movie_grid.append(div);
//     })
// }

import movie_append from './scripts/append.js';

//movie_append(movies);

let sortasc = document.getElementById('sort-lh');

sortasc.addEventListener("click", asc);

function asc() {
    movies.sort(function(a, b) {
    let aa = Number(a.imdb);
    let bb = Number(b.imdb);
    return aa-bb;
    });
    movie_append(movies);
}

let sortdsc = document.getElementById('sort-hl');

sortdsc.addEventListener("click", dsc);

function dsc() {
    movies.sort(function(a, b) {
    let aa = Number(a.imdb);
    let bb = Number(b.imdb);
    return bb-aa;
    });
    movie_append(movies);
}


let getData = new Promise(function(resolve, reject){
   
    setTimeout(function(){
        let data = movies;

        if(data != null) {
            resolve(data);
        } else {
            reject("ERR: Server could not get movies data");
        }
    }, 2000);

});

getData
    .then(function(success){
    movie_append(success);
    });
    getData.catch(function(error){

    });


let name = localStorage.getItem('name') || "";

if(name != "") {
    let login = document.getElementById('login');
    login.innerText = name;
}
function movie_append(movies) {

    document.getElementById('movie_grid').innerHTML=null;

    let loader_div = document.getElementById('loader_gif');
    loader_div.style.display='none';
    
    movies.forEach(function(el) {
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.Poster;

        let name = document.createElement('p');
        name.innerHTML = el.Title;

        let release = document.createElement('p');
        release.innerHTML = el.Year;

        // let imdb = document.createElement('p');
        // imdb.innerText = `IMDB ID: ${el.imdbID}`;

        div.append(img, name, release);
        movie_grid.append(div);
    });
}

export default movie_append;
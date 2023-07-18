const nameInput = document.querySelector('#name');
const search = document.querySelector('#search');
const showsList = document.querySelector('#shows');

search.addEventListener('click', function() {
    showsList.innerHTML = '';
    let showName = nameInput.value;
    async function searchShow() {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${showName}`);
        const shows = await response.json();

        console.log(shows);

        for (let i = 0; i < shows.length; i++ ) {
            let div = document.createElement('div');
            showsList.appendChild(div);

            let img = document.createElement('img');
            img.src = shows[i].show.image.medium;
            
            let h2 = document.createElement('h2');
            h2.innerHTML = shows[i].show.name;
            
            div.appendChild(img);
            div.appendChild(h2);
            
            for (let j = 0; j < shows[i].show.genres.length; j++) {
                let p = document.createElement('p');
                p.innerHTML = shows[i].show.genres[j];
                div.appendChild(p);
                p.classList.add('tag');
            }
            
        }
     }

    searchShow();
});
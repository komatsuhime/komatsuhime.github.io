const artistNameInput = document.querySelector('#artistName');
const search = document.querySelector('#search');
const albumList = document.querySelector('#albums');

search.addEventListener('click', function() {
    let artistName = artistNameInput.value;
    async function searchArtist() {
        const response = await fetch(`https://theaudiodb.com/api/v1/json/2/discography.php?s=${artistName}`);
        const albums = await response.json();

        console.log(albums.album.length);

        for (let i = 0; i < albums.album.length; i++) {
            console.log(albums.album[i]);
            console.log(albums.album[i].strAlbum);
            let li = document.createElement('li');
            li.innerHTML = `${albums.album[i].strAlbum} (${albums.album[i].intYearReleased})`;
            albumList.appendChild(li);
        }
    }
    
    searchArtist();
});
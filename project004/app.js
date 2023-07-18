const artistNameInput = document.querySelector('#artistName');
const search = document.querySelector('#search');

search.addEventListener('click', function() {
    let artistName = artistNameInput.value;
    async function searchArtist() {
        const response = await fetch(`https://theaudiodb.com/api/v1/json/2/discography.php?s=${artistName}`);
        const data = await response.json();
        console.log(data);
    }
    
    searchArtist();
});



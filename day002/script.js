const search = document.getElementById("search");
const cityName = document.getElementById("cityName");
const conditions = document.getElementById("conditions1");
const conditionsDescription = document.getElementById("conditions2");

search.addEventListener('click', () => {
    
    const APIKey = "7b42be581784c45cf19cb8b52f7d5f99";
    const city = document.getElementById("searchCity").value;

    console.log(city);

async function loadWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
    const weather = await response.json();  
    console.log(weather.weather[0].main);
    conditions.innerHTML = `${weather.weather[0].main}`;
    conditionsDescription.innerHTML = `${weather.weather[0].description}`;  
}
     loadWeather();



     cityName.innerHTML = city.toUpperCase();
    
     
});

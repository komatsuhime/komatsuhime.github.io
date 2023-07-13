const search = document.getElementById("search");
const cityName = document.getElementById("cityName");
const conditions1 = document.getElementById("conditions1");
const conditions2 = document.getElementById("conditions2");
const temperature = document.getElementById("temperature");
//getElementsByTagName returns a collection, even if there's only one instance of the tag.
const main = document.getElementsByTagName("main")[0];

search.addEventListener('click', () => {
    
//for testing purposes: https://api.openweathermap.org/data/2.5/weather?q=Annapolis&appid=7b42be581784c45cf19cb8b52f7d5f99&units=imperial

    const APIKey = "7b42be581784c45cf19cb8b52f7d5f99";
    const city = document.getElementById("searchCity").value;

    console.log(city);

async function loadWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`);
    const weather = await response.json();  
   
    console.log(weather.main.temp);
    conditions1.innerHTML = `${weather.weather[0].main}`;
    conditions2.innerHTML = `${weather.weather[0].description}`;
    temperature.innerHTML = `${weather.main.temp}` + " °F";

    switch (weather.weather[0].main) {
        case "Clouds":
            console.log("cloudsssss");
            main.classList.add("style-clouds");
            break;

        case "Clear":
                console.log("clear");
                main.classList.add("style-clear");
                break;

            case "Rain":
            console.log("rain");
            main.classList.add("style-rain");
            break;

            case "Snow":
                console.log("snow");
                main.classList.add("style-snow");
                break;

            case "Haze":
                console.log("haze");
                main.classList.add("style-haze");
                break;
    
        default:
            break;
    }


}
     loadWeather();



     cityName.innerHTML = city.toUpperCase();
    
     
});

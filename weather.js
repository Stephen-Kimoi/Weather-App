
class Weather {
    constructor() {
        this.apiKey = '3fd44b4056413ee144ec7c7fcef4a9fc'; 
    } 

    //function for fetching weather data 
    async getWeather(location) {
        await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`)
           .then((Response) => Response.json())
           .then((data) =>  { this.displayWeather(data); console.log(data) }); 
    } 

    // Function for displaying the weather data 
    displayWeather(data) { 
        const { name } =  data; 
        const  { temp, humidity } =  data.main; 
        const { speed } =  data.wind; 
        const { pressure } =  data.main; 
        const { icon, description} =  data.weather[0]; 

        document.querySelector('h2').innerHTML = `Weather in ${name}`;
        document.querySelector('.temp').innerHTML = `${temp}ºC`;
        document.querySelector('.temp').innerHTML = `${temp}ºC`;
        document.querySelector('img').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.description').innerHTML = `${description}`;
        document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}`; 
        document.querySelector('.wind').innerHTML = `Windspeed: ${speed}km/hr`;
        

        console.log(name,icon, description, temp, humidity, speed, pressure); 
    }

    // Function for searching location 
    search () {
        this.getWeather(document.querySelector('.search-bar').value); 
    }
   
}              


// Initialize a new weather object 
const weather = new Weather(); 

// Event listener function for search button 
document.querySelector('.search-button').addEventListener('click', function () {
    weather.search();
})




             

class Weather {
    constructor(location) {
        this.apiKey = '3fd44b4056413ee144ec7c7fcef4a9fc'; 
        this.location = location; 
    } 

    //function for fetching weather data 
    async getWeather() {
        await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}`)
           .then((Response) => Response.json())
           .then((data) => this.displayWeather(data)); 
    } 



    // Change location function 
    changeLocation(location) {
        this.location = location; 
    } 
}


// Initialize a new weather object 
const weather = new Weather('Denver'); 

weather.getWeather()



             
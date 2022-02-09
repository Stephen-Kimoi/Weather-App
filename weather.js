
class weather {
    constructor() {
        this.apiKey = "222fadba49e060c02e83ba4550c59fa1"; 
    } 
   
    async getWeather(location) { 
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`)  
        
        let data = await response.json(); 
      

        return {
            data 
        } 
    }    

} 

const m = moment(); 

console.log(m.toString()); 









































// class Weather {
//     constructor() {
//         this.apiKey = 'a4dcacc97a1e0a605f77b54329932e23'; 
//     } 

//     //function for fetching weather data 
//     async getWeather(location) {
//         document.querySelector('.loading-icons').style.visibility = 'visible';
//         await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`)
//            .then((Response) => { 
//                Response.json()
//             })
//            .then((data) =>  { this.displayWeather(data); console.log(data) }) 
//            .catch((err) => document.querySelector('h2').innerHTML = 'Sorry, an error occured!'); 
//     } 

//     // Function for displaying the weather data 
//     displayWeather(data) {    
//         const { name } =  data; 
//         const  { temp, humidity } =  data.main; 
//         const { speed } =  data.wind; 
//         const { pressure } =  data.main; 
//         const { icon, description} =  data.weather[0]; 

//         document.querySelector('h2').innerHTML = `Weather in ${name}`;
//         document.querySelector('.temp').innerHTML = `${temp}ºC`;
//         document.querySelector('.temp').innerHTML = `${temp}ºC`;
//         document.querySelector('img').src = `https://openweathermap.org/img/wn/${icon}.png`;
//         document.querySelector('.description').innerHTML = `${description}`;
//         document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}`; 
//         document.querySelector('.wind').innerHTML = `Windspeed: ${speed}km/hr`;
        

//         console.log(name,icon, description, temp, humidity, speed, pressure); 
//     }

//     // Function for searching location 
//     search () {
//         this.getWeather(document.querySelector('.search-bar').value); 
//     }    
// }              


// // Initialize a new weather object 
// const weather = new Weather(); 

// // Event listener function for search button 
// document.querySelector('.search-button').addEventListener('click', function () {
//     weather.search();
// }); 

// document.querySelector('.search').addEventListener('keyup', function(event) {
//     if (event.key == 'Enter') {
//        weather.search();  
//     }
// })

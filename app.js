// Initialize weather and UI
const Weather = new weather; 

const ui = new UI;  

// Get respective elements 
const setLocation = document.querySelector('.modal-search-location'); 
const locationBtn = document.querySelector('.modal-search-btn'); 
const modalLocation = document.querySelector('.modal-location'); 
const description2 = document.querySelector('.description');  
const feels2_like = document.querySelector('.feels-like'); 
const main_content_location = document.querySelector('.main-content-location'); 
const main_content_icons = document.querySelector('.main-content-icon'); 
const wind_section = document.getElementById('wind-section');  
const humidity_section = document.querySelector('.humidity-section'); 
const visibility_section = document.querySelector('.visibility-section'); 
const pressure_section = document.querySelector('.pressure-section');  
const longlat_section = document.querySelector('.longlat-section'); 
const sunrisunset_section = document.querySelector('.sunrisunset-section');  
 


// Event listeners 
locationBtn.addEventListener('click', displayWeather); 

// Functions 
function displayWeather(e) {
     
    // Get location value
    const location = setLocation.value; 
    
    if (location !== "") {
        Weather.getWeather(location)
          .then(data => {
            console.log(data); 
            if ( data.data.cod === "404") {
                console.log('liiiidddddd');  
                ui.displayError();
            } else {  
                ui.showLoader(); 
                
                setTimeout(() => {  
                    ui.removeLoader(); 
                    ui.removeSetLocationModal(); 

                    setLocation.value = "";  

                    // Destructuring from API data
                    const { name } = data.data; 
                    const { temp, feels_like} = data.data.main; 
                    const { description, icon } = data.data.weather[0]; 
                    const { speed } = data.data.wind; 
                    const { visibility } = data.data; 
                    const { humidity } = data.data.main; 
                    const { pressure } = data.data.main; 
                    const { lon } = data.data.coord; 
                    const { lat } = data.data.coord; 
                    const { sunrise } = data.data.sys; 
                    const { sunset } = data.data.sys; 

                    // Main content section 
                    modalLocation.innerHTML = `${name}`;  
                    main_content_location.innerHTML = `${name}`.toUpperCase(); 
                    feels2_like.innerHTML = `Feels like: ${feels_like}&degC`; 
                    description2.innerHTML = `Temp: ${temp}&degC`;  
                    main_content_icons.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;  
                    
                    // Other content section 
                    wind_section.innerHTML = `Wind:<br><br>${speed}`;  
                    humidity_section.innerHTML = `Humidity:<br><br>${humidity}`; 
                    visibility_section.innerHTML = `Visibility:<br><br>${visibility}`;
                    pressure_section.innerHTML = `Pressure:<br><br>${pressure}`; 
                    longlat_section.innerHTML = `Longitude:<br>${lon}<br>Latitude:<br>${lat}`;  
                    sunrisunset_section.innerHTML = `Sunrise:<br>${window.moment(sunrise).format('hh:mm a')}<br>Sunset:<br>${window.moment(sunset).format('hh:mm a')}`; 
                }, 3000)  
            }
          })
    }
    
    e.preventDefault(); 
} 

    

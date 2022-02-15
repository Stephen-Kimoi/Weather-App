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
const main_content_icons = document.querySelector('.main_content_icons'); 
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

    // Setting the time value 
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']; 
    const months = ['Jan','Feb', 'Mar','Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']; 

    // const time = new Date();  
    // const month = time.getMonth(); 
    // const day = time.getDay(); 
    // const hour = time.getHours(); 
    // const minutes = time.getMinutes(); 
    // const seconds = time.getSeconds();  
    // const date = time.getDate();
    // const hoursTo12HrFormat = hour >= 13 ? hour % 12 : hour; 

    modal_time.innerHTML = `${days[day]} ${months[month]} ${date}th ${hoursTo12HrFormat}:${minutes}`; 
    
    console.log(date); 
    console.log(month, day, hour, minutes, seconds);    
    
    if (location !== "") {
        Weather.getWeather(location)
          .then(data => {
            console.log(data); 
            if (Response.status === 404 ) {
 
            } else {  
                ui.showLoader(); 
                
                setTimeout(() => {  
                    ui.removeLoader(); 
                    ui.removeSetLocationModal(); 

                    setLocation.value = "";  

                    const { name } = data.data; 
                    const { temp, humidity, feels_like, pressure, lon, lat } = data.data.main; 
                    const { description, icon } = data.data.weather[0]; 
                    const { speed } = data.data.wind; 
                    const { visibility } = data.data; 
                    const { sunrise, sunset } = data.data.sys;  

                    modalLocation.innerHTML = `${name}`;  
                    main_content_location.innerHTML = `${name}`.toUpperCase(); 
                    feels2_like.innerHTML = `Feels like: ${feels_like}&degC`; 
                    description2.innerHTML = `Temp: ${temp}&degC`;  
                    main_content_icons.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' alt='icon for weather'`;  
                    wind_section.innerHTML = 'I am loved'; 
                    wind_section.innerHTML = `Wind speed:<br>${speed}`;  
                    humidity_section.innerHTML = `<h3>Humidity:<br>${humidity}</h3>`; 
                    visibility_section.innerHTML = `<h3>Visibility:<br>${visibility}</h3>`; 
                    pressure_section.innerHTML = `<h3>Pressure:<br>${pressure}</h3>`; 
                    longlat_section.innerHTML = `<h3>Longitude:${lon}<br>Latitude:${lat}</h3>`; 
                    sunrisunset_section.innerHTML = `<h3>Sunrise:${sunrise}<br>Sunset:${sunset}</h3>`; 
                }, 3000)  
            }
          })
    }
    
    e.preventDefault(); 
} 

    

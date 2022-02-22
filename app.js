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

    // // Setting the time value 
    // const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']; 
    // const months = ['Jan','Feb', 'Mar','Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']; 

    // // const time = new Date();  
    // // const month = time.getMonth(); 
    // // const day = time.getDay(); 
    // // const hour = time.getHours(); 
    // // const minutes = time.getMinutes(); 
    // // const seconds = time.getSeconds();  
    // // const date = time.getDate();
    // // const hoursTo12HrFormat = hour >= 13 ? hour % 12 : hour; 

    // modal_time.innerHTML = `${days[day]} ${months[month]} ${date}th ${hoursTo12HrFormat}:${minutes}`; preventi  
    
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

                    // Destructuring from API data
                    const { name } = data.data; 
                    const { temp, feels_like} = data.data.main; 
                    const { description, icon } = data.data.weather[0]; 
                    const { speed } = data.data.wind; 
                    const { visibility } = data.data.visibility; 
                    const { humidity } = data.data.main.humidity; 
                    const { pressure } = data.data.main.pressure; 
                    const { lon } = data.data.coord.lon; 
                    const { lat } = data.data.coord.lat; 
                    const { sunrise } = data.data.sys.sunrise; 
                    const { sunset } = data.data.sys.sunset; 

                    // Main content section 
                    modalLocation.innerHTML = `${name}`;  
                    main_content_location.innerHTML = `${name}`.toUpperCase(); 
                    feels2_like.innerHTML = `Feels like: ${feels_like}&degC`; 
                    description2.innerHTML = `Temp: ${temp}&degC`;  
                    main_content_icons.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;  
                    
                    // Other content section 
                    wind_section.innerHTML = `Wind:<br>${speed}`;  
                    humidity_section.innerHTML = `Humidity:<br>${humidity}`; 
                    visibility_section.innerHTML = `Visibility:<br>${visibility}`;
                    pressure_section.innerHTML = `Pressure:<br>${pressure}`;
                    longlat_section.innerHTML = `Longitude:<br>${lon}<br>Latitude:${lat}`;
                    sunrisunset_section.innerHTML = `Sunrise:<br>${sunrise}<br>Sunset${sunset}`;
                }, 3000)  
            }
          })
    }
    
    e.preventDefault(); 
} 

    

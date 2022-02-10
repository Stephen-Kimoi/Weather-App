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
 


// Event listeners 
locationBtn.addEventListener('click', displayWeather); 

// Functions 
function displayWeather(e) {
     
    const location = setLocation.value; 
    
    if (location !== "") {
        Weather.getWeather(location)
          .then(data => {
              console.log(data); 
            if (Response.status === 404 ) {
                console.log(1234); 
            } else {  
                ui.showLoader(); 

                setTimeout(() => { 
                    ui.removeLoader(); 

                    setLocation.value = "";  

                    const { name } = data.data; 
                    const { temp, humidity, feels_like } = data.data.main; 
                    const { description, icon } = data.data.weather[0]; 

                    modalLocation.innerHTML = `${name}`;  
                    main_content_location.innerHTML = `${name}`.toUpperCase(); 
                    feels2_like.innerHTML = `Feels like: ${feels_like}&degC`; 
                    description2.innerHTML = `Temp: ${temp}&degC`;  
                    main_content_icons.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' alt='icon for weather'`; 
                }, 3000)  
            }
          })
    }
    
    e.preventDefault(); 
} 

    

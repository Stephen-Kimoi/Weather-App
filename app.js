// Initialize weather and UI
const Weather = new weather; 

const ui = new UI;  

// Get respective elements 
const setLocation = document.querySelector('.modal-search-location'); 
const locationBtn = document.querySelector('.modal-search-btn'); 
const modalLocation = document.querySelector('.modal-location'); 
const description = document.querySelector('.description');  
const feels_like = document.querySelector('.feels-like'); 

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
                setLocation.value = "";  

                const { name } = data.data; 
                const { feels_like } = data.data.main; 
                const { description } = data.data.weather[0]; 

                modalLocation.innerHTML = `${name}`;  
                description.innerHTML = `${description}`; 
                feels_like.innerHTML = `${feels_like}`; 
            }
          })
    }
    
    e.preventDefault(); 
} 

    

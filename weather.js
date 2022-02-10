
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
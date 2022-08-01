// Get the targeted elements 
const setLocationBtn = document.getElementById('setLocation-btn');  
const setLocationModal = document.getElementById('setLocation-modal');  
const modalClose = document.getElementById('modal-close');  
const menu_btn = document.querySelector('.hamburger');  
const nav_hamburger = document.querySelector('.nav-hamburger'); 
const modal_search_btn = document.querySelector('.modal-search-btn'); 
const modal_time = document.querySelector('.modal-time'); 
const modal_loader = document.querySelector('.modal-loader'); 
const modal_loader_info = document.querySelector('.modal-loader-info'); 
const set_location_modal = document.querySelector('.setLocation-modal'); 
const close_nav = document.querySelector('.close-nav');   
const date_section = document.querySelector('.date-section'); 
const time_section = document.querySelector('.time-section'); 

// Adding dates  
const m = moment(); 

function getTime () {
  // date_section.innerHTML = `${m.format('MMM Do YY')}`; 
  // time_section.innerHTML = `${m.format('LTS')}`;  

  const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']; 
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; 


  const time = new Date; 
  const seconds = time.getSeconds(); 
  const hours = time.getHours(); 
  const minutes = time.getMinutes(); 
  const day = time.getDay(); 
  const month = time.getMonth();  
  const date = time.getDate(); 

  date_section.innerHTML = `${days[day]} ${date}nd ${months[month]}`; 
  time_section.innerHTML = `${hours}:${minutes}:${seconds}`; 
} 

setInterval(getTime, 1000); 



// UI object
class UI {
    constructor() {
        
    } 

    displayError() {  
        this.showLoader(); 
        setTimeout( () => {
        modal_search_btn.style.visibility = 'visible'; 
        modal_loader_info.style.display = 'block';
        modal_search_btn.innerText = 'Reload';  
        modal_loader_info.innerHTML = 'Sorry your location could not be found. Kindly reload.'; 
        modalLocation.innerHTML = 'ERROR!'; 
        setLocation.value = ''; 
        modal_search_btn.addEventListener( 'click', () => {
            console.log(1234)
            modal_loader_info.style.display = 'none';
            modal_search_btn.innerText = 'Search';  
            modalLocation.innerHTML = 'SET LOCATION'; 
        })
    }, 3000)
    }

    showLoader() {
        modalLocation.innerHTML = 'LOADING..'; 
        modal_search_btn.style.visibility = 'hidden'; 
        modal_loader_info.style.display = 'block'; 
    } 

    removeLoader() {
        modal_search_btn.style.visibility= 'visible'; 
        // modal_time.innerHTML = `${m.format('LT')}`; 
        modal_loader_info.style.display = 'none'; 
    } 

    removeSetLocationModal() {
        setLocationModal.classList.remove('show'); 
    }


}



// Event listeners 
setLocationBtn.addEventListener('click', () => {
   setLocationModal.classList.add('show');  
   nav_hamburger.classList.remove('open'); 
}) 

modalClose.addEventListener('click', () => {
    setLocationModal.classList.remove('show')
}) 

menu_btn.addEventListener('click', () => {
    nav_hamburger.classList.toggle('open'); 
})

// set_location_modal.addEventListener('click', () => {
//     if(className === 'modal-info') {
 
//     } else {
//         setLocationModal.classList.remove('show'); 
//     } 
// })



close_nav.addEventListener('click', () => {
    nav_hamburger.classList.remove('open'); 
})


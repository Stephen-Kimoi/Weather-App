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

// Initializing moment 
const m = moment(); 

console.log(m.toString()); 
console.log(m.format('llll')); 

// UI object
class UI {
    constructor() {
        
    } 

    showLoader() {
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

set_location_modal.addEventListener('click', () => {
    if(className === 'modal-info') {
 
    } else {
        setLocationModal.classList.remove('show'); 
    } 
})

close_nav.addEventListener('click', () => {
    nav_hamburger.classList.remove('open'); 
})

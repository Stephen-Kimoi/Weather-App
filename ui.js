class UI {
    constructor() {
        
    } 

    showLoader() {
        console.log("Showing...")
    } 

    removeLoader() {
        console.log('Removed....')
    }
}

// Get the targeted elements 
const setLocationBtn = document.getElementById('setLocation-btn');  
const setLocationModal = document.getElementById('setLocation-modal');  
const modalClose = document.getElementById('modal-close');  
const menu_btn = document.querySelector('.hamburger');  
const nav_hamburger = document.querySelector('.nav-hamburger'); 

// Event listeners for the popup function 
setLocationBtn.addEventListener('click', () => {
   setLocationModal.classList.add('show');    
}) 

modalClose.addEventListener('click', () => {
    setLocationModal.classList.remove('show')
}) 

// Event listeners for the hamburger btn 
menu_btn.addEventListener('click', () => {
    nav_hamburger.classList.toggle('open'); 
})


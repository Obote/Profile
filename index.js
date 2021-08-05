const ham = document.getElementById('hamburger'); 
const men = document.getElementById('menu-items');
const ul = document.getElementById('items');
const mg = document.querySelector("mg");

ham.addEventListener('click',() => {
     men.classList.toggle('bgShow');
    //  ham.innerHTML = "<button type='button'>X</button>";
     
}); 

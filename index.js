const ham = document.getElementById('hamburger'); 
const men = document.getElementById('menu-items');
const ul = document.getElementById('items');


ham.addEventListener('click',() => {
     men.classList.toggle('bgShow');
            
}); 


men.addEventListener('click',() => {
     men.classList.remove('bgShow');
});
const ham = document.getElementById('hamburger'); 
const men = document.getElementById('menu-items');
const ul = document.getElementById('items');
const mg = document.querySelector("mg");
const btn = document.querySelector('x');

ham.addEventListener('click',() => {
     men.classList.toggle('bgShow');
       
}); 
 
btn.onClick = () => {
    men.style.display = 'none';
    ul.style.display = 'none';
}
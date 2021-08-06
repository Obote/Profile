const ham = document.getElementById('hamburger');
const men = document.getElementById('menu-items');

ham.addEventListener('click', () => {
  men.classList.toggle('bgShow');
});

men.addEventListener('click', () => {
  men.classList.remove('bgShow');
});

// // popup 

// const projects = [
//   {
//     title: 'About the project #1',
//     description: 'Descript',
//     tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
//     imgUrl: './assets/images/bg.jpg',
//   },
//   {
//     title: 'About the project #2',
//     description: 'Description of the project, date and languages',
//     tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
//     imgUrl: './assets/images/bg.jpg',
//   },
//   {
//     title: 'About the project #3',
//     description: 'Description of the project, date and languages',
//     tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
//     imgUrl: './assets/images/bg.jpg',
//   },
//   {
//     title: 'About the project #4',
//     description: 'Description of the project, date and languages',
//     tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
//     imgUrl: './assets/images/bg.jpg',
//   },
// ];




form validation

const expresions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const stat = {
  name: false,
  email: false,
};

const forms = document.getElementById('mobileForm');
const inputs = document.querySelectorAll('#mobileForm input');

const valForm = (e) => {
  switch (e.target.name){
    case 'name':
      if (expresions.name.test(e.target.value)){
        document.getElementById('name').classList.remove('incorrectName');
        document.getElementById('name').classList.add('correctName');
        document.querySelector('#mobile-form .nameErorr').classList.remove('nameErorrActive');
        stat.name = true;
      }else {
        document.getElementById('name').classList.add('incorrectName');
        document.getElementById('name').classList.remove('correctName');
        document.querySelector('#mobile-form .nameErorr').classList.add('nameErorrActive');
        stat.name = true;
      }
  }
};
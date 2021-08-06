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
const form1 = document.getElementById('desktopForm');
const emailInput = document.getElementById('mail1');

form1.addEventListener('submit', (event) => {
  const validMail = /[A-Z]/g;

  if (validMail.test(emailInput.value)) {
    document.getElementById('lowerCase1').classList.toggle('formShow');
    event.preventDefault();
  } else if (!document.getElementById('lowerCase1').className === 'mailErorr formShow') {
    document.getElementById('lowerCase1').classList.toggle('formShow');
  }
});
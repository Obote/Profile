const ham = document.getElementById('hamburger');
const men = document.getElementById('menu-items');

ham.addEventListener('click', () => {
  men.classList.toggle('bgShow');
});

men.addEventListener('click', () => {
  men.classList.remove('bgShow');
});

// email validation
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
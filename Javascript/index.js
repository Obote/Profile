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

// local storage
const form = document.getElementById('desktopForm');
const userFormValues = {};
if ('userData' in localStorage) {
  const parsedData = JSON.parse(localStorage.userData);
  form.elements[0].value = parsedData.firstName;
  form.elements[1].value = parsedData.lastName;
  form.elements[2].value = parsedData.userEmail;
  form.elements[3].value = parsedData.userMessage;
}

const saveValueLocally = () => {
  localStorage.setItem('userData', JSON.stringify(userFormValues));
};

const updateFormValues = () => {
  userFormValues.firstName = form.elements[0].value;
  userFormValues.lastName = form.elements[1].value;
  userFormValues.userEmail = form.elements[2].value;
  userFormValues.userMessage = form.elements[3].value;
  saveValueLocally();
};

form.addEventListener('input', updateFormValues);

//pop up

const projects = [
  {
    name: 'The one',
    imgUrl: './assets/images/bg.jpg',
    tech: ['HTML', 'Ruby on rails','css'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'The two',
    imgUrl: './assets/images/bg.jpg',
    tech: ['HTML', 'Ruby on rails','css'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'The three',
    imgUrl: './assets/images/bg.jpg',
    tech: ['HTML', 'Ruby on rails','css'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'The four',
    imgUrl: './assets/images/bg.jpg',
    tech: ['HTML', 'Ruby on rails','css'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
];
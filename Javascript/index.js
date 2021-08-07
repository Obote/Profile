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

const modal = document.getElementById('myModal');
const btn = document.getElementById('project-button');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

const project = [
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
];

const modalFunction = (array) => {
  const root = document.getElementById('myModal');
  array.map((element) => {
    const title = document.createElement('DIV');
    title.setAttribute('class', 'title');
    title.textContent = `${element.title}`;
    root.appendChild(title);

    const image = document.createElement('DIV');
    image.setAttribute('class', 'decription');
    image.textContent = `${element.image}`;
    root.appendChild(image);

    const decription = document.createElement('DIV');
    decription.setAttribute('class', 'decription');
    decription.textContent = `${element.description}`;
    root.appendChild(decription);

    const tech = document.createElement('DIV');
    tech.setAttribute('class', 'tech');
    tech.textContent = `${element.tech}`;
    root.appendChild(tech);
  });
};

modalFunction(project);
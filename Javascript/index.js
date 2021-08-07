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
  } else if (
    !document.getElementById('lowerCase1').className === 'mailErorr formShow'
  ) {
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

const projects = [
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: './assets/images/Portfolio.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
];

const btnsM = document.querySelectorAll('.buttonMobile');
const btns = document.querySelectorAll('.buttons');
const divProject = document.createElement('div');

function addEventListenerList() {
  for (let i = 0; i < btns.length; i += 1) {
    btns[i].addEventListener('click', (event) => {
      const projectId = event.target.id;
      divProject.id = 'modal';
      divProject.className = 'modal flex';
      document.querySelector('.overal').style.display = 'flex';

      let techHTML = '';
      for (let l = 0; l < projects[i].tech.length; l += 1) {
        techHTML += `<li class="modal-language">${projects[i].tech[l]}</li>`;
      }

      divProject.innerHTML = '<section class="modal-header flex">'
        + '<div class="top-side-modal flex">'
        + `<p>${projects[projectId].title}</p>`
        + '<a class="close-popup">&times;</a>'
        + '</div>'
        + '</section>'
        + '<div class="popup-img">'
        + `<img width="330px" src="${projects[projectId].image}" alt="placeholder>`
        + '</div>'
        + '<section class="modal-section">'
        + '<div class="modal-description">'
        + `<p id = "P-description"class="modal-P">${projects[projectId].description}</p>`
        + '</div>'
        + '<div class="modal-div-language flex">'
        + `<ul id="project-list">${techHTML}</ul>`
        + '</div>'
        + '<div class="modal-div-sources flex">'
        + '<button class="modal-buttons">See Live<a href="#"></a></button>'
        + '<button class="modal-buttons">See Source<a href="#"></a></button>'
        + '</div>'
        + '</section>';

      document.getElementById('overal').appendChild(divProject);

      const erase = document.querySelector('.close-popup');
      erase.addEventListener('click', () => {
        document.querySelector('.overal').style.display = 'none';
        divProject.remove();
      });
    });
  }
  for (let ii = 10; ii < btnsM.length; ii += 1) {
    btnsM[ii].addEventListener('click', (event) => {
      const projectId = event.target.id;
      divProject.id = 'modal';
      divProject.className = 'modal flex';
      document.querySelector('.overal').style.display = 'flex';

      let techHTML = '';
      for (let ll = 10; ll < projects[ii].tech.length; ll += 1) {
        techHTML += `<li class="modal-language">${projects[ii].tech[ll]}</li>`;
      }

      divProject.innerHTML = '<section class="modal-header flex">'
        + '<div class="top-side-modal flex">'
        + `<p>${projects[projectId].title}</p>`
        + '<a class="close-popup">&times;</a>'
        + '</div>'
        + '</section>'
        + '<div class="popup-img">'
        + `<img width="330px" src="${projects[projectId].image}" alt="placeholder>`
        + '</div>'
        + '<section class="modal-section">'
        + '<div class="modal-description">'
        + `<p id = "P-description"class="modal-P">${projects[projectId].description}</p>`
        + '</div>'
        + '<div class="modal-div-language flex">'
        + `<ul id="project-list">${techHTML}</ul>`
        + '</div>'
        + '<div class="modal-div-sources flex">'
        + '<button class="modal-buttons">See Live<a href="#"></a></button>'
        + '<button class="modal-buttons">See Source<a href="#"></a></button>'
        + '</div>'
        + '</section>';

      document.getElementById('overal').appendChild(divProject);

      const erase = document.querySelector('.close-popup');
      erase.addEventListener('click', () => {
        document.querySelector('.overal').style.display = 'none';
        divProject.remove();
      });
    });
  }
}
addEventListenerList();

// const modalFunction = (array) => {
//   const root = document.getElementById('myModal');
//   array.map((element) => {
//     const title = document.createElement('DIV');
//     title.setAttribute('class', 'title');
//     title.textContent = `${element.title}`;
//     root.appendChild(title);

//     const image = document.createElement('DIV');
//     image.setAttribute('class', 'image');
//     image.textContent = `${element.image}`;
//     root.appendChild(image);

//     const decription = document.createElement('DIV');
//     decription.setAttribute('class', 'decription');
//     decription.textContent = `${element.description}`;
//     root.appendChild(decription);

//     const tech = document.createElement('DIV');
//     tech.setAttribute('class', 'tech');
//     tech.textContent = `${element.tech}`;
//     root.appendChild(tech);
//   });
// };

// modalFunction(project);

import Pizza from './img/pizza.jpg';
import Chef from './img/chef-img.jpg';

const content = document.querySelector('#content');

export function createHeader(){
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  content.appendChild(header);

  let headerText = ['Home', 'Menu', 'Contact Us'];
  for (let i = 0; i < headerText.length; i++){
    let headerElem = document.createElement('div');
    headerElem.classList.add('header__text');
    headerElem.textContent = headerText[i];
    header.appendChild(headerElem);
  }
}

export function createMain(){
  const background = document.createElement('div');
  background.classList.add('bg');
  content.appendChild(background);
  /* Добавляем картинку на фон */
  let backgroundImg = document.createElement('img');
  backgroundImg.classList.add('bg-image');
  const myPizza = new Image();
  myPizza.src = Pizza;
  background.appendChild(myPizza);

  let box = document.createElement('div');
  box.classList.add('box');
  background.appendChild(box);

  let bgBox = document.createElement('div');
  bgBox.classList.add('bgBox');
  box.appendChild(bgBox);
}

function createTopMain(){
  const bgbox = document.querySelector('.bgBox');
  let boxHeader = document.createElement('h2');
  boxHeader.textContent = 'World best known';
  bgbox.appendChild(boxHeader);

  let smallText = document.createElement('p');
  smallText.textContent = 'Neapolitan pizza';
  smallText.classList.add('small-text');
  bgbox.appendChild(smallText);

  const myChef = new Image();
  myChef.src = Chef;
  bgbox.appendChild(myChef);

  let description = document.createElement('p');
  description.classList.add('smalltext');
  description.textContent = 'by chef Maurizio Pavorotti';
  bgbox.appendChild(description);
}

function createName(){
  let nameDiv = document.createElement('div');
  nameDiv.classList.add('nameDiv');
  content.appendChild(nameDiv);
  let name = document.createElement('h1');
  name.textContent = 'noi siamo uomini';
  nameDiv.appendChild(name);
}

export function createHomePage(){
  createHeader();
  createName();
  createMain();
  createTopMain();
}
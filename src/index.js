import {createMenuPage} from './menu';
import {createContactPage} from './contact';
import {createHomePage} from './home';
import './style.css';
const content = document.querySelector('#content');

createHomePage();
addListeners();

function addListeners(){
  let buttons = document.getElementsByClassName('header__text');
  for (let i = 0; i < 3; i++){
    buttons[i].addEventListener('click', (event) => {
      changePage(event);
  })
}
};

const clearAllChilds = () => {
  while (content.firstChild){
    content.removeChild(content.lastChild);
  }
};

function changePage(event){
switch (event.target.textContent){
  case 'Menu': 
      if (document.querySelector('#menu') == undefined){
          clearAllChilds();
          createMenuPage();
          addListeners();
          break
    } else{
          break
    }

  case 'Home': 
      if (document.querySelector('.nameDiv') == undefined){
            clearAllChilds();
            createHomePage();
            addListeners();
          break
    } else{
          break
    }
    
  case 'Contact Us':
      if (document.querySelector('#info_box') == undefined){
          clearAllChilds();
          createContactPage();
          addListeners();
          break
      } else{
          break
      }
}
}
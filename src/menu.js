import {createHeader} from './home';
import Pizza from './img/pizza.jpg';

const content = document.querySelector('#content');

function changeMenuColor(){
    let headItems = document.getElementsByClassName('header__text')[1];
    if (headItems.textContent === 'Menu'){
        headItems.style.backgroundColor = '#ef4444';
    }
}

function createBackground(){
    const background = document.createElement('div');
    background.classList.add('bg');
    content.appendChild(background);

    const myPizza = new Image();
    myPizza.src = Pizza;
    background.appendChild(myPizza);

    let menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menuDiv');
    content.appendChild(menuDiv);

    let menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menuDiv.appendChild(menu);
}

function createMenu(){
    const menu = document.querySelector('#menu');
    let header = document.createElement('h2');
    header.classList.add('menu_header');
    header.textContent = 'noi siamo uomini';
    menu.appendChild(header);

    /* Список наименований в меню */
    let menu_items = [{name: 'Pizza Marinara', ingridients: 'tomato, garlic, oregano and extra virgin olive oil, tomato sauce.', price: '14.95\u20AC'},
{name: 'Pizza Margherita', ingridients: 'tomato, buffalo mozzarella from Campania, basil and extra virgin olive oil.', price: '19.95\u20AC'}, 
{name: 'Pizza Pepperoni', ingridients: 'spice pepperoni, tomato, mozzarella, home-made tomato sauce.', price: '15.95\u20AC'}, 
{name: 'Pizza Chorrizzo', ingridients: 'mozzarella, spice chorrizzo, sweet pepper, tomato sauce.', price: '14.95\u20AC'}, 
{name: 'Pizza Karbonara', ingridients: 'bacon, chedder and parmesan cheese, mozzarella, tomato, garlic, alfredo sauce.', price: '18.95\u20AC'}, 
{name: 'Pizza Pesto', ingridients: 'chicken, pesto sauce, feta cheese, tomato, mozzarella, alfredo sauce.', price: '17.95\u20AC'}];

    /* Создаем объект в меню */
    for (let i = 0; i < 6; i++){
        let elem = document.createElement('div');
        elem.classList.add('menu_item');
        elem.classList.add(`${i+1}`);
        menu.appendChild(elem);
        // div с названием и ингридиентами
        let item_descr = document.createElement('div');
        item_descr.classList.add('item_desciption');
        elem.appendChild(item_descr);
        // Название пиццы
        let item_name = document.createElement('p');
        item_name.classList.add('item_name');
        item_name.textContent = menu_items[i].name;
        item_descr.appendChild(item_name);
        // Ингридиенты пиццы
        let item_ingrid = document.createElement('p');
        item_ingrid.classList.add('item_ingridients');
        item_ingrid.textContent = menu_items[i].ingridients;
        item_descr.appendChild(item_ingrid);
        // Цена за пиццу
        let item_price = document.createElement('p');
        item_price.classList.add('item_price');
        item_price.textContent = menu_items[i].price;
        elem.appendChild(item_price);

    }
}

export function createMenuPage(){
    createHeader();
    changeMenuColor();
    createBackground();
    createMenu();
}

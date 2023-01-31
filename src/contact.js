import {createHeader} from './home';
import RestInside from './img/rest-inside.jpg';
import RestOutside from './img/restaurant.jpg';
const content = document.querySelector('#content');

function changeMenuColor(){
    let headItems = document.getElementsByClassName('header__text');
    if (headItems[2].textContent === 'Contact Us'){
        headItems[2].style.backgroundColor = '#ef4444';
    }
    headItems[0].style.backgroundColor = 'green';
}

function createInfo(){
    const obDiv = document.createElement('div');
    obDiv.setAttribute('id', 'info_div');
    content.appendChild(obDiv);

    let info_box = document.createElement('div');
    info_box.setAttribute('id', 'info_box');
    obDiv.appendChild(info_box);

    let info = document.createElement('div');
    info.setAttribute('id', 'info');
    info_box.appendChild(info);

    let info_head = document.createElement('h3');
    info_head.classList.add('info_head');
    info_head.textContent = 'For table reservation, delivery order or preorder';
    info.appendChild(info_head);

    let tel_cont = document.createElement('a');
    tel_cont.setAttribute('href', 'tel:79138421746');
    tel_cont.textContent = 'Call - 7 913 842 17 46';
    info.appendChild(tel_cont);

    let bus_head = document.createElement('h3');
    bus_head.textContent = 'For business needs';
    info.appendChild(bus_head);
    let bus_cont = document.createElement('a');
    bus_cont.setAttribute('href', 'NoiSiamoUomini@business.gmail');
    bus_cont.textContent = 'Send your message to NoiSiamoUomini@business.gmail';
    info.appendChild(bus_cont);

    const restInside = new Image();
    restInside.src = RestInside;
    restInside.classList.add('rest_small_img');
    let insDiv = document.createElement('div');
    insDiv.appendChild(restInside);
    info.appendChild(insDiv);

    let pictureDiv = document.createElement('div');
    info_box.appendChild(pictureDiv);

    const restOutside = new Image();
    restOutside.src = RestOutside;
    restOutside.classList.add('rest_img');
    pictureDiv.appendChild(restOutside);
}

function addingMap(){
    content.style.overflow = 'scroll';

    let obDiv = document.querySelector('#info_div');
    let map_div = document.createElement('div');
    map_div.setAttribute('id', 'map_box');

    obDiv.appendChild(map_div);
    let map_header = document.createElement('h2');
    map_header.textContent = 'You can find us here';
    map_div.appendChild(map_header);

    let map = document.createElement('div');
    map.setAttribute('id', 'map');
    map_div.appendChild(map);

    let mapPic = document.createElement('iframe');
    mapPic.setAttribute('src', 'https://yandex.ru/map-widget/v1/?um=constructor%3A16d84239fab37fc08476c446d23464472eedf39a29dfd54a11eb9f4788640941&amp;source=constructor');
    mapPic.setAttribute('framgeborder', '0');
    mapPic.classList.add('map_conf');
    map.appendChild(mapPic);
}

export function createContactPage(){
    createHeader();
    changeMenuColor();
    createInfo();
    addingMap();
}


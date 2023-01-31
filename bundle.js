(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([e.id,"*{\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-size: 62.5%;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n#content{\r\n    overflow: hidden;\r\n}\r\n\r\n#header{\r\n    display: flex;\r\n    font-size: 4rem;\r\n    width: 100%;\r\n    justify-content: center;\r\n    \r\n    position: absolute;\r\n    z-index: 3;\r\n    background-color: #fff;\r\n}\r\n\r\n.header__text{\r\n    padding: 2rem 4rem;\r\n    transition: 0.4s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.header__text:hover{\r\n    background-color:#ef4444;\r\n    opacity: 80%;\r\n}\r\n\r\ndiv.bg > img{\r\n    width: 100%;\r\n    height: 100vh;\r\n    object-fit: cover;\r\n    position: absolute;\r\n    top: 0px;\r\n\r\n}\r\n\r\n.nameDiv{\r\n    position: absolute;\r\n    z-index: 4;\r\n    top: 10rem;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n.nameDiv > h1{\r\n    color: #ef4444;\r\n    font-size: 10rem;\r\n}\r\n\r\n.box{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.bgBox{\r\n    position: absolute;\r\n    top: 25rem;\r\n    width: 50rem;\r\n    height: 60rem;\r\n    background-color: rgba(0,0,0, 0.7);\r\n    z-index: 4;\r\n    padding: 2rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    border-radius: 0.4rem;\r\n}\r\n\r\ndiv.bgBox > img{\r\n    width: 30rem;\r\n    height: 30rem;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n    margin: 1rem 0;\r\n}\r\n\r\np, h1, h2{\r\n    color: #fff;\r\n}\r\n\r\np{\r\n    font-size: 3.5rem;\r\n    font-style: italic;\r\n}\r\n\r\nh2{\r\n    font-size: 5rem;\r\n}\r\n\r\n/* Стили для меню */\r\n\r\n#menuDiv{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#menu{\r\n    position: absolute;\r\n    top: 12.5rem;\r\n    background-color: rgba(255,255,255, 0.97);\r\n    width: 40%;\r\n    text-align: center;\r\n    padding: 1rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.menu_header{\r\n    color: black;\r\n    font-style: italic;\r\n}\r\n\r\n.menu_item:nth-child(2){\r\n    padding-top: 3rem;\r\n    border-top: 2px solid #eab308;\r\n}\r\n\r\n.menu_item{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    text-align: start;\r\n    align-items: center;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.item_desciption{\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 60%;\r\n}\r\n\r\n.item_desciption > p, .item_price{\r\n    font-size: 2rem;\r\n    color: black;\r\n}\r\n\r\n.item_name{\r\n    font-weight: 700;\r\n    line-height: 1.7;\r\n}\r\n\r\n.item_ingridients{\r\n    font-style: normal;\r\n}\r\n\r\n.item_price{\r\n    font-weight: 700;\r\n    font-size: 2.2rem;\r\n}\r\n\r\n/* Стили на Contact Us */\r\n\r\n#info_div{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 6.5rem;\r\n}\r\n\r\n#info_box{\r\n    background-color: #fff;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding-top: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#info{\r\n    width: 50%;\r\n    padding: 5rem 0 0 0;\r\n}\r\n\r\nh3{\r\n    color: black;\r\n    font-size: 3rem;\r\n    line-height: 2;\r\n}\r\n\r\na{\r\n    color: black;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\nimg.rest_small_img{\r\n    object-fit: cover;\r\n    width: 50rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.rest_img{\r\n    max-height: 50rem;\r\n    margin-top: 10rem;\r\n    object-fit: cover;\r\n}\r\n\r\n/* Стили для карты */\r\n\r\n#map_box{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    margin-top: 2rem;\r\n}\r\n\r\n#map_box > h2{\r\n    color: black;\r\n}\r\n\r\n#map{\r\n    width: 100%;\r\n    padding: 5rem;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.map_conf{\r\n    width: 100%;\r\n    height: 650px;\r\n}\r\n\r\n/* Добавление анимации */\r\n.slide-left{\r\n    transform: translate(-10vw);\r\n    transform: scale(1.1);\r\n    transition: 1s ease;\r\n}\r\n\r\n.slide-right{\r\n    transform: translate(10vw); \r\n    transform: scale(1.1);\r\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,m="".concat(s," ").concat(l);o[s]=l+1;var p=t(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var f=i(u,r);r.byIndex=c,n.splice(c,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=t(o[a]);n[c].references--}for(var d=r(e,i),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"59fd2da6aba95dffad7a.jpg",n=t.p+"fa3612369751ade9fa1a.jpg",r=document.querySelector("#content");function i(){const e=document.createElement("header");e.setAttribute("id","header"),r.appendChild(e);let n=["Home","Menu","Contact Us"];for(let t=0;t<n.length;t++){let r=document.createElement("div");r.classList.add("header__text"),r.textContent=n[t],e.appendChild(r)}}function o(){i(),function(){let e=document.createElement("div");e.classList.add("nameDiv"),r.appendChild(e);let n=document.createElement("h1");n.textContent="noi siamo uomini",e.appendChild(n)}(),function(){const n=document.createElement("div");n.classList.add("bg"),r.appendChild(n),document.createElement("img").classList.add("bg-image");const t=new Image;t.src=e,n.appendChild(t);let i=document.createElement("div");i.classList.add("box"),n.appendChild(i);let o=document.createElement("div");o.classList.add("bgBox"),i.appendChild(o)}(),function(){const e=document.querySelector(".bgBox");let t=document.createElement("h2");t.textContent="World best known",e.appendChild(t);let r=document.createElement("p");r.textContent="Neapolitan pizza",r.classList.add("small-text"),e.appendChild(r);const i=new Image;i.src=n,e.appendChild(i);let o=document.createElement("p");o.classList.add("smalltext"),o.textContent="by chef Maurizio Pavorotti",e.appendChild(o)}()}const a=document.querySelector("#content");const c=t.p+"e232ae401d0ba9623a2c.jpg",d=t.p+"49abb1ea3dedd0280453.jpg",s=document.querySelector("#content");var l=t(379),m=t.n(l),p=t(795),u=t.n(p),f=t(569),h=t.n(f),g=t(565),b=t.n(g),v=t(216),x=t.n(v),C=t(589),y=t.n(C),w=t(426),_={};_.styleTagTransform=y(),_.setAttributes=b(),_.insert=h().bind(null,"head"),_.domAPI=u(),_.insertStyleElement=x(),m()(w.Z,_),w.Z&&w.Z.locals&&w.Z.locals;const E=document.querySelector("#content");function z(){let e=document.getElementsByClassName("header__text");for(let n=0;n<3;n++)e[n].addEventListener("click",(e=>{S(e)}))}o(),z();const L=()=>{for(;E.firstChild;)E.removeChild(E.lastChild)};function S(n){switch(n.target.textContent){case"Menu":if(null==document.querySelector("#menu")){L(),i(),function(){let e=document.getElementsByClassName("header__text")[1];"Menu"===e.textContent&&(e.style.backgroundColor="#ef4444")}(),function(){const n=document.createElement("div");n.classList.add("bg"),a.appendChild(n);const t=new Image;t.src=e,n.appendChild(t);let r=document.createElement("div");r.setAttribute("id","menuDiv"),a.appendChild(r);let i=document.createElement("div");i.setAttribute("id","menu"),r.appendChild(i)}(),function(){const e=document.querySelector("#menu");let n=document.createElement("h2");n.classList.add("menu_header"),n.textContent="noi siamo uomini",e.appendChild(n);let t=[{name:"Pizza Marinara",ingridients:"tomato, garlic, oregano and extra virgin olive oil, tomato sauce.",price:"14.95€"},{name:"Pizza Margherita",ingridients:"tomato, buffalo mozzarella from Campania, basil and extra virgin olive oil.",price:"19.95€"},{name:"Pizza Pepperoni",ingridients:"spice pepperoni, tomato, mozzarella, home-made tomato sauce.",price:"15.95€"},{name:"Pizza Chorrizzo",ingridients:"mozzarella, spice chorrizzo, sweet pepper, tomato sauce.",price:"14.95€"},{name:"Pizza Karbonara",ingridients:"bacon, chedder and parmesan cheese, mozzarella, tomato, garlic, alfredo sauce.",price:"18.95€"},{name:"Pizza Pesto",ingridients:"chicken, pesto sauce, feta cheese, tomato, mozzarella, alfredo sauce.",price:"17.95€"}];for(let n=0;n<6;n++){let r=document.createElement("div");r.classList.add("menu_item"),r.classList.add(`${n+1}`),e.appendChild(r);let i=document.createElement("div");i.classList.add("item_desciption"),r.appendChild(i);let o=document.createElement("p");o.classList.add("item_name"),o.textContent=t[n].name,i.appendChild(o);let a=document.createElement("p");a.classList.add("item_ingridients"),a.textContent=t[n].ingridients,i.appendChild(a);let c=document.createElement("p");c.classList.add("item_price"),c.textContent=t[n].price,r.appendChild(c)}}(),z();break}break;case"Home":if(null==document.querySelector(".nameDiv")){L(),o(),z();break}break;case"Contact Us":if(null==document.querySelector("#info_box")){L(),i(),function(){let e=document.getElementsByClassName("header__text");"Contact Us"===e[2].textContent&&(e[2].style.backgroundColor="#ef4444"),e[0].style.backgroundColor="green"}(),function(){const e=document.createElement("div");e.setAttribute("id","info_div"),s.appendChild(e);let n=document.createElement("div");n.setAttribute("id","info_box"),e.appendChild(n);let t=document.createElement("div");t.setAttribute("id","info"),n.appendChild(t);let r=document.createElement("h3");r.classList.add("info_head"),r.textContent="For table reservation, delivery order or preorder",t.appendChild(r);let i=document.createElement("a");i.setAttribute("href","tel:79138421746"),i.textContent="Call - 7 913 842 17 46",t.appendChild(i);let o=document.createElement("h3");o.textContent="For business needs",t.appendChild(o);let a=document.createElement("a");a.setAttribute("href","NoiSiamoUomini@business.gmail"),a.textContent="Send your message to NoiSiamoUomini@business.gmail",t.appendChild(a);const l=new Image;l.src=c,l.classList.add("rest_small_img");let m=document.createElement("div");m.appendChild(l),t.appendChild(m);let p=document.createElement("div");n.appendChild(p);const u=new Image;u.src=d,u.classList.add("rest_img"),p.appendChild(u)}(),function(){s.style.overflow="scroll";let e=document.querySelector("#info_div"),n=document.createElement("div");n.setAttribute("id","map_box"),e.appendChild(n);let t=document.createElement("h2");t.textContent="You can find us here",n.appendChild(t);let r=document.createElement("div");r.setAttribute("id","map"),n.appendChild(r);let i=document.createElement("iframe");i.setAttribute("src","https://yandex.ru/map-widget/v1/?um=constructor%3A16d84239fab37fc08476c446d23464472eedf39a29dfd54a11eb9f4788640941&amp;source=constructor"),i.setAttribute("framgeborder","0"),i.classList.add("map_conf"),r.appendChild(i)}(),z();break}}}})()})();
import './styles.css';
import './java-script/switch.js'
import objectData from './menu.json'
import menuTemplate from './templates/galery.hbs';
const markup = menuTemplate(objectData);
const redyRenderingUl = document.querySelector('.js-menu');
redyRenderingUl.insertAdjacentHTML('afterbegin', markup);







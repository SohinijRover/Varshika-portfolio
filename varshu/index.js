import './index.css';
import scroll from './scroll';
import { toggleTheme, addThemeClass } from './toggleTheme.js';
import displayList from './displayList';

const btnHamburger = document.querySelector('.fa-bars');
// const btnTheme = document.querySelector('.fa-moon');

btnHamburger.addEventListener('click', displayList);
// btnTheme.addEventListener('click', toggleTheme);
document.addEventListener('scroll', scroll.scrollUp);

const getBodyClass = localStorage.getItem('class-body-theme');
const getBtnClass = localStorage.getItem('class-btn-theme');
console.log('Body class from localStorage:', getBodyClass);
console.log('Button class from localStorage:', getBtnClass);

const themeToggleButton = document.getElementById('theme-toggle-button');
themeToggleButton.addEventListener('click', toggleTheme);

addThemeClass(getBodyClass, getBtnClass);
toggleTheme;
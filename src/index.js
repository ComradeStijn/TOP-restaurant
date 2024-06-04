import './reset.css';
import './style.css';
import Home from './components/home.js';
import Menu from './components/menu.js'


document.addEventListener("DOMContentLoaded", () => {
    const home = new Home("#content");
    home.renderPage();
});





const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    const menu = new Menu("#content");
    menu.renderPage();
})

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    const home = new Home("#content");
    home.renderPage();
})

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    alert("about");
})
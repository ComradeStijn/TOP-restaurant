import './reset.css';
import './style.css';
import Home from './components/home.js';


document.addEventListener("DOMContentLoaded", () => {
    const home = new Home("#content")
    home.renderPage();
})
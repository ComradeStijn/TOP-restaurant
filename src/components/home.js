import restaurantImage from '../img/restaurant.jpg'

export default class Home {
    constructor(parentElement) {
        this.parentElement = document.querySelector(parentElement);
    }

    renderPage() {
        const toRender = `
        <div id="home-page">
        <h1>Homepage</h1>
        <img src="${restaurantImage}" width="600px" alt="picture of restaurant">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime deleniti facilis nihil fugit veritatis ab inventore perspiciatis itaque saepe cum illum ipsa, libero labore blanditiis quisquam sit! Alias, consequatur.</p>
        </div>
        `

        this.parentElement.innerHTML = toRender;
    }
}
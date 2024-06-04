
export default class About {
    constructor(parentElement) {
        this.parentElement = document.querySelector(parentElement);
    }

    renderPage() {
        const toRender = `
        <div id="about-page">
        <h1>About</h1>
        <p>Please contact us. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem magnam aliquam possimus blanditiis explicabo molestiae id cumque, dolorem, quas officiis asperiores maiores minima eum ad atque velit expedita saepe mollitia.</p>
        <form action="post">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name">
            <label for="message">Message: </label>
            <textarea name="message" id="message" style="resize: none;">Placeholder</textarea>
            <button>Submit</button>
        </form>
        </div>
        `;

        this.parentElement.innerHTML = toRender;
    }
}

export default class Menu {
    constructor(parentElement) {
        this.parentElement = document.querySelector(parentElement);
    }

    renderPage() {
        const toRender = `
        <div id="menu-page">
        <h1>Menu</h1>
        <p>Please try our amazing food. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi optio laboriosam provident cumque, nemo, impedit reiciendis voluptas quam suscipit quos possimus temporibus tenetur recusandae officiis culpa. Dolore corporis maxime alias!</p>
        <table>
            <thead>
                <th>Food</th>
                <th>Price</th>
            </thead>
            <tbody>
                <tr>
                    <td>Pizza</td>
                    <td>15 EUR</td>
                </tr>
                <tr>
                    <td>Pasta</td>
                    <td>10 EUR</td>
                </tr>
            </tbody>
        </table>
        </div>
        `;

        this.parentElement.innerHTML = toRender;
    }
}
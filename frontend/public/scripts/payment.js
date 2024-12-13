import { getCart } from "./util/cart.js";
import { loadBaseElements, loadComprasInfo } from "./util/load.js";

const form = document.querySelector('#billing form');
const inputs = form.querySelectorAll('input,select');
const inputValues = {};
inputs.forEach((input) => {
    if (input.type !== 'submit' && input.type !== 'button') {
        inputValues[input.name] = input.value;
    }
});

document.querySelector(".button.checkout_btn").addEventListener("click", () => {
    const pedidos = getCart();

    const order = {
        address: { ...inputValues },
    };

    console.log(order);
    window.location.href = "./index.html";
});

loadBaseElements();
loadComprasInfo();
import { getCart } from "./util/cart.js";
import { getItemInfo } from "./util/info.js";
import { loadBaseElements } from "./util/load.js";

const subtotalEl = document.getElementById("subtotal");
const freteEl = document.getElementById("frete");
const totalEl = document.getElementById("totalCarrinho");

let subTotal = 0;
let frete = 0;

Promise.allSettled(
    Object.entries(getCart()).map(async ([name, amount]) => {
        const { price } = await getItemInfo(name);

        subTotal += price * amount;
    }),
)
    .then(() => {
        subtotalEl.innerText = "R$ " + subTotal.toFixed(2);
    });

loadBaseElements();

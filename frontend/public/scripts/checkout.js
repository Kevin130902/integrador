import { CartItem } from "./components/cart-item.js";

import { loadBaseElements, loadComprasInfo } from "./util/load.js";
import { setItem, getCart, getItemAmount, removeFromCart } from "./util/cart.js";
import { getItemInfo } from "./util/info.js";

function set(value) {
    localStorage.setItem("frete", value);
}

async function loadCartItems() {
    const el = document.querySelector("#checkout > .grid_col_1");
    el.innerHTML = "";

    for (const [name, amount] of Object.entries(getCart())) {
        const info = await getItemInfo(name);

        el.innerHTML += CartItem(info, amount);

        const itemEl = el.querySelector(".cart_item_qtd_selector_container#" + name);
        const span = itemEl.querySelector("span");

        span.innerText = amount;

        itemEl.querySelector("#decrement").addEventListener("click", () => {
            const newValue = getItemAmount(name) - 1;

            if (newValue === 0) {
                removeFromCart(name);

                loadCartItems();
            }

            setItem(name, newValue);

            span.innerText = newValue;
        });

        itemEl.querySelector("#increment").addEventListener("click", () => {
            const newValue = getItemAmount(name) + 1;
            setItem(name, newValue);

            span.innerText = newValue;
        });
    }

}

document.querySelectorAll(".freight_pricing input[name=frete]").forEach((el, i) => {
    const value = Number(el.value);

    //
    if (i === 0 && !localStorage.getItem("frete")) {
        set(value);
    }

    el.addEventListener("click", () => {
        set(value);
        loadComprasInfo();
    });

    el.checked = Number(localStorage.getItem("frete") ?? 0) === value;
});

loadBaseElements();
loadComprasInfo();
loadCartItems();
import { loadBaseElements } from "./util/load.js";
import { getItemInfo } from "./util/info.js";
import { addToCart } from "./util/cart.js";

const selected = new URL(window.location.href).searchParams.get("p");

if (selected) {
    getItemInfo(selected).then(({ title, price, description }) => {
        const titleEl = document.querySelector("#product-title .product.main-text");
        titleEl.innerHTML = title;

        const [priceEl, promoEl] = document.querySelector(".product_price_container").children;
        priceEl.innerHTML = "R$ " + price.toFixed(2);
        promoEl.innerHTML = `Ou em ate 10x sem juros de R$ ${(price / 10).toFixed(2)} no cartão de credito`;

        const descriptionEl = document.querySelector(".product_description");
        descriptionEl.innerHTML = description;

        const buyBtn = document.querySelector(".shop_btn");
        buyBtn.addEventListener("click", () => {
            const amountEl = document.getElementById("quantity");
            addToCart(selected, Number(amountEl.value));

            window.location.href = "./payment.html";
        });
    });
}

loadBaseElements();
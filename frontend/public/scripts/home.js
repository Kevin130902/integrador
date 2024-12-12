import { CarrouselProduct } from "./components/carrousel-product.js";

import { getItemInfo } from "./util/info.js";
import { loadBaseElements } from "./util/load.js";

const CARROUSEL_CLASS_SET = new Set(["novidades", "mais-vendidos", "promocoes"]);

function loadCarrousels(categories) {
    for (const category of CARROUSEL_CLASS_SET) {
        if (category in categories) {
            const el = document.querySelector("#" + category);
            const names = categories[category];

            console.log(el, names);

            let inner = "";

            names.forEach((name) => {
                const info = getItemInfo(name);

                inner += CarrouselProduct(info);
            });

            el.innerHTML = inner;
        }
    }
}

fetch("../json/carrousel.json")
    .then((res) => res.json())
    .then((categories) => {
        loadCarrousels(categories);
    });

loadBaseElements();
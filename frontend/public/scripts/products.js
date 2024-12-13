import { loadBaseElements, loadProducts } from "./util/load.js";
import { doGetProducts } from "./util/backend.js";

function filterProducts(products) {
    const params = new URL(window.location.href).searchParams;
    if (params.size === 0) {
        return products;
    }

    return products.filter((prod) => {
        const search = params.get("search");
        const category = params.get("category");
        const brand  = params.get("brand");

        if (search !== null && !prod.name.startsWith(search.toLowerCase())) {
            return false;
        }

        if (category !== null && prod.category !== category) {
            return false;
        }

        if (brand !== null && !new Set(brand.split(",")).has(prod.brand)) {
            return false;
        }

        return true;
    });
}

doGetProducts().then((products) => {
    const el = document.querySelector(".section-product-grid");

    return loadProducts(el, filterProducts(products).map((prod) => prod.name));
});

loadBaseElements();
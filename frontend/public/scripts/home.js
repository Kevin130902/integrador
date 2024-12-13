import { loadBaseElements, loadProducts } from "./util/load.js";

const CAROUSEL_CLASS_SET = new Set(["novidades", "mais-vendidos", "promocoes"]);
const CAROUSEL_WIDTH = 340;

function loadCarrouselMovement() {
    document.querySelectorAll(".section-product").forEach((el) => {
        const carousel = el.querySelector('.carrousel');
        const prevBtn = el.querySelector(".prev");
        const nextBtn = el.querySelector(".next");

        let scroll = 0;

        nextBtn.addEventListener("click", () => {
            const { scrollWidth } = carousel;

            scroll += CAROUSEL_WIDTH;

            if (scroll > scrollWidth - el.offsetWidth) {
                scroll = scrollWidth - el.offsetWidth;
            }

            carousel.style.transform = `translateX(-${scroll}px)`;
        });

        prevBtn.addEventListener("click", () => {
            scroll -= CAROUSEL_WIDTH;

            if (scroll < 0) {
                scroll = 0;
            }

            carousel.style.transform = `translateX(-${scroll}px)`;
        });
    });
}

fetch("../json/carousel.json")
    .then((res) => res.json())
    .then((categories) => {
        return Promise.all([...CAROUSEL_CLASS_SET.values()]
            .map((category) => {
                const el = document.querySelector(".carrousel#" + category);

                return loadProducts(el, categories[category]);
            }));
    });

loadBaseElements();
loadCarrouselMovement();
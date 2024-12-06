
interface ProductInfo {
    name: string;
    price: number;
    discount: number;
    imageFile: string;
}

function formatPrice(value: number) {
    const trunc = Math.trunc(value);

    return `R$${trunc.toString().padStart(2, "0")},${Math.floor((value - trunc) * 100)}`;
}

export function product(info: ProductInfo) {
    return `
    <div class="round-container product-container">
        <div class="product-image"><img src="assets/products/portion1.png"></div>
        <div class="product-separator">
            <p class="sale-text">13% OFF</p>
            <div class="separator"></div>
        </div>
        <div class="product-info">
            <p class="product-name">${info.name}</p>
            <div class="product-prices">
                <s>${formatPrice(info.price)}</s>
                <span>R$65,69</span>
            </div>
        </div>
        <div class="center"><a class="buy-btn" href="#">Comprar</a></div>
    </div>`;
}
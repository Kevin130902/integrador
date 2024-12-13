export function Product({ name, title, brand, price }) {
    return `
        <div class="product-card">
            <div>
                <img
                src="./images/products/${name}/img1.png"
                alt="${name}, ${brand}"
                />
            </div>
            <div class="product-card-info-container">
                <h2
                    class="product-card-title"
                    title="${title}"
                >
                    ${title}
                </h2>
                <h4 class="product-card-reference">Cod. 0000</h4>
                <h3 class="product-card-price">R$ ${price.toFixed(2)}</h3>
                <h4 class="product-card-installment">10x de R$ ${(price / 10).toFixed(2)} s/juros</h4>
            </div>
            <button class="product-card-btn" id="${name}">COMPRAR</button>
        </div>
    `;
}
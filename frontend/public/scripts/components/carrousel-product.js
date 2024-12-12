export function CarrouselProduct(info) {
    return `
        <div class="product-card">
            <div>
                <img
                src="./images/products/cord_drill.png"
                alt="Furadeira Eletrica"
                />
            </div>
            <div class="product-card-info-container">
                <h2
                    class="product-card-title"
                    title="Parafusadeira e Furadeira de impacto Bosch 12V com kit brocas incluso"
                >
                    Parafusadeira e Furadeira de impacto Bosch 12V com kit brocas incluso
                </h2>
                <h4 class="product-card-reference">Cod. 12345678</h4>
                <h3 class="product-card-price">R$ 499,90</h3>
                <h4 class="product-card-installment">10x de R$ 49,90 s/juros</h4>
            </div>
            <button class="product-card-btn">COMPRAR</button>
        </div>
    `;
}
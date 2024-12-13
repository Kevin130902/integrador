
export function CartItem({ name, title, price }, amount) {
    return `
    <div class="cart_item">
        <div class="cart_item_main_img">
            <img src="../images/products/${name}/img1.png" alt="">
        </div>
        <div class="cart_item_info">
            <p>${title}</p>
            <p>R$ ${price.toFixed(2)}<span>Un.</span></p>

            <h3>R$ ${(price * amount).toFixed(2)}</h3>
            <div class="cart_item_qtd_selector">
                <div class="cart_item_qtd_selector_container" id="${name}">
                    <a id="decrement"><i class="bi bi-dash"></i></a>
                    <span>${amount}</span>
                    <a id="increment"><i class="bi bi-plus"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
}
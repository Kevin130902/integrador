
export function getCart() {
    const data = localStorage.getItem("cart");

    return data !== null ? JSON.parse(data) : {};
}

export function addToCart(name, amount) {
    const cart = getCart();

    if (name in cart) {
        cart[name] += amount;
    } else {
        cart[name] = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCart() {
    if (localStorage.getItem("cart")) {
        localStorage.removeItem("cart");
    }
}
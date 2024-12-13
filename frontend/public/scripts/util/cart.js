
function update(newCart) {
    localStorage.setItem("cart", JSON.stringify(newCart));
}

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

    update(cart);
}

export function removeFromCart(name) {
    const cart = getCart();

    const newCart = {};
    if (name in cart) {
        for (const [k, v] in Object.entries(cart)) {
            console.log(k, v);
            if (k !== name) newCart[k] = v;
        }
    }

    update(newCart);
}

export function getItemAmount(name) {
    return getCart()[name] ?? 0;
}

export function setItem(name, amount) {
    const cart = getCart();

    cart[name] = amount;

    update(cart);
}

export function clearCart() {
    if (localStorage.getItem("cart")) {
        localStorage.removeItem("cart");
    }
}
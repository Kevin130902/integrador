const PORT = 8000;

let cachedInfo = localStorage.getItem("products-info");
async function getItemsInfo() {
    if (!cachedInfo) {
        localStorage.setItem("products-info", cachedInfo = JSON.stringify(await fetch("../json/info.json").then((info) => info.json())));
    }

    return JSON.parse(cachedInfo);
}

async function request(path) {
    return fetch(`http://localhost:${PORT}/${path}/`)
        .then(res => res.json())
        .then((data) => getItemsInfo().then((info) => [info, data]))
}

export async function doGetProducts() {
    return request("products").then(([info, data]) =>
        data.map((prod) => {
            const { name } = prod;
            const item = info[name];

            return {
                ...item,
                name,
                price: Number(prod.price),
            };
        }),
    );
}

export async function doGetProduct(name) {
    return request("products/" + name).then(([info, data]) => {
        const { name } = data;
        const item = info[name];

        return {
            ...item,
            name,
            price: Number(data.price),
        };
    });
}
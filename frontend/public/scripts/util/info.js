import { doGetProduct } from "./backend.js";

const cache = new Map();

export async function getItemInfo(name) {
    const cachedInfo = cache.get(name);

    if (cachedInfo) {
        return cachedInfo;
    }

    return fetch("../json/info.json")
        .then((res) => res.json())
        .then((info) => {
            const obj = info[name];

            if (obj !== undefined) {
                return doGetProduct(name).then(({ price }) => {
                    const fullInfo = {
                        ...obj,
                        name,
                        price: Number(price),
                    };
                    cache.set(name, fullInfo);

                    return fullInfo;
                });
            }
        });
};
import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";

const open = "index.html";
const https = {
    cert: fs.readFileSync("./server.crt"),
    key: fs.readFileSync("./server.key"),
};

export default defineConfig({
    build: {
        outDir: "public",
    },
    server: {
        open,
        https,
    },
    preview: {
        open,
        https,
        port: 3000,
    },
});
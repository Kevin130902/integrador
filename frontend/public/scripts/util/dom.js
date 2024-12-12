
export function loadHeader(banner) {
    const el = document.getElementById("header");

    el.innerHTML = `
        <nav id="topbar">
            <div class="container topbar-container">
                <h2 id="page-title">Pet Shop</h2>

                <div class="search-bar">
                    <input class="round-container" type="search" placeholder="Pesquisar em todos os produtos">
                    <a class="round-button search-button"><i class="bi bi-search"></i></a>
                </div>

                <ul class="topbar-buttons">
                    <li><a class="round-button" href="#"><i class="bi bi-cart3" style="font-size: 18px;"></i> R$0,00</a></li>
                    <li><a class="round-button" href="#">Entrar</a></li>
                </ul>
            </div>
        </nav>
    `;

    if (banner) {
        el.innerHTML += `
            <div class="banner">
                <img style="position: absolute; right: 0;" src="assets/image/banner.png">
                <h1>compre online e<br>receba na sua loja</h1>
                <h2>Confira os produtos</h2>
            </div>
        `;
    }
}

export function loadFooter() {
    const el = document.getElementById("footer");

    // el.innerHTML = "";
}
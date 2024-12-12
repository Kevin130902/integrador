
function loadHeader() {
    const el = document.getElementById("header");

    el.innerHTML = `
        <div id="header-info-bar">
			<div class="container">
				<h4 class="small-text">Campinas - SP</h4>
				<h4 class="small-text">
					Entregamos em todo o Brasil - compre pelo site ou pelo telefone 0800
					123 4567
				</h4>
				<h4 class="small-text">Precisa de ajuda?</h4>
			</div>
		</div>
		<div id="header-main">
			<div class="container">
				<div class="header-logo">
					<a href="./index.html">
						<img src="./images/logo.png" alt="Logo" />
					</a>
				</div>

				<div class="header-main-search-bar">
					<i class="bi bi-search"></i>
					<input type="text" name="search" id="search" placeholder="Qual a ferramenta que você precisa?" />
				</div>

				<div class="header-top-icons">
					<a href="adm.html"><i class="bi bi-person"></i></a>

					<a href="checkout.html"><i class="bi bi-cart"></i></a>
				</div>
			</div>
		</div>

		<input type="checkbox" id="menu-toggle" class="menu-checkbox">

		<label for="menu-toggle" class="hamburguer">
			<i class="bi bi-list"></i> Menu
		</label>

		<nav class="header-navbar">
			<ul class="hamburguer-menu container">
				<li>
                    <a href="./products.html?category=phone">Celulares</a>
                </li>
				<li>
                    <a href="./products.html?category=tablet">Tablets</a>
                </li>
				<li>
                    <a href="./products.html?category=notebook">Notebooks</a>
                </li>
				<li>
					<a href="./products.html">Todos os produtos</a>
				</li>
			</ul>
		</nav>
    `;
}

function loadFooter() {
    const el = document.getElementById("footer");

    el.innerHTML = `
        <section class="footer-info-container container">
			<div class="footer-info-card">
				<h4>Parcelamento</h4>
				<h3>Em ate 10 vezes</h3>
				<h5>
					Parcelamos sua compra em ate 10x sem juros para todos os cartões de
					credito.
				</h5>
			</div>
			<div class="footer-info-card">
				<h4>Compre pelo</h4>
				<h3>Whatsapp</h3>
				<h5>
					Para todo territorio nacional. Horario de atendimento sujeito a
					região
				</h5>
				<h3>(19)99999-9999</h3>
			</div>
			<div class="footer-info-card">
				<h4>Fale conosco</h4>
				<h3>Atendimento</h3>
				<h5>
					Central de atendimento disponível das 08:00 as 20:00 seg a sexta
				</h5>
				<h3>(19)99999-9999</h3>
			</div>
		</section>
		<div class="footer-bg">
			<section class="footer-nav container container-flex">
				<div class="footer-nav-container">
					<div class="footer-navitem-container">
						<h3>Institucional</h3>
						<ul>
							<li><a href="">Sobre Nós</a></li>
							<li><a href="">Fale Conosco</a></li>
							<li><a href="">Politica de troca</a></li>
							<li><a href="">Politica de privacidade</a></li>
							<li><a href="">Politica de envio</a></li>
						</ul>
					</div>
					<div class="footer-navitem-container">
						<h3>Institucional</h3>
						<ul>
							<li><a href="">Sobre Nós</a></li>
							<li><a href="">Fale Conosco</a></li>
							<li><a href="">Politica de troca</a></li>
							<li><a href="">Politica de privacidade</a></li>
							<li><a href="">Politica de envio</a></li>
						</ul>
					</div>
				</div>

				<div class="footer-social-container">
					<h3>Siga nossas redes sociais</h3>
					<h5>Acompanhe as novidades pelas nossas redes sociais</h5>
					<div class="social-icons">
						<i class="bi bi-facebook"></i>
						<i class="bi bi-instagram"></i>
						<i class="bi bi-tiktok"></i>
					</div>
				</div>
			</section>
		</div>
		<div class="rights">
			<div class="container">
				<h5>
					Tools ferramentas eireli - CNPJ: 12.345.678/0001-02 - Todos os
					direitos reservados
				</h5>
			</div>
		</div>
    `;
}

export function loadBaseElements() {
    loadHeader();
    loadFooter();
}
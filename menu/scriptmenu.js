document.querySelectorAll('menu-principal').forEach(menu =>{
    const shadowRoot = menu.shadowRoot;

    const btnInicio = shadowRoot.querySelector('#inicio');
    const btnListado = shadowRoot.querySelector('#listado');
    const btnRecientes = shadowRoot.querySelector('#recientes');
    const btnRandoms = shadowRoot.querySelector('#randoms');

    const claseBtn = document.getElementsByClassName("btn-activo");

    btnInicio.addEventListener("click", () => {
        $("#contenedor").load("inicio.html");

        $.ajax({
            url: '../json/mangas.json',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                const container = $('#mangas-container');
                data.forEach(manga => {
                    const mangaCard = `
                        <div class="manga-card">
                            <img src="${manga.imagen}" alt="${manga.titulo}">
                            <p>${manga.titulo}</p>
                        </div>
                    `;
                    container.append(mangaCard);
                });
            },
            error: function () {
                $('#mangas-container').text('Error al cargar los mangas.');
            }
        });
    });

    btnListado.addEventListener("click", () => {
        $("#contenedor").load("listado.html");
        
        $.ajax({
            url: '../json/mangas.json',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                const container = $('#mangas-container');
                data.forEach(manga => {
                    const mangaCard = `
                        <div class="manga-card">
                            <img src="${manga.imagen}" alt="${manga.titulo}">
                            <p>${manga.titulo}</p>
                        </div>
                    `;
                    container.append(mangaCard);
                });
            },
            error: function () {
                $('#mangas-container').text('Error al cargar los mangas.');
            }
        });
    });

    btnRecientes.addEventListener("click", () => {
        $("#contenedor").load("recientes.html");
        
        $.ajax({
            url: '../json/mangas.json',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                const container = $('#mangas-container');
                data.forEach(manga => {
                    const mangaCard = `
                        <div class="manga-card">
                            <img src="${manga.imagen}" alt="${manga.titulo}">
                            <p>${manga.titulo}</p>
                            <div class="chapter-info">
                                <span class="chapter-number">Capítulo 374</span>
                                <div class="chapter-info-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                        fill="#e74c3c">
                                        <path
                                            d="m618.92-298.92 42.16-42.16L510-492.16V-680h-60v212.15l168.92 168.93ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Z" />
                                    </svg>
                                    <span>hace un día</span>
                                </div>
                            </div>
                        </div>
                    `;
                    container.append(mangaCard);
                });
            },
            error: function () {
                $('#mangas-container').text('Error al cargar los mangas.');
            }
        });
    });

    btnRandoms.addEventListener("click", () => {
        $("#contenedor").load("random.html");
        
    });

})


console.log("hola")



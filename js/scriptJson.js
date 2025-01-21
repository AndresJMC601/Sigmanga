$(document).ready(function () {
    $("#contenedor").load("inicio.html");

    $.ajax({
        url: '../json/mangas.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const container = $('#mangas-container');
            data.forEach(manga => {
                const mangaCard = `
                    <a href="manga.html">
                    <div class="manga-card">
                        <img src="${manga.imagen}" alt="${manga.titulo}">
                        <p>${manga.titulo}</p>
                    </div>
                    </a>
                `;
                container.append(mangaCard);
            });
        },
        error: function () {
            $('#mangas-container').text('Error al cargar los mangas.');
        }
    });
});

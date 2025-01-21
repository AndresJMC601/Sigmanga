$(document).ready(function () {
    $("#listado_id").load("<h1>Capitulos:</h1>");

    $.ajax({
        url: '../json/listado_caps.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const listado_id = $('#listado_id');
            data.forEach(cap => {
                const bt_cap = `
                    <a href="capitulo.html">
                    <div class="manga-cap">
                        <div class="manga-cap-title">
                            <img src="./img/icon_cap_berserk.webp">
                            <div>
                                <h2>Cap. ${cap.numero_cap}</h2>
                                <h5>Berserk</h5>
                            </div>
                        </div>
                        <h6>${cap.cantidad_pag} pag.</h6>
                    </div>
                    </a>
                `;
                listado_id.append(bt_cap);
            });
        },
        error: function () {
            $('#listado_id').text('Error al cargar los capítulos.');
        }
    });
});
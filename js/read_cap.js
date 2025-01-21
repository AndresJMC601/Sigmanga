$(document).ready(function () {
    $("#carga_id").load("<p></p>");

    $.ajax({
        url: '../json/pag_cap.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const carga_id = $('#carga_id');
            data.forEach(pag => {
                const img_pag = `
                    <img src="${pag.img}">
                `;
                carga_id.append(img_pag);
            });
        },
        error: function () {
            $('#carga_id').text('Error al cargar los capítulos.');
        }
    });
});
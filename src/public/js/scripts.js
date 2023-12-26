// scripts.js

// Función para ocultar o mostrar el área de comentarios
$('#post-comment').hide();

$('#btn-toggle-comment').click(function (e) {
    e.preventDefault();
    $('#post-comment').slideToggle();
});

// Función para manejar el evento de clic en el botón "Me gusta"
$('#btn-like').click(function (e) {
    e.preventDefault();
    let image_id = $(this).data('id');
    $.post('/images/' + image_id + '/like')
        .done(data => {
            $('.likes-count').text(data.likes);
        })
        .fail(function () {
            alert('Error al procesar el like');
        });
});

// Función para manejar el evento de clic en el botón "Eliminar"
$('#btn-delete').click(function (e) {
    e.preventDefault();
    let $this = $(this);
    const response = confirm('¿Estás seguro de que quieres eliminar esta imagen?');
    if (response) {
        let imgId = $this.data('id');
        $.ajax({
            url: '/images/' + imgId,
            type: 'DELETE'
        })
            .done((result) => {
                $this.removeClass('btn-danger').addClass('btn-success');
                $this.find('i').removeClass('fa-times').addClass('fa-check');
                $this.append('<span>Eliminado</span>');
            })
            .fail(function () {
                alert('Error al eliminar la imagen');
            });
    }
});

// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    const inputTemp = document.createElement("input");
    inputTemp.value = text;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
}

// Función que se ejecuta cuando el documento está listo
$(document).ready(function () {
    // Manejar el evento de clic en el botón "Compartir"
    $("#btn-compartir").click(function () {
        // Obtener el enlace compartido
        const enlaceCompartido = $("#enlace-compartido").text().trim();
        // Copiar el enlace al portapapeles
        copyToClipboard(enlaceCompartido);
        // Mostrar una alerta indicando que el enlace se ha copiado
        alert("Enlace copiado al portapapeles: " + enlaceCompartido);
    });
});

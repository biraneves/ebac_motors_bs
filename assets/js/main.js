$(document).ready(() => {
    $(".card-footer button").on("click", function () {
        const destino = $("#contato");
        const veiculo = $(this).parent().parent().find("h5").text();

        $("#veiculo").val(veiculo);
        $("html").animate(
            {
                scrollTop: destino.offset().top,
            },
            500
        );
    });
});

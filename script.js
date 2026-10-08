
const botaoTema = document.getElementById("botaoTema");
const temaSalvo =
    localStorage.getItem("tema");

if (temaSalvo === "claro") {

    document.body.dataset.tema = "claro";

}

function atualizarTema() {

    if (document.body.dataset.tema === "claro") {

        botaoTema.textContent = "🌙 escuro";

    } else {

        botaoTema.textContent = "☀ claro";

    }

}

atualizarTema();

botaoTema.addEventListener("click", function () {


    if (document.body.dataset.tema === "claro") {


        document.body.removeAttribute("data-tema");


        localStorage.setItem(
            "tema",
            "escuro"
        );


    } else {


        document.body.dataset.tema = "claro";


        localStorage.setItem(
            "tema",
            "claro"
        );


    }


    atualizarTema();

});

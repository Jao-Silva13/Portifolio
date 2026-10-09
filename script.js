
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

function mascara_telefone() {
    var tel = document.getElementById("telefone").value;

    if (!tel.startsWith("+55 ")) {
        document.getElementById("telefone").value = "+55 ";
        return;
    }

    var tel_formatado = tel.slice(4);

    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "+55 (" + tel_formatado[0];
        }
    }

    tel_formatado = document.getElementById("telefone").value.slice(4);

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = "+55 " + tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
        }
    }

    tel_formatado = document.getElementById("telefone").value.slice(4);

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = "+55 " + tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
        }
    }
}

function autoExpand(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

function validarTexto() {
    let texto = document.getElementById("texto").value;
    let errorMensaje = document.getElementById("error-mensaje");
    if (!/^[a-z\s]*$/.test(texto) || texto == '') {
        document.getElementById("texto").classList.add("has-error");
        errorMensaje.classList.remove("success-message");
        errorMensaje.classList.add("error-message");
        errorMensaje.innerHTML = '<i class="bi bi-exclamation-circle-fill" style="font-size:15px;"></i> El texto ingresado debe contener solo letras minúsculas, sin acentos ni caracteres especiales.';
        return;
    } else {
        document.getElementById("texto").classList.remove("has-error");
        errorMensaje.innerHTML = '<i class="bi bi-exclamation-circle-fill" style="font-size:15px;"></i> Muy bien Solo letras minúsculas y sin acentos';
        errorMensaje.classList.add("success-message");
        errorMensaje.classList.remove("error-message");
    }
}


function encriptar() {

    let texto = document.getElementById("texto").value;

    // Validar el texto ingresado
    validarTexto();

    // Si el texto es inválido, no se hace nada
    if (document.getElementById("texto").classList.contains("has-error")) {
        return;
    }

    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = texto.replace(/\n/g, "<br>");

    // Ajustar la altura del elemento resultado en función del contenido
    resultado.style.height = "auto";
    resultado.style.height = resultado.scrollHeight + "px";

    if (resultado.innerHTML === "") {
        resultado.innerHTML = '<img class="img-default" src="img/muneco.svg" alt="Imagen predeterminada">';
    }

    document.getElementById("boton-copiar").classList.remove("d-none");
    document.getElementById("titulo-resultado").innerHTML = "Resultado Encriptado:";
    document.getElementById("texto").value = '';

}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    // Validar el texto ingresado
    validarTexto();

    // Si el texto es inválido, no se hace nada
    if (document.getElementById("texto").classList.contains("has-error")) {
        return;
    }

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = texto.replace(/\n/g, "<br>");

    // Ajustar la altura del elemento resultado en función del contenido
    resultado.style.height = "auto";
    resultado.style.height = resultado.scrollHeight + "px";

    if (resultado.innerHTML === "") {
        resultado.innerHTML = '<img class="img-default" src="img/muneco.svg" alt="Imagen predeterminada">';
    }

    document.getElementById("boton-copiar").classList.remove("d-none");
    document.getElementById("titulo-resultado").innerHTML = "Resultado Desencriptado:";
    document.getElementById("texto").value = '';
}

function copiar() {
    if (!navigator.clipboard) {
        // use old commandExec() way
        let resultado = document.getElementById("resultado");
        resultado.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles: " + resultado.value);
    } else {
        let resultado = document.getElementById("resultado").innerText;

        navigator.clipboard.writeText(resultado).then(function () {
            console.log('Async: Copying to clipboard was successful!');
            alert("Texto copiado al portapapeles: \n\n" + resultado)
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
            alert("Texto copiado al portapapeles: " + resultado)
        });
    }

    // Ajustar la altura del elemento resultado al valor predeterminado y borrar el contenido
    let resultadoClean = document.getElementById("resultado")
    document.getElementById("texto").style.height = 'auto';
    resultadoClean.style.height = 'calc(100vh - 250px)';
    resultadoClean.innerHTML = '<img class="img-default" src="img/muneco.svg" alt="Imagen predeterminada">';
    document.getElementById("boton-copiar").classList.add("d-none");
    document.getElementById("titulo-resultado").innerHTML = "Resultado:";
}
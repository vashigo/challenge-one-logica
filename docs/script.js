function autoExpand(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

function validarTexto() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var errorMensaje = document.getElementById("error-mensaje");

    if (!/^[a-z\n ]+$/.test(texto)) {
        document.getElementById("texto").classList.add("has-error");
        errorMensaje.innerHTML = "El texto ingresado debe contener solo letras minúsculas, sin acentos ni caracteres especiales.";
        return;
    } else {
        document.getElementById("texto").classList.remove("has-error");
        errorMensaje.innerHTML = "";
    }
}


function encriptar() {

    var texto = document.getElementById("texto").value;

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

    document.getElementById("resultado").innerHTML = texto.replace(/\n/g, "<br>");
    document.getElementById("boton-copiar").classList.remove("d-none");

    // Ajustar la altura del elemento resultado en función del contenido
    resultado.style.height = "auto";
    resultado.style.height = resultado.scrollHeight + "px";

    document.getElementById("texto").value = '';
    document.getElementById("titulo-resultado").innerHTML = "Resultado de Encriptado:";

    return texto;
}

function desencriptar() {
    var texto = document.getElementById("texto").value;

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

    document.getElementById("resultado").innerHTML = texto.replace(/\n/g, "<br>");
    document.getElementById("boton-copiar").classList.remove("d-none");

    // Ajustar la altura del elemento resultado en función del contenido
    resultado.style.height = "auto";
    resultado.style.height = resultado.scrollHeight + "px";

    document.getElementById("texto").value = '';
    document.getElementById("titulo-resultado").innerHTML = "Resultado de Desencriptado:";

}

function copiar() {
    if (!navigator.clipboard) {
        // use old commandExec() way
        var resultado = document.getElementById("resultado");
        resultado.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles: " + resultado.value);
    } else {
        var resultado = document.getElementById("resultado").innerText;

        navigator.clipboard.writeText(resultado).then(function () {
            console.log('Async: Copying to clipboard was successful!');
            alert("Texto copiado al portapapeles: \n\n" + resultado)
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
            alert("Texto copiado al portapapeles: " + resultado)
        });
    }

    // Ajustar la altura del elemento resultado al valor predeterminado y borrar el contenido
    var resultadoClean = document.getElementById("resultado")
    document.getElementById("texto").style.height = 'auto';
    resultadoClean.style.height = '100px';
    resultadoClean.innerHTML = "";
    document.getElementById("boton-copiar").classList.add("d-none");
    document.getElementById("titulo-resultado").innerHTML = "Resultado:";
}
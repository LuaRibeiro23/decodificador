const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector("#mensagem_informacao .message__text");



function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function textoValido(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(removerAcentos(texto));
}

function btnEncriptar() {
    const textoOriginal = textArea.value;

   
    if (!textoValido(textoOriginal)) {
        alert("O texto deve conter apenas letras minúsculas e sem acentos.");
        return;
    }

    const textoEncriptado = encriptar(removerAcentos(textoOriginal));
    mensagem.innerHTML = `<p>${textoEncriptado}</p>`;
    textArea.value = ""; 
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoOriginal = textArea.value;

    if (!textoValido(textoOriginal)) {
        alert("Apenas letras minúsculas e sem acento.");
        return;
    }

    const textoDesencriptado = desencriptar(removerAcentos(textoOriginal));
    mensagem.innerHTML = `<p>${textoDesencriptado}</p>`;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    return stringDesencriptada;
}

function btnCopiar() {
    const textoCopiado = document.querySelector("#mensagem_informacao p").textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado para a área de transferência!");
}

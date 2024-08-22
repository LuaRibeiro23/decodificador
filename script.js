const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector("#mensagem_informacao .message__text");
const boneco = document.querySelector(".boneco"); // Corrigido para querySelector com a classe correta

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
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
    const textoDesencriptado = desencriptar(textArea.value);
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
    alert("Texto copiado para área de transferência!");
}

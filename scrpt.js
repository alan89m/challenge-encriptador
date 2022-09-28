const inputText = document.querySelector(".input-text");
const response = document.querySelector(".response");

    // `La letra "e" es convertida para "enter"`
    // `La letra "i" es convertida para "imes"`
    // `La letra "a" es convertida para "ai"`
    // `La letra "o" es convertida para "ober"`
    // `La letra "u" es convertida para "ufat"`


function encrypt(stringEncrypted){
    let matrizCode=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrypted=stringEncrypted.toLowerCase();
    for (let i= 0; i < matrizCode.length; i++) {
        if(stringEncrypted.includes(matrizCode[i][0])){
            stringEncrypted=stringEncrypted.replaceAll(matrizCode[i][0],matrizCode[i][1])
        }
    }
    return stringEncrypted 
}
function btnEncrypt(){
    const encryptedText =encrypt (inputText.value)
    response.value=encryptedText;
    response.style.backgroundImage="none"
    inputText.value=""
}
function desEncrypt(stringDesencrypt){
    let matrizCode=[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDesencrypt=stringDesencrypt.toLowerCase();

    for (let i= 0; i < matrizCode.length; i++) {
        if(stringDesencrypt.includes(matrizCode[i][0])){
            stringDesencrypt=stringDesencrypt.replaceAll(matrizCode[i][0],matrizCode[i][1])
        }
    }
    return stringDesencrypt 
}
function btnDesencrypt(){
    const desencryptedText =desEncrypt (inputText.value)
    response.value=desencryptedText;
    response.style.backgroundImage="none"
    inputText.value=""
}
function copy(){
    response.select()
    navigator.clipboard.writeText(response.value)
    response.value=""
    alert("Texto copiado")
}
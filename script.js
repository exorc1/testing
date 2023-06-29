function sim() {
    alert("Você aceitou dar o cuzinho pra mim :)")
}

function desvia(t){
var btn = t;
btn.style.position = 'absolute';
btn.style.bottom - geraPosicao(20, 90);
btn.style.left = geraPosicao(20, 90);
console.log("opa, vai rolar em...")
}


function geraPosicao(min, max) {
   return (Math.random() * (max - min) + min) + "%";
}
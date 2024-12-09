let hora = new Date()
hora = hora.getHours()
let div1 = document.getElementById('div1');
let caixa = window.document.body;
let dia = document.getElementById('dia');
let tarde = document.getElementById('tarde');
let noite = document.getElementById('noite');

if (hora < 12) {
    div1.innerText = (`Bom Dia! Agora são ${hora} Horas`)
    caixa = dia.style.display = "block";
} else if (hora >= 12 && hora <= 18) {
    div1.innerText = (`Boa Tarde! Agora são ${hora} Horas`)
    caixa = tarde.style.display = "block";
} else if (hora > 18) {
    div1.innerText = (`Boa noite! Agora são ${hora} Horas`)
    caixa = noite.style.display = "block";
}











var a = window.document.getElementById('area')
var img = document.querySelector("#boximgicon")
function clicar(){
  img.setAttribute('src', 'outra_imagem.png');
}

function entrar(){
  img.setAttribute('src', '../assets/boxiconvlur.png');
}

function sair(){
  a.innerText = 'Saiu'
}
const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll',toggleheader,false);
function toggleheader() {
    if(window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute('src','../img/logo_flex1.png');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
    } else if (window.pageYOffset < 60 && $header.classList.contains('min-header')) {
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        $logo.firstElementChild.setAttribute('src','../img/logo_flex0.png');
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');
    }
}
function geraCor() {
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';  
        for (var i = 0; i < 6; i++ ) {
        cor += hexadecimais[Math.floor(Math.random() *12)];
        }
        return cor;
    }

function trocaCorFundo() {
geraCor();
    document.body.style.background = geraCor();
    }


function trocaCorFonte() {
geraCor();
    var x = document.getElementById("fonte");
    x.style.color = geraCor();
}

function trocaCorTitulo() {
geraCor();
    var y = document.getElementById("titulo");
    y.style.color = geraCor();
}

function alerta() {
alert('batata!!!!!');
}
function funcao1()
{
alert("Essa mensagem é um alerta!");
}
function vermelho(){

    document.getElementById("paragrafo").style.color="red";
    
    }
    
function azul(){
    
    document.getElementById("paragrafo").style.color="black";
    
    }

function cor (){
    document.getElementById('cor').style.color = 'red';
    document.getElementById('cor').style.color = 'black';
 }

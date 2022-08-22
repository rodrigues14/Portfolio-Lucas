const btnMobile = document.getElementById('btn-mobile');
const iconMenu = document.querySelector('#icon-menu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        iconMenu.src = "./images/icon-close.svg";
    } else {
        iconMenu.src = "./images/icon-menu.svg";
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function fecharMenu() {

    let linksMenu = [
        document.querySelector('#link1'),
        document.querySelector('#link2'),
        document.querySelector('#link3'),
        document.querySelector('#link4'),
        document.querySelector('#link5'),
        document.querySelector('#link-logo')
    ];
    
    for (var c = 0; c < linksMenu.length; c++) {
        linksMenu[c].addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                iconMenu.src = "./images/icon-menu.svg";
            }
        })
    }

}

fecharMenu();


function mostrarFrase() {

    let descTecnologias = document.querySelectorAll('.desc-text');
    let iconTecnologias = document.querySelectorAll('.item-programa');
    let inst = document.querySelector('#instrucao');
    
    for (let a = 0; a < iconTecnologias.length; a++) {

        iconTecnologias[a].addEventListener('mouseover', () => {
        descTecnologias[a].classList.remove('hide');
        inst.classList.add('hide');

        })
    
        iconTecnologias[a].addEventListener('mouseout', () => {
        descTecnologias[a].classList.add('hide');
        inst.classList.remove('hide');

        })
    }
}

mostrarFrase();


function typeWriter(elemento) {

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
}

const meuNome = document.querySelector('h1 span');
typeWriter(meuNome);
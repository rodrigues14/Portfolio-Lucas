function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon-menu').src = "./images/icon-menu.svg"
        
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon-menu').src = "./images/icon-close.svg"
        
        let linksMenu = [
            document.querySelector('#link1'),
            document.querySelector('#link2'),
            document.querySelector('#link3'),
            document.querySelector('#link4'),
            document.querySelector('#link5'),
            document.querySelector('#link-logo')
        ]

        for (var c = 0; c < linksMenu.length; c++) {
            linksMenu[c].addEventListener('click', function() {
                if (menuMobile.classList.contains('open')) {
                    menuMobile.classList.remove('open')
                    document.querySelector('.icon-menu').src = "./images/icon-menu.svg"
                }
            })
        }
    }
}

let descTecnologias = [
    document.querySelector('#desc-html'),
    document.querySelector('#desc-css'),
    document.querySelector('#desc-js'),
    document.querySelector('#desc-git'),
    document.querySelector('#desc-github'),
    document.querySelector('#desc-figma')
]
let iconTecnologias = [
    document.querySelector('#html'),
    document.querySelector('#css'),
    document.querySelector('#js'),
    document.querySelector('#git'),
    document.querySelector('#gith'),
    document.querySelector('#figma')
]
let inst = document.querySelector('#instrucao')

for (let a = 0; a < iconTecnologias.length; a++) {
    iconTecnologias[a].addEventListener('mouseover', () => {
    descTecnologias[a].classList.remove('hide')
    inst.classList.add('hide')
    })

    iconTecnologias[a].addEventListener('mouseout', () => {
    descTecnologias[a].classList.add('hide')
    inst.classList.remove('hide')
    })
}
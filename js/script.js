//Ajustar anchors del navbar
document.querySelectorAll('.navBarA').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        let id = this.getAttribute('href')
        let targetElement = document.querySelector(id)
        let scrollPosition = window.pageYOffset
        let topSpace = 75// Espacio en pixeles. Ajusta este valor al tamaño de tu navbar.
        console.log(scrollPosition)
        if (scrollPosition < 50){
            topSpace = 275
        }
        window.scroll({
            top: targetElement.offsetTop - topSpace,
            behavior: 'smooth'
        })

    })
})

let sobreMi = document.querySelector('#sobreMi')
sobreMi.style.opacity = '0'

window.onscroll = function() {
    let scrollPosition = window.pageYOffset
    let scrollDownElement = document.querySelector('.scroll-down')
    sobreMi = document.querySelector('#sobreMi')
    if (scrollPosition > 50) { // Ajusta este valor según tus necesidades
        scrollDownElement.style.opacity = '0'
        sobreMi.style.marginTop = '100px'
        sobreMi.style.opacity = '1'

    } else {
        scrollDownElement.style.opacity = '1'
        sobreMi.style.marginTop = '300px'
        sobreMi.style.opacity = '0'
    }
}


// Obten el elemento de entrada por su ID
let email = document.getElementById("email");
let copiar = document.getElementById("copiar");
let modal = document.querySelector("#myModal");

// Asigna la función al evento onclick del elemento
copiar.onclick = function () {
    email.disabled = true
    navigator.clipboard.writeText(email.value);

    modal.style.opacity = '1'

    // Oculta la ventana modal después de 2 segundos
    setTimeout(function() {
        modal.style.opacity = '0'
    }, 2000)
    
    email.disabled = false
}

email.onclick = function (){
    email.disabled = true
    email.disabled = false
}

copyright = document.getElementById("copyright")
fecha = new Date()

copyright.textContent = `© ${fecha.getFullYear()}. Aprendiendo, creciendo y creando en el sector tecnológico.`



//Ajustar anchors del navbar
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        var id = this.getAttribute('href');
        var targetElement = document.querySelector(id);
        var topSpace = -40; // Espacio en pixeles. Ajusta este valor al tamaño de tu navbar.
        
        window.scroll({
            top: targetElement.offsetTop - topSpace,
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
    var scrollPosition = window.pageYOffset;
    var scrollDownElement = document.querySelector('.scroll-down');
    if (scrollPosition > 50) { // Ajusta este valor según tus necesidades
        scrollDownElement.style.opacity = '0';
    } else {
        scrollDownElement.style.opacity = '1';
    }
};
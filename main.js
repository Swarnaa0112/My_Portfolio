let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content,heading, .about-content h2',{origin:'top'});
 ScrollReveal().reveal('.home-image, .skill-container, .portfolio-box, .contact form',{origin:'buttom'});
 ScrollReveal().reveal('.home-content h1, .about-image, .skill h2 ,.contact h2',{origin:'left'});
 ScrollReveal().reveal('.home-content p, . about-content, .portfolio h2',{origin:'right'});


 const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Designer','Data Analyst','AI And Data Science Student'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 });


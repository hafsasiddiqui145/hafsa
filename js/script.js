/*toogle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toogle('active');
};

/* scroll section active links*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classList.add('active');
            });
        };
    });
    /*sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    /*remove toogle icon and navbar when clicked navbar link (scroll)*/
     menuIcon.classList.toggle('bx-x');
    navbar.classList.toogle('active');
};

/*scroll reveal*/
 ScrollReveal({
     reset: true ,
     distance: '80px'
     duration: 2000,
     delay: 200

 });

 ScrollReveal().reveal('.home-container, .heading', { oprigin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box ', { oprigin: 'bottom' });
 ScrollReveal().reveal('.home-content, .h1, .about-img', { oprigin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { oprigin: 'right' });

 /*types js*/
 const typed = new Typed('.multiple-text' , {
    strings: ['Front-end Developer' , 'Web Developer' , 'HTML Developer' , 'CSS Developer' , 'JS Developer' , 'React JS Expert'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
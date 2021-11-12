const linksCards = document.querySelectorAll('.s-resource .content li a');
const header = document.querySelector('.js-header');
const btnDropdown = document.querySelector('#btnComp');
const dropdown = document.querySelector('.js-dropdown');
const linksSection = document.querySelectorAll('.js-nav li .js-link-section');

linksCards.forEach(link =>{
    link.addEventListener('click', scrollToCard);
})

function scrollToCard(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const positionInicialSection = section.offsetTop;
    console.log(href);
    console.log(positionInicialSection);
    window.scrollTo({
        top: positionInicialSection - 120,
        behavior: 'smooth',
    })
}

function fixedMenu(){
    if (window.pageYOffset >= 80){
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }
}

function openDropdown(event){
    event.preventDefault();
    dropdown.classList.toggle('active');
}

window.addEventListener('scroll', fixedMenu);
btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown)
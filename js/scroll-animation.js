const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 5.8;

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem = metadeWindow < 0;

    if (itemVisivel) {
        scrollAnima.classList.add('show_button')
    } else {
        scrollAnima.classList.remove('show_button')
    }
}

window.addEventListener('scroll', animarScroll)
//-------------- SCROLL ANIMATION BUTTON TOP ----------------------
const scrollAnima = document.querySelector('[data-anima="scroll"]');

const tamanhoWindow = window.innerHeight;
console.log(tamanhoWindow);

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;
    const visibleItem = topoItem - tamanhoWindow < 760
    if (visibleItem) {
        scrollAnima.classList.add('show_button')
    } else {
        scrollAnima.classList.remove('show_button')
    }
    //console.log(visibleItem);
    //console.log(topoItem);
}

window.addEventListener('scroll', animarScroll);
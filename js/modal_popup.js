const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const workImageBlock2 = document.querySelector('.image-wrap')
const Work_Resume = document.querySelector('.Work_Resume')
const workImageBlock = document.querySelector('.image-wrap')


function openModal() {
    if (window.innerWidth < 900) {
        window.location.href = 'https://leonidas019portfolio.netlify.app/';

    } else {
        modal.classList.add('active')
        workImageBlock.classList.add('image_opac')
        Work_Resume.classList.add('resume_opac')
    }
}


function openModal1() {
    if (window.innerWidth < 900) {
        window.location.href = 'https://projetocurso01.netlify.app';

    } else {
        modal2.classList.add('active')
        workImageBlock2.classList.add('image_opac')
        Work_Resume.classList.add('resume_opac')
    }
}

function closeModal() {
    modal.classList.remove('active')
    workImageBlock.classList.remove('image_opac')
    Work_Resume.classList.remove('resume_opac')
}

function closeModal() {
    modal2.classList.remove('active')
    workImageBlock2.classList.remove('image_opac')
    Work_Resume.classList.remove('resume_opac')
}
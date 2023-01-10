const modal = document.querySelector('.modal')
const workImageBlock = document.querySelector('.image-wrap')
const Work_Resume = document.querySelector('.Work_Resume')

function openModal() {
    if (window.innerWidth < 900) {
        window.location.href = 'https://leonidas019portfolio.netlify.app/';

    } else {
        modal.classList.add('active')
        workImageBlock.classList.add('image_opac')
        Work_Resume.classList.add('resume_opac')
    }
}

function closeModal() {
    modal.classList.remove('active')
    workImageBlock.classList.remove('image_opac')
    Work_Resume.classList.remove('resume_opac')
}

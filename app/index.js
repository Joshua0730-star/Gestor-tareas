// ARROW VIEWPORT
const arrowDown = document.querySelector('.link__arrow-down');
const mainSection = document.querySelector('#section__main');


arrowDown.addEventListener('click', (e) => {
    const sectionTop = mainSection.offsetTop;


    globalThis.scrollTo({
        top: sectionTop,
    })
})
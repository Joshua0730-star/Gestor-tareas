const $header = document.querySelector('.header-app');

const sections = document.querySelectorAll(".section-page");
const navLinks = document.querySelectorAll(".nav__link");
const option = document.querySelectorAll(".item__nav-choice");



// // ----> VIEWPORT ANIMATION BORDER-BOTTOM <----

// const observerOptions = {
//     root: null, // Por defecto el viewport
//     rootMargin: '0px', // Margen del viewport
//     threshold: 0.90, // Porcentaje de visibilidad
// }


// ---> Debo repasarlo y entenderlo para poder refactorizarlo

// const sections = document.querySelectorAll(".section-page");
// const navLinks = document.querySelectorAll(".nav__link");
// const options = document.querySelectorAll(".item__nav-choice");

// document.addEventListener("DOMContentLoaded", () => {

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 const id = entry.target.id;
//                 const link = document.querySelector(`.nav__link[href="#${id}"]`);
//                 const option = link.parentElement;
//                 option.style.transition = 'all .3s ease';
//                 console.log(option);
//                 if (entry.isIntersecting) {
//                     options.forEach((link) => link.classList.remove("active"));
//                     option.classList.add("active");
//                 }
//             });
//         },
//         {
//             threshold: 0.5, // Cambia al 50% visible.
//         }
//     );

//     sections.forEach((section) => observer.observe(section));
// });




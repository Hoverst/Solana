'use strict'

const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   centeredSlides: true,
   navigation: {
     nextEl: '.swiper-button-right',
     prevEl: '.swiper-button-left',
   },
   grabCursor: true,
   effect: "coverflow",
   coverflowEffect: {
      rotate: 80,
      stretch: 0,
      depth: 20,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints:{
      320: {
         slidesPerView: 1,
      },
      827: {
         slidesPerView: 2,
      },
      950: {
         slidesPerView: 2,
      },
      1424: {
         slidesPerView: 3,
      },
    },
 });

 let Myswiper = new Swiper('.join--2__slider', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 6.3,
   centeredSlides: true,
   grabCursor: true,
   freeMode: true,
   breakpoints: {
      320:{
         slidesPerView: 1.03, 
      },
      333:{
         slidesPerView: 1.09, 
      },
      352:{
         slidesPerView: 1.15, 
      },
      376:{
         slidesPerView: 1.2, 
      },
      410:{
         slidesPerView: 1.32, 
      },
      473:{
         slidesPerView: 1.53, 
      },
      503:{
         slidesPerView: 1.63, 
      },
      546:{
         slidesPerView: 1.74, 
      },
      591:{
         slidesPerView: 1.9, 
      },
      635:{
         slidesPerView: 2, 
      },
      702:{
         slidesPerView: 2.3, 
      },
      774:{
         slidesPerView: 2.5, 
      },
      800:{
         slidesPerView: 2.6, 
      },
      887:{
         slidesPerView: 2.8, 
      },
      957:{
         slidesPerView: 3, 
      },
      1058:{
         slidesPerView: 3.4, 
      },
      1204:{
         slidesPerView: 3.8, 
      },
      1336:{
         slidesPerView: 4.2, 
      },
      1476:{
         slidesPerView: 4.6, 
      },
      1608:{
         slidesPerView: 5, 
      },
      1820:{
         slidesPerView: 6, 
      },
      2105:{
         slidesPerView: 6.8, 
      },
   }
 });

 $(document).ready(function() {
   $('.header__burger').click(function(event){
      $('.header__burger,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.header-menu-list__element>a').click(function(event){
      $('.header-menu,.header__burger').toggleClass('active');
      $('body').toggleClass('lock');
   });
 });

 document.addEventListener('click', documentActions);

 function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest('[data-goto]')){
      const goTo = targetElement.closest('[data-goto]').dataset.goto;
      const goToElement = document.querySelector(goTo);
      const headerHeight = document.querySelector('.header').offsetHeight;

      if(goToElement){
         window.scrollTo({
            top: goToElement.offsetTop - (headerHeight + 15),
            behavior: "smooth"
         });
      }
      e.preventDefault();
   }
 }
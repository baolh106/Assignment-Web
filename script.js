'use strict';

const boxChat = document.querySelector('.contact__message');
const iconChat = document.querySelector('.contact__img');
const btnAbout = document.querySelector('.btn-aboutUs');
const sectionIntro = document.querySelector('.intro');
let count = 0;

//Open box chat
iconChat.addEventListener('click', function () {
  if (count === 0) {
    boxChat.style.transform = 'rotate3d(0, 0, 0, 0deg)';
    count = 1;
  } else if (count === 1) {
    boxChat.style.transform = 'rotate3d(1, 0, 0, -90deg)';
    count = 0;
  }
});

//Slide show
//Auto

//Click

//info
//  Section scrolling
btnAbout.addEventListener('click', e => {
  e.preventDefault();
  const topOfElement = sectionIntro.offsetTop - 132;
  window.scroll({ top: topOfElement, behavior: 'smooth' });
});

export const initHeader = () => {
  const burgerBtnWrapper = document.querySelector('.burger-btn');
  const croseIcon = document.querySelector('.cross-icon');
  const burgerIcon = document.querySelector('.burger-icon');
  const modalEl = document.querySelector('.menu-burger');
  const menuBurger = document.querySelector('.menu-burger');

  const toggle = () => {
    console.log('toggle');
    burgerIcon.classList.toggle('hide');
    croseIcon.classList.toggle('hide');
    menuBurger.classList.toggle('hide');
  };

  burgerBtnWrapper.addEventListener('click', toggle);

  modalEl.addEventListener('click', event => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'LI' || event.target.tagName === 'A') {
      console.log(event.target.tagName);
      toggle();
    }
  });
};

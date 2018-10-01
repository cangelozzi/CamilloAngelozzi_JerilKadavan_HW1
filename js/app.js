(() => {
  console.log("Welcome to CJ Studio Agency");

  // VARIABLES
  let toogle = document.querySelector('.navigation__checkbox');
  toogle.checked = false;

  

  // FUNCTIONS

  // EVENTS
  window.addEventListener('load', ()=> {

    // toogle navigation from hamburger to normal when matching media query
    if (window.matchMedia("(min-width: 700px)").matches) {
      toogle.checked = true;
    }

  });

})();

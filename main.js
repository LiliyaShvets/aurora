//baner bbackground-images
function window_onload() {
    var sliders = document.getElementById('slider-container');
    var slidersInner = document.getElementById('slider-inner');
    slidersInner.style.opacity = 1;
    var images = [
      './img/banner-bg-light.png',
      './img/banner-bg-dark.png'
    ];
    var url = 0;
    slidersInner.style.backgroundImage = 'url(' + images[url] + ')';
    setInterval(function() {
      if (slidersInner.style.opacity > 0.99) {
        sliders.style.backgroundImage = slidersInner.style.backgroundImage;
        url++;
        if (url == images.length) {
          url = 0;
        }
        slidersInner.style.backgroundImage = 'url(' + images[url] + ')';
        slidersInner.style.opacity = 0;
      }
      var op = Number.parseFloat(slidersInner.style.opacity);
      slidersInner.style.opacity = op + 0.98;
    }, 5000);
  }


//search active header
const search = document.querySelector('.search-form'),
      headerActiveBg = document.querySelector('.header'),
      searchMob = document.querySelector('.search-icon')
      closeSearchMob = document.querySelector('.close-icon'); 

    search.addEventListener("focus", () => headerActiveBg.classList.add('focused'));
    search.addEventListener("blur", () => headerActiveBg.classList.remove('focused'));
    searchMob.addEventListener("click", () => headerActiveBg.classList.add('focused'));
    closeSearchMob.addEventListener("click", () => headerActiveBg.classList.remove('focused'));


//mobile menu opened
const menuBtn = document.querySelector('.menu-icon'),
      menuListOpened = document.querySelector('.menu-mobile'),
      headerCloseBtn = document.querySelector('.header-close-btn');

      menuBtn.addEventListener("click", () => menuListOpened.classList.add('menu-mobile__opened'));
      headerCloseBtn.addEventListener("click", () => menuListOpened.classList.remove('menu-mobile__opened'));

// header menu item opened
const headerBtns = document.querySelectorAll('.menu-mobile__item');

headerBtns.forEach(headerBtn => {
  headerBtn.onclick = () => { headerBtn.classList.toggle('second__opened') };
});


// footer menu item opened
const footerCols = document.querySelectorAll('.footer-col');

footerCols.forEach(footerCol => {
  footerCol.onclick = () => { footerCol.classList.toggle('foot__opened') };
});




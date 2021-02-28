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
      headerActiveBg = document.querySelector('.header');

    search.addEventListener("focus", () => headerActiveBg.classList.add('focused'));
    search.addEventListener("blur", () => headerActiveBg.classList.remove('focused'));
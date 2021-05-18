buttonScroll = document.querySelector('.main-section__scroll');


buttonScroll.onclick = sDown;

function sDown(){
    scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}
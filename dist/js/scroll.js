buttonScroll = document.querySelector('.main-section__scroll');


buttonScroll.onclick = sDown;

function sDown(){
    console.log(1);
    document.body.scrollDown = 700;
    document.documentElement.scrollDown = 700;
}
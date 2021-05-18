buttonScroll = document.querySelector('.main-section__scroll');

function scrollDown(){
    console.log(1);
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700;
}

buttonScroll.onclick = scrollDown();
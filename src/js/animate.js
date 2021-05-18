

const animItems = document.querySelectorAll('.section-animate');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemsHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 100;

            let animItemPoint = window.innerHeight - animItemsHeight / animStart;
            if (animItemsHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemsHeight)) {
                animItem.classList.add('start');
            } else {
                animItem.classList.remove('start');
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 100);
}

const el = document.getElementById('');
el.scrollIntoView();
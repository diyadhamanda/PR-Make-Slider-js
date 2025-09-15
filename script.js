let index = 0;
const carouselItems = document.querySelectorAll(".carousel-item");

const activeclear = () => {
    carouselItems.forEach((item) => {
        item.classList.remove('active');
    })
}

const activecarouselItem = (index) => {
    carouselItems[index].classList.add('active');
}

const previousitem = () => {
    activeclear();
    if (index <= 0) {
        index = carouselItems.length;
    }
    activecarouselItem(--index);
}

const nextitem = () => {
    activeclear();
    if (index >= carouselItems.length - 1) {
        index = -1;
    }
    activecarouselItem(++index);
}
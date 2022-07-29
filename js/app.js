const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel__item");
const nextSlide = document.querySelector(".btn__next");
const prevSlide = document.querySelector(".btn__prev");
const indicatorParent = document.querySelector('.indicators'); 
const dotNav = document.querySelectorAll(".indicators li");

const carouselItemsAmount = carouselItems.length - 1;
let slideIndex = 0;
prevSlide.style.visibility = 'hidden';

dotNav.forEach((item, index) => {
  item.addEventListener('click', () => {
    removeActiveState();
    item.classList.add('active');
    slideIndex = index;
    changeTransform(slideIndex);
    if (slideIndex === 0) {
      prevSlide.style.visibility = 'hidden';
      nextSlide.style.visibility = 'visible';
    } else if ((slideIndex === carouselItemsAmount)) {
      nextSlide.style.visibility = 'hidden';
      prevSlide.style.visibility = 'visible';
    } else {
      nextSlide.style.visibility = 'visible';
      prevSlide.style.visibility = 'visible';
    }
  });
});
   
nextSlide.addEventListener('click', () => { 
  slideIndex += 1;
  changeBtnVisibility(carouselItemsAmount, nextSlide, prevSlide);
  removeActiveState();
  indicatorParent.children[slideIndex].classList.add('active');
  changeTransform(slideIndex);
});

prevSlide.addEventListener('click', () => { 
  slideIndex -= 1;
  changeBtnVisibility(0, prevSlide, nextSlide);
  removeActiveState();
  indicatorParent.children[slideIndex].classList.add('active');
  changeTransform(slideIndex);
});

function changeBtnVisibility(index, hide, makeVisible) {
  if (slideIndex === index) {
    hide.style.visibility = 'hidden';
  } else {
    makeVisible.style.visibility = 'visible';
  }
}

function removeActiveState() {
  const active = document.querySelector('.active');
  active.classList.remove('active');
}

function changeTransform(index) {
  const translateX = -index * 20;
  carousel.style.transform = `translateX(${translateX}%)`;
}
// const elements = document.querySelectorAll('.cards__text');

// for (let i = elements.length - 1; i < elements.length; i++) {
//     elements[i].style.color = 'yellow';
// }

const header = document.querySelector('.header');
// const hamburger = document.querySelector('.hamburger');
const screenHeight = window.innerHeight / 2.5; // Заголовок исчезнет на половине первого экрана
let isHeaderVisible = true;

window.addEventListener('scroll', () => {
    if (window.scrollY >= screenHeight && isHeaderVisible) {
        header.classList.add('hidden');
        // hamburger.classList.add('hidden');
        isHeaderVisible = false;
    } else if (window.scrollY < screenHeight && !isHeaderVisible) {
        header.classList.remove('hidden');
        header.classList.add('view');//
        // hamburger.classList.remove('hidden');
        // hamburger.classList.add('view');
        isHeaderVisible = true;
    }
});

var swiper = new Swiper(".image-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 20,

    on: {
        slideChange: function () {
            // Убираем класс .swiper-slide-active у всех слайдов
            document.querySelectorAll('.image-slider__slide').forEach(function (slide) {
                slide.classList.remove('swiper-slide-active');
            });

            // Добавляем класс .swiper-slide-active только текущему активному слайду
            var activeSlide = this.slides[this.activeIndex];
            activeSlide.classList.add('swiper-slide-active');
        },
    },
});

// on: {
//     slideChangeTransitionStart: function () {
// Получаем текущий и предыдущий слайды
// var currentSlide = this.slides[this.activeIndex];
// var previousSlide = this.slides[this.previousIndex];

// Находим изображения в слайдах
// var currentImage = currentSlide.querySelector('.slider__img img');
// var previousImage = previousSlide.querySelector('.slider__img img');

// Прячем предыдущее изображение с анимацией (например, исчезновение)
//     if (previousImage) {
//         previousImage.style.opacity = '0'; // Пример анимации: изменяем непрозрачность до 0
//         previousImage.style.transition = 'opacity 0.5s ease'; // Пример анимации: задаем переход
//     }
// },
// slideChangeTransitionEnd: function () {
// После завершения перехода, вы можете добавить дополнительные действия
// Например, показать какую-то анимацию для текущего слайда
// В этом моменте вы также можете восстановить предыдущее изображение, если это необходимо
// },
//     },

// });
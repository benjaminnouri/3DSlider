$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides.eq(currentIndex).removeClass('active').addClass('prev');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.eq(currentIndex).removeClass('next').addClass('active');
        const nextIndex = (currentIndex + 1) % totalSlides;
        slides.eq(nextIndex).removeClass('prev').addClass('next');
    }

    function showPrevSlide() {
        slides.eq(currentIndex).removeClass('active').addClass('next');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides.eq(currentIndex).removeClass('prev').addClass('active');
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides.eq(prevIndex).removeClass('next').addClass('prev');
    }

    $('#next').click(showNextSlide);
    $('#prev').click(showPrevSlide);

    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});

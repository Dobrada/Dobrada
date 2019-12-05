$(document).ready(function () {
    var homeClientsSayCarousel = new Swiper('#clients-say-carousel', {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function homeClientsCarousels() {
        var ww = $(window).width();

        // Home clients say carousel slides number
        if (ww >= 992) homeClientsSayCarousel.params.slidesPerView = 3;
        if (ww >= 577 && ww <= 991) homeClientsSayCarousel.params.slidesPerView = 2;
        if (ww <= 576) homeClientsSayCarousel.params.slidesPerView = 1;
        homeClientsSayCarousel.update();
    }

    homeClientsCarousels();

    $(window).resize(function() {
        homeClientsCarousels();
    });
});

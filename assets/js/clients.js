$(document).ready(function () {
    var homeClientsCarousel = new Swiper('#clients-carousel', {
        slidesPerView: 1,
        spaceBetween: 75,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function homeClientsCarousels() {
        var ww = $(window).width();

        // Home clients carousel slides number
        if (ww > 1200) homeClientsCarousel.params.slidesPerView = 6;
        if (ww >= 992 && ww <= 1200) homeClientsCarousel.params.slidesPerView = 5;
        if (ww >= 769 && ww <= 991) homeClientsCarousel.params.slidesPerView = 4;
        if (ww >= 577 && ww <= 768) homeClientsCarousel.params.slidesPerView = 3;
        if (ww >= 421 && ww <= 576) homeClientsCarousel.params.slidesPerView = 2;
        if (ww <= 420) homeClientsCarousel.params.slidesPerView = 1;
        homeClientsCarousel.update();
    }

    homeClientsCarousels();

    $(window).resize(function() {
        homeClientsCarousels();
    });
});

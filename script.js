var owlCarousel = $(".owl-carousel");

owlCarousel.owlCarousel({
    loop: true,
    nav: true,
    navText: [$('div.w-slider-arrow-left'), $('div.w-slider-arrow-right')],
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
});

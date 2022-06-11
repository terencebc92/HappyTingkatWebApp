// Mobile Carousel Function:

$(".owl-carousel").owlCarousel({
    // autoplay: true,
    // autoplayhoverpause: true,
    // autoplaytimeout: 100,
    // items: 1,
    // slideBy: 3,
    nav: true,
    loop: true,
    animateIn: 'flipInY',
    animateOut: 'zoomOutDown',
    responsive: {
        0 : {
            items: 1,
            dots: false,
            nav: true,
            animateIn: 'flipInY',
            animateOut: 'zoomOutDown',
        },
        1024 : {
            items: 1,
            dots: false,
            nav: true,
            animateIn: 'flipInY',
            animateOut: 'zoomOutDown',
        },
        1200 : {
            items: 3,
            dots: true,
            slideBy: 3
        }
    }
});
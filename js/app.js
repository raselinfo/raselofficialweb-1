gsap.to(".hero__app__interface", {
    y: 30,
    duration: 1,
    repeat: -1,
    yoyo: "true",
    ease: "linear"
});

// Wol Carousel
$(document).ready(function () {
    $(".owl-carousel-1").owlCarousel({
        loop: true,
        margin: 30,
        rewind: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    });




    $(".owl-carousel-2").owlCarousel({
        loop: true,
        margin: 30,
        rewind: false,
        autoplay: true,
        autoplayHoverPause: true,
        items:4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800:{
                items:3
            },
            1000: {
                items: 4
            }
        }

    });


    $(".owl-carousel-3").owlCarousel({
        loop: true,
        margin: 20,
        rewind: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $(".owl-carousel-4").owlCarousel({
        loop: true,
        margin: 20,
        rewind: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    



});




define([
    'jquery',
    'codexMts/lazyload.min',
    'slick'
], function($, lazyLoad) {
    "use strict";


    /*$(window).on("load", function(e) {
        $(".cont-loader").fadeOut('slow')
    })*/
    setTimeout(function() {
        $(".cont-loader").fadeOut("slow");
    }, 2000);
    $(document).ready(function() {

        var myLazyLoad = new lazyLoad({
            elements_selector: ".lazy",
            threshold: 200
        })

        $('.btn-up').click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        })
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('.btn-up').addClass('active')
            } else if ($(this).scrollTop() < 150) {
                $('.btn-up').removeClass('active')
            }

            var y = $(this).scrollTop();
            if (y > 550) {
                $('.fixed-prodcont').css("display", "flex");
            } else {
                $('.fixed-prodcont').css("display", "none");
            }
        })

        $('.slick .row-info').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            arrows: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        })

        $('.destacados1-home .slide-products').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            arrows: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        })

        $('.destacados1 .slide-products').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            arrows: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        })
        $('.destacados2 .slide-products').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            arrows: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        })
        $('.destacados3 .slide-products').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            arrows: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        })

        $('.row-vistos').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        })

        $('.ficha-img').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.ficha-thumb'
        })
        $('.ficha-thumb').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerPadding: '0',
            arrows: false,
            asNavFor: '.ficha-img',
            focusOnSelect: true
        })

    })
});
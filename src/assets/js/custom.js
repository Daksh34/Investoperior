$(function() {
    'use strict'

    $(document).on('click', '[data-toggle="offcanvas"]', function() {
        $('.offcanvas-collapse').toggleClass('open')
    })


    $(document).on('click', '[data-toggle="dropdown"]', function(e) {
        debugger;
        $(e.currentTarget).siblings().toggleClass('show')
    })

    // $(document).on('click', '[data-view]', function(e) {
    //     debugger;
    //     let target = $(e.currentTarget).data("view");
    //     $('[data-view-target="' + target + '"]')[0].scrollIntoView({
    //         behavior: "smooth", // or "auto" or "instant"
    //         block: "start"
    //     });
    // })
})

$(document).ready(function() {

    // $('.courselist').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 800,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 3,
    //     // mobileFirst: true,
    //     slidesToScroll: 1,
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    // $(document).on('click', '#slick-prev', function() {
    //     $('.courselist').slick('slickPrev')
    // })

    // $(document).on('click', '#slick-next', function() {
    //     $('.courselist').slick('slickNext');
    // })

    // $('.items').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 800,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    // $('.partners').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 800,
    //     // autoplay: true,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });


});
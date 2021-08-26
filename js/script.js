$(function(){
    $(".content-two__slider").slick({
        centerMode: true,
        centerPadding: '160px',
        slidesToShow: 4,
        slidesScroll: 4,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    })
})
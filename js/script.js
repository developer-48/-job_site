$(function(){
    $(".content-two__slider").slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        speed: 1000,
        infinite: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 2,
                    variableWidth: true,
                }
            }
        ]
    })
})
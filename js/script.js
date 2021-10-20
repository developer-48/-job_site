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
let vacanciesfavorites = $(".vacancies__favorites-btn");
vacanciesfavorites.on("click", () =>{
    if(!vacanciesfavorites.hasClass("active")){
        vacanciesfavorites.addClass("active");
    }
    else{
        vacanciesfavorites.removeClass("active");
    }
})




let salarySlyder = $(".content__filters-salary-slider");
let salaryMeaning = $(".content__filters-salary-meaning");
let salaryMeaningFilters = $(".content__filters-item-salary span")
let sliderFunction = (event) => {
    let _this = event.target;
    var value = (_this.value-_this.min)/(_this.max-_this.min)*100
    _this.style.background = 'linear-gradient(to right, #6B24B2 0%, #6B24B2 ' + value + '%, #b9b9b9 ' + value + '%, #b9b9b9 100%)'
    if(_this.value == 0){
        salaryMeaningFilters.text("Любая");
        salaryMeaning.text("Любая");
    }
    else{
        // salaryMeaningFilters.text(`${_this.value} руб`);
        salaryMeaning.text(`${_this.value} руб`);
    }

}
salarySlyder.on("input", sliderFunction);

let contentPaymentChange = $(".content__paymentChange");
contentPaymentChange.on("click", (event) => {
    let sliderParrent = $(".content__filters-salary-parrent");
    let ResetSlider = (max, step) =>{
        sliderParrent.empty()
        sliderParrent.append(
            $(
                `<input min="0" max=${max} step = ${step} data- value="0" type="range" name="salary" oninput = "sliderFunction(event)" class="content__filters-salary-slider"/>`
            )
        )
    }
    let clblock = event.target;
    if(!clblock.classList.contains("active")){
        contentPaymentChange.removeClass("active");
        clblock.classList.add("active")
        if(clblock.innerText == "За месяц"){
            salaryMeaningFilters.text("Любая");
            salaryMeaning.text("Любая");
            ResetSlider(150000, 5000)
        }
        else if(clblock.innerText == "За смену"){
            salaryMeaningFilters.text("Любая");
            salaryMeaning.text("Любая");
            ResetSlider(20000, 400)
        }
        else{
            salaryMeaningFilters.text("Любая");
            salaryMeaning.text("Любая");
            ResetSlider(5000, 50)
        }
        
    }
})


let contentFiltersPopup = $(".content__filters-popup");
let contentFiltersItem = $(".content__filters-item");
let salaryPopup = $(".content__filters-popup-salary");
let typeEmloementPopup = $(".content__filters-popup-typeEmployment");
let conditionsPopup = $(".content__filters-popup-conditions");
contentFiltersItem.on("click", (event) => {
    contentFiltersPopup.fadeOut(200)            
    
    let filter = (event.target.classList.contains("content__filters-item"))? event.target : event.target.parentNode;
    if(filter.classList.contains("active")){
        filter.classList.remove("active")
    }
    else{
        contentFiltersItem.removeClass("active")
        filter.classList.add("active")
    }
    if(filter.classList.contains('content__filters-item-salary')){
        salaryPopup.addClass("active")
        salaryPopup.fadeTo(200, 1)    
    }
    else if(filter.classList.contains('content__filters-item-typeEmployment')){
        $('.content__filters-popup-typeEmployment').addClass("active")
        $('.content__filters-popup-typeEmployment').fadeTo(200, 1) 

    }
    else if(filter.classList.contains('content__filters-item-conditions')){
        $('.content__filters-popup-conditions').addClass("active")
        $('.content__filters-popup-conditions').fadeTo(200, 1) 

    }
    else if(filter.classList.contains('content__filters-item-more')){
        $('.content__filters-popup-more').addClass("active")
        $('.content__filters-popup-more').fadeTo(200, 1) 

    }
})

let salaryApply = $(".salary-apply");
salaryApply.on("click", () => {
    let salary = $(".content__filters-salary-meaning").text();
    let payment = $(".content__paymentChange.active").text();
    const data = new FormData();
    data.append("Salary", salary);
    data.append("Payment", payment);
    console.log(salary, payment)

    salaryMeaningFilters.text(salary);
    salaryPopup.fadeOut(300)
    contentFiltersItem.removeClass("active")

})

let typeEmloementApply = $(".typeEmloement-apply");
let typeEmloementMeaning = $(".typeEmployment-value");
typeEmloementApply.on("click", () => {
    let watch = $(".typeEmployment__watch-select-item.active").text();
    let remoteWork = $(".typeEmployment__remoteWork-select-item.active").text();
    const data = new FormData();
    data.append("Watch", watch);
    data.append("RemoteWork", remoteWork);
    console.log(watch, remoteWork)
    console.log(typeEmloementMeaning)
    let count = (watch != "Неважно" && remoteWork != "Неважно")? 2: (watch != "Неважно" || remoteWork != "Неважно")? 1 : 'Любой';
    typeEmloementMeaning.text(count)
    if(count != "Любой"){
        typeEmloementMeaning.addClass("active")
    }
    else typeEmloementMeaning.removeClass("active")
    typeEmloementPopup.fadeOut(300)
    contentFiltersItem.removeClass("active")

})

let conditionsApply = $(".conditions-apply");
let conditionsMeaning = $(".conditions-value");
conditionsApply.on("click", () => {
    let conditionsActive = $(".content-conditions__checkbox:checked");
    let partTime = false;
    let notExperience = false;
    let minor = false;
    let disabledPerson = false;
    for(let item of conditionsActive){
        (item.id == "partTime")? partTime = true: (item.id == "notExperience")? notExperience = true: (item.id == "minor")? minor = true: disabledPerson = true;
    }
    console.log(partTime, notExperience, minor, disabledPerson)
    const data = new FormData();
    data.append("PartTime", partTime);
    data.append("NotExperience", notExperience);
    data.append("Minor", minor);
    data.append("DisabledPerson", disabledPerson);
    let dt = {
        "PartTime": partTime,
        "NotExperience": notExperience,
        "Minor": minor,
        "DisabledPerson": disabledPerson
    }
    console.log(dt)
    if(conditionsActive.length > 0){
        conditionsMeaning.text(conditionsActive.length)
        conditionsMeaning.addClass("active")
    }
    else{
        conditionsMeaning.text("Любые")
        conditionsMeaning.removeClass("active")
    }
    conditionsPopup.fadeOut(300)
    contentFiltersItem.removeClass("active")

})

$(document).click(function (e) {
    if ( !$(".content__filters-container").is(e.target) && $(".content__filters-container").has(e.target).length === 0) {
        contentFiltersPopup.fadeOut(200, 0)
        contentFiltersPopup.removeClass("active")
        $(".content__filters-item").removeClass('active');
    };
});

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

$(".content__city-icon").on("click", () => {    
    if($(".typeEmployment__remoteWork-select").hasClass("on")) $(".typeEmployment__remoteWork-select").removeClass("on")
    else $(".typeEmployment__remoteWork-select").addClass("on")
    $(".typeEmployment__remoteWork-select-new-select__list").slideToggle(400)
})


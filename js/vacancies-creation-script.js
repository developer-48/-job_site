let vacanciesTitle = $(".vacancies-creation__vacancy-title-input")
let vacanciesAddress = $(".vacancies-creation__address-input")

let vacanciesSalary = $(".vacancies-creation__salary-input")


let vacanciesDescription = $(".vacancies-creation__description-textarea")

let vacanciesWorkExperience = $(".vacancies-creation__vacancy-work-experience-input")
let vacanciesSkills = $(".vacancies-creation__skills-textarea")

let vacanciesResponsibilities = $(".vacancies-creation__responsibilities-textarea")

let vacanciesConditions = $(".vacancies-creation__conditions-textarea")


let vacanciesPlaceBlock = $(".vacancies-creation__place")
let vacanciesPlaceBtn = $(".vacancies-creation__place-btn")

let vacanciesConditionsWorkBlock = $(".vacancies-creation__conditions-one")
let vacanciesConditionsWorkBackBtn = $(".vacancies-creation__conditions-one-back")
let vacanciesConditionsWorkBtn = $(".vacancies-creation__conditions-one-btn")

let vacanciesDescriptionBlock = $(".vacancies-creation__description")
let vacanciesDescriptionBackBtn = $(".vacancies-creation__description-back")
let vacanciesDescriptionBtn = $(".vacancies-creation__description-btn")

let vacanciesRequirementsBlock = $(".vacancies-creation__requirements")
let vacanciesRequirementsBackBtn = $(".vacancies-creation__requirements-back")
let vacanciesRequirementsBtn = $(".vacancies-creation__requirements-btn")

let vacanciesResponsibilitiesBlock = $(".vacancies-creation__responsibilities")
let vacanciesResponsibilitiesBackBtn = $(".vacancies-creation__responsibilities-back")
let vacanciesResponsibilitiesBtn = $(".vacancies-creation__responsibilities-btn")

let vacanciesConditionsBlock = $(".vacancies-creation__conditions")
let vacanciesConditionsBackBtn = $(".vacancies-creation__conditions-back")
let vacanciesConditionsBtn = $(".vacancies-creation__conditions-btn")

vacanciesPlaceBtn.on("click", () =>{
    let error = $(".vacancies-place-error");
    if(vacanciesTitle.val() != "" && vacanciesAddress.val() != ""){ 
        error.text("")      
        vacanciesPlaceBlock.removeClass("active")
        vacanciesConditionsWorkBlock.addClass("active")
    }
    else{
        error.text("???????????????????? ?????????????????? ?????? ????????*")
    }    
})

vacanciesConditionsWorkBackBtn.on("click", () =>{
    vacanciesPlaceBlock.addClass("active")
    vacanciesConditionsWorkBlock.removeClass("active")    
})

vacanciesConditionsWorkBtn.on("click", () =>{
    let error = $(".vacancies-conditions-one-error");
    if(vacanciesSalary.val() != "" && vacanciesAddress.val() != ""){ 
        error.text("")      
        vacanciesConditionsWorkBlock.removeClass("active")
        vacanciesDescriptionBlock.addClass("active")
    }
    else{
        error.text("???????????????????? ?????????????????? ?????? ????????*")
    }    
})

vacanciesDescriptionBackBtn.on("click", () =>{
    vacanciesConditionsWorkBlock.addClass("active")
    vacanciesDescriptionBlock.removeClass("active")    
})


vacanciesDescriptionBtn.on("click", () =>{
    let error = $(".vacancies__description-error");
    if(vacanciesDescription.val() != "" && !vacanciesDescription.hasClass('exceeding-limit')){  
        error.text("")      
        vacanciesDescriptionBlock.removeClass("active")
        vacanciesRequirementsBlock.addClass("active")
    }
    else if(!vacanciesDescription.hasClass('exceeding-limit')){
        error.text("???????????????????? ?????????????????? ????????*")
    }    
})

vacanciesRequirementsBackBtn.on("click", () =>{
    vacanciesDescriptionBlock.addClass("active")
    vacanciesRequirementsBlock.removeClass("active")    
})




vacanciesRequirementsBtn.on("click", () =>{
    let error = $(".vacancies__requirements-error");
    if(vacanciesWorkExperience.val() != "" && vacanciesSkills.val() != "" && !vacanciesSkills.hasClass('exceeding-limit')){  
        error.text("")      
        vacanciesRequirementsBlock.removeClass("active")
        vacanciesResponsibilitiesBlock.addClass("active")
    }
    else if(!vacanciesSkills.hasClass('exceeding-limit')){
        error.text("???????????????????? ?????????????????? ?????? ????????*")
    }    
})

vacanciesResponsibilitiesBackBtn.on("click", () =>{
    vacanciesRequirementsBlock.addClass("active")
    vacanciesResponsibilitiesBlock.removeClass("active")    
})


vacanciesResponsibilitiesBtn.on("click", () =>{
    let error = $(".vacancies__responsibilities-error");
    if(vacanciesResponsibilities.val() != "" && !vacanciesResponsibilities.hasClass('exceeding-limit')){  
        error.text("")      
        vacanciesResponsibilitiesBlock.removeClass("active")
        vacanciesConditionsBlock.addClass("active")
    }
    else if(!vacanciesResponsibilities.hasClass('exceeding-limit')){
        error.text("???????????????????? ?????????????????? ????????*")
    }    
})

vacanciesConditionsBackBtn.on("click", () =>{
    vacanciesResponsibilitiesBlock.addClass("active")
    vacanciesConditionsBlock.removeClass("active")    
})


vacanciesConditionsBtn.on("click", () =>{
    let error = $(".vacancies__conditions-error");
    if(vacanciesConditions.val() != "" && !vacanciesConditions.hasClass('exceeding-limit')){  
        error.text("");
        $(".vacancies-form").submit()   
    }
    else if(!vacanciesConditions.hasClass('exceeding-limit')){
        error.text("???????????????????? ?????????????????? ????????*")
    }    
})

let onInputFunc = (event, block) =>{
    let count = event.target.value.length
    let responsibilitiesLimitMax = $(`.vacancies-creation__${block}-textarea-limit-max`)
    let responsibilitiesLimitAmount = $(`.vacancies-creation__${block}-textarea-limit-amount`)
    let blockError = $(`.vacancies__${block}-error`)
    let textareaBlock = $(`.vacancies-creation__${block}-textarea`)
    let limit = +responsibilitiesLimitMax.text() 
    responsibilitiesLimitAmount.text(count)
    if(count > limit){
        responsibilitiesLimitAmount.addClass("exceeding")
        textareaBlock.addClass("exceeding-limit")
        blockError.text('???? ?????????????????? ???????????????????????? ?????????????????????? ???????????? ?? ???????? "???????????? ?? ????????????????????"')
    }
    else 
    {
        responsibilitiesLimitAmount.removeClass("exceeding")
        textareaBlock.removeClass("exceeding-limit")
        blockError.text('')
    }
}

vacanciesDescription.on("input", (event) => onInputFunc(event, "description"))

vacanciesResponsibilities.on("input", (event) => onInputFunc(event, "responsibilities"))

vacanciesConditions.on("input", (event) => onInputFunc(event, "conditions"))

vacanciesSkills.on("input", (event) => onInputFunc(event, "skills"))





let homeBtnLogo = $(".resume-creation__logo-btn")
let homeBtn = $(".resume-creation__exit-btn")
let resumePopUp = $(".resume-creation__popup")
let exitHome = $(".resume-creation__popup-block-home-btn")
let cancellationExitHome = $(".resume-creation__popup-block-cancellation")

let resumePopUpFunc = () =>{
    if(vacanciesTitle.val() != "" || vacanciesSalary.val() != ""){
        resumePopUp.css('display', 'flex')
        resumePopUp.animate({opacity: 1}, 60)
    }
    else{
        $(location).attr('href',"/");
    }
}

homeBtnLogo.on("click", resumePopUpFunc)

homeBtn.on("click", resumePopUpFunc)

exitHome.on("click", ()=>{
    $(location).attr('href',"/");
})

cancellationExitHome.on("click", ()=>{
    resumePopUp.animate({opacity: 0}, 60)
    setTimeout(() =>{
        resumePopUp.css('display', 'none')
    }, 1000)
})
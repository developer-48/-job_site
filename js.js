let resumeAboutMe = $(".resume-creation__about-me-textarea")
createdBtn.on("click", () =>{
    let one = $(".resume-creation__created");
    let two = $(".resume-creation__about-me");
    let error = $(".resume-created-error");
    if(fulname.val() != "" && yearBirth.val() != "" && !resumeAboutMe.hasClass("exceeding-limit")){  
        error.text("")      
        one.removeClass("active")
        two.addClass("active")
    }
    else{
        if(resumeAboutMe.hasClass("exceeding-limit")) error.text("Вы превысили максимальное колличество знаков в поле*")
        else error.text("Необходимо заполнить все поля*")
    }    
})

let aboutMeBackBtn =  $(".resume-creation__about-me-back");
aboutMeBackBtn.on("click", () =>{
    let one = $(".resume-creation__created");
    let two = $(".resume-creation__about-me");
    one.addClass("active")
    two.removeClass("active")    
})

let resumeSkills = $(".resume-creation__skills-textarea")
let aboutMeBtn =  $(".resume-creation__about-me-btn");
aboutMeBtn.on("click", () =>{
    let one = $(".resume-creation__about-me");
    let two = $(".resume-creation__addition");
    let error = $(".resume-about-me-error")
    if(careerObjective.val() != "" && email.val() != "" && !resumeSkills.hasClass("exceeding-limit")){  
        error.text("")      
        one.removeClass("active")
        two.addClass("active")
    }
    else{
        if(resumeSkills.hasClass("exceeding-limit")) error.text("Вы превысили максимальное колличество знаков в поле*")
        else error.text("Необходимо заполнить все поля*")
    } 
         
    
})

let additionBackBtn =  $(".resume-creation__addition-back");
additionBackBtn.on("click", () =>{
    let one = $(".resume-creation__about-me");
    let two = $(".resume-creation__addition");
    one.addClass("active")
    two.removeClass("active")    
})



let onInputFunc = (event, block, error) =>{
    let count = event.target.value.length
    let responsibilitiesLimitMax = $(`.resume-creation__${block}-textarea-limit-max`)
    let responsibilitiesLimitAmount = $(`.resume-creation__${block}-textarea-limit-amount`)
    let blockError = $(`.resume-${error}-error`)
    let textareaBlock = $(`.resume-creation__${block}-textarea`)
    let limit = +responsibilitiesLimitMax.text() 
    responsibilitiesLimitAmount.text(count)
    if(count > limit){
        responsibilitiesLimitAmount.addClass("exceeding")
        textareaBlock.addClass("exceeding-limit")
        blockError.text('Вы превысили максимальное колличество знаков в поле*')
    }
    else 
    {
        responsibilitiesLimitAmount.removeClass("exceeding")
        textareaBlock.removeClass("exceeding-limit")
        blockError.text('')
    }
}

resumeAboutMe.on("input", (event) => onInputFunc(event, "about-me", "created"))

resumeSkills.on("input", (event) => onInputFunc(event, "skills", "about-me"))













let aboutMe = $(".personal-area__about-me-textarea")
let skills = $(".personal-area__skills-textarea")


if(fulname.val() != "" && yearBirth.val() != "" && careerObjective.val() != "" && email.val() != "" && citizenship.val() != "" && cityResidence.val() != "" && userPhone.val() != "" && !aboutMe.hasClass("exceeding-limit") && !skills.hasClass("exceeding-limit")){
    personalDataError.text("")
    personalData = true;    
}
else{
    if(aboutMe.hasClass("exceeding-limit")) personalDataError.text("Вы превысили максимальное колличество знаков*")
    else personalDataError.text("Необходимо заполнить все поля*")
}


let onInputFunc = (event, block) =>{
    let count = event.target.value.length
    let responsibilitiesLimitMax = $(`.personal-area__${block}-textarea-limit-max`)
    let responsibilitiesLimitAmount = $(`.personal-area__${block}-textarea-limit-amount`)
    let blockError = $(`.personal-area__${block}-textarea-error`)
    let textareaBlock = $(`.personal-area__${block}-textarea`)
    let limit = +responsibilitiesLimitMax.text() 
    responsibilitiesLimitAmount.text(count)
    if(count > limit){
        responsibilitiesLimitAmount.addClass("exceeding")
        textareaBlock.addClass("exceeding-limit")
        blockError.text('Вы превысили максимальное колличество знаков в поле*')
    }
    else 
    {
        responsibilitiesLimitAmount.removeClass("exceeding")
        textareaBlock.removeClass("exceeding-limit")
        blockError.text('')
    }
}

aboutMe.on("input", (event) => onInputFunc(event, "about-me"))

skills.on("input", (event) => onInputFunc(event, "skills"))
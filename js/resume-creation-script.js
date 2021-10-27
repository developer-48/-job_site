let createdBtn = $(".resume-creation__created-btn");
let fulname = $(".resume-creation__fulname-input");
let yearBirth = $(".resume-creation__year-birth-input");
let careerObjective = $(".resume-creation__year-birth-input");
let email = $(".resume-creation__email-input");

createdBtn.on("click", () =>{
    let one = $(".resume-creation__created");
    let two = $(".resume-creation__addition");
    let error = $(".resume-created-error");
    if(fulname.val() != "" && yearBirth.val() != "" && careerObjective.val() != "" && email.val() != 0){  
        error.text("")      
        one.removeClass("active")
        two.addClass("active")
    }
    else{
        error.text("Необходимо заполнить все поля*")
    }
    
    
})

let additionBackBtn =  $(".resume-creation__addition-back");
additionBackBtn.on("click", () =>{
    let one = $(".resume-creation__created");
    let two = $(".resume-creation__addition");
    one.addClass("active")
    two.removeClass("active")
    
})

let additionBtn = $(".resume-creation__addition-btn")
let citizenship = $(".resume-creation__addition-citizenship-input");
let cityResidence = $(".resume-creation__city-residence-input");
let userPhone = $(".resume-creation__phone-input");
let userImage = document.querySelector(".resume-creation__user-photo");
const reader = new FileReader();

const uploadPhoto = (event) => {
    const files = event.target.files;
    const file = files[0];
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => { 
      userImage.classList.add("active")
      userImage.src = event.target.result;
      userImage.alt = file.name;
    });
    $(".resume-creation__photo-label").addClass("active")
  }

document.querySelector('.resume-creation__photo-input').addEventListener('change', (event) => uploadPhoto(event))

let userImageDelete = $(".resume-creation__photo-delete-btn");
userImageDelete.on("click", () =>{
    document.querySelector('.resume-creation__photo-input').remove()
    $(".resume-creation__addition-one-line-right").append(
        $(
            `<input id="resume-creation__photo" type="file" multiple accept="image/*,image/jpeg" class="resume-creation__photo-input" onChange="uploadPhoto(event)"/>`
        )
    )
    $(".resume-creation__photo-label").removeClass("active")
    userImage.classList.remove("active")
    userImage.src = "";
    userImage.alt = "";        
});

additionBtn.on("click", () =>{
    let one = $(".resume-creation__addition");
    let two = $(".resume-creation__wishes");
    let userPhoto = document.querySelector('.resume-creation__photo-input').files.length != 0;
    let error = $(".resume-addition-error");
    if(citizenship.val() != "" && cityResidence.val() != "" && userPhone.val() != 0 && userPhoto){
        one.removeClass("active")
        two.addClass("active")
    }
    else if(citizenship.val() != "" && cityResidence.val() != "" && userPhone.val()){
        error.text("Необходимо загрузить фотографию*")
    }
    else error.text("Необходимо запонить все поля*")        
    
})


let wishesBackBtn =  $(".resume-creation__wishes-back")
wishesBackBtn.on("click", () =>{
    let one = $(".resume-creation__addition");
    let two = $(".resume-creation__wishes");

    one.addClass("active")
    two.removeClass("active")
    
})

let wishesBtn = $(".resume-creation__wishes-btn")
let salary = $(".resume-creation__salary-input")
let schedule = $(".resume-creation__schedule-input")
wishesBtn.on("click", () =>{
    let one = $(".resume-creation__wishes");
    let two = $(".resume-creation__experience");

    one.removeClass("active")
    two.addClass("active")
})

let wishesSkipBtn = $(".resume-creation__wishes-skip-btn")
wishesSkipBtn.on("click", () =>{
    let one = $(".resume-creation__wishes");
    let two = $(".resume-creation__experience");

    one.removeClass("active")
    two.addClass("active")
})

let experienceBackBtn = $(".resume-creation__experience-back")
experienceBackBtn.on("click", () =>{
    let one = $(".resume-creation__wishes");
    let two = $(".resume-creation__experience");
    one.addClass("active")
    two.removeClass("active")
})


let experienceBtn = $(".resume-creation__experience-btn")
let workedCompany = $(".resume-creation__company-input")
let workedPosition = $(".resume-creation__position-input")
let workedBeginningMonth = $(".resume-creation__work-beginning-month")
let workedBeginningYear = $(".resume-creation__work-beginning-year")
let workedEndMonth = $(".resume-creation__work-end-month")
let workedEndYear = $(".resume-creation__work-end-year")
let workedEndNow = $(".resume-creation__work-end-now-input")
let workedResponsibilities = $(".resume-creation__work-responsibilities")

let workedBeginningMonthClean = $(".resume-creation__work-input-clean.beginning-month")
let workedBeginningYearClean = $(".resume-creation__work-input-clean.beginning-year")
let workedEndMonthClean = $(".resume-creation__work-input-clean.end-month")
let workedEndYearClean = $(".resume-creation__work-input-clean.end-year")
let responsibilitiesLimitAmount = $(".resume-creation__work-textarea-limit-amount")
let responsibilitiesLimitMax = $(".resume-creation__work-textarea-limit-max")

workedEndNow.on("click", () =>{
    if(workedEndNow.is(':checked')){
        workedEndMonth.attr("readonly", "readonly");
        workedEndYear.attr("readonly", "readonly");
        workedEndMonth.val("")
        workedEndYear.val("")
    }
    else{
        workedEndMonth.removeAttr("readonly", "readonly");
        workedEndYear.removeAttr("readonly", "readonly");
    }
})

workedBeginningMonthClean.on("click", () =>{
    workedBeginningMonth.val("")
})

workedBeginningYearClean.on("click", () =>{
    workedBeginningYear.val("")
})

workedEndMonthClean.on("click", () =>{
    workedEndMonth.val("")
})

workedEndYearClean.on("click", () =>{
    workedEndYear.val("")
})

workedResponsibilities.on("input", (event) =>{
    let count = event.target.value.length
    let limit = responsibilitiesLimitMax.text()
    let error = $(".resume-experience-error");
    responsibilitiesLimitAmount.text(count)
    if(count > limit){
        responsibilitiesLimitAmount.addClass("exceeding")
        workedResponsibilities.addClass("exceeding-limit")
        error.text('Вы превысили максимальное колличество знаков в поле "Навыки и достижения"')
    }
    else 
    {
        responsibilitiesLimitAmount.removeClass("exceeding")
        workedResponsibilities.removeClass("exceeding-limit")
        error.text('')
    }
})

experienceBtn.on("click", () =>{
    let one = $(".resume-creation__experience");
    let two = $(".resume-creation__education");
    let error = $(".resume-experience-error");
    if(workedCompany.val() != "" && workedPosition.val() != "" && workedBeginningMonth.val() != "" && workedBeginningYear.val() != "" && ((workedEndMonth.val() != "" && workedEndYear.val() != "") || workedEndNow.is(':checked')) && workedResponsibilities.val() != ""){
        if(workedResponsibilities.val().length < +responsibilitiesLimitMax.text()){
            one.removeClass("active")
            two.addClass("active")
            error.text("")
            console.log(workedResponsibilities.val().length <= 3, workedResponsibilities.val().length)
        }
        
    }
    else if(workedCompany.val() == "" && workedPosition.val() == "" && workedBeginningMonth.val() == "" && workedBeginningYear.val() == "" && ((workedEndMonth.val() == "" && workedEndYear.val() == "") || workedEndNow.is(':checked')) && workedResponsibilities.val() == ""){
        one.removeClass("active")
        two.addClass("active")
    }
    else error.text("Необходимо заполнить все поля*")
    
})


let educationBackBtn = $(".resume-creation__education-back")
educationBackBtn.on("click", () =>{
    let one = $(".resume-creation__experience");
    let two = $(".resume-creation__education");
    one.addClass("active")
    two.removeClass("active")
})


let educationBtn = $(".resume-creation__education-btn")
let levelEducation = $(".resume-creation__level-education-input")
let educationalInstitution = $(".resume-creation__educational-institution-input")
let yearIssue = $(".resume-creation__year-issue-input")
let speciality = $(".resume-creation__speciality-input")

// educationBtn.on("click", () =>{
//     let error = $(".resume-education-error");
//     if(levelEducation.val() != "" && educationalInstitution.val() != "" && yearIssue.val() != "" && speciality.val() != ""){
//         $(".resume-form").submit()
//     }
//     else error.text("Необходимо заполнить все поля*")
// }) проверка перед отправкой формы

educationBtn.on("click", () =>{
    let one = $(".resume-creation__education");
    let two = $(".resume-creation__article");
    let error = $(".resume-education-error");
    if(levelEducation.val() != "" && educationalInstitution.val() != "" && yearIssue.val() != "" && speciality.val() != ""){
        one.removeClass("active")
        two.addClass("active")
    }
    else error.text("Необходимо заполнить все поля*")
    
    
})

let articleBackBtn = $(".resume-creation__article-back")
articleBackBtn.on("click", () =>{
    let one = $(".resume-creation__education");
    let two = $(".resume-creation__article");
    one.addClass("active")
    two.removeClass("active")
})


let articleId = 2;
let articleBtn = $(".resume-creation__article-back")
let articleName = $(`.resume-creation__article-item[blockid=${articleId}] .resume-creation__article-name-input`)
let specificationArticle = $(`.resume-creation__article-item[blockid=${articleId}] .resume-creation__specification-article-input`)



const uploadArticle = (event, id) => {
    let articleNameBlock = $(`.resume-creation__article-item[blockid=${id}] .resume-creation__upload-article-line`);
    const files = event.target.files;
    const file = files[0];
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => { 
      articleNameBlock.addClass("document-downloaded")
      articleNameBlock.text(file.name);
    });
  }

$(`.resume-creation__article-item[blockid=${articleId}] .resume-creation__upload-article-input`).on('change', (event) => uploadArticle(event, articleId))


additionBtn.on("click", () =>{
    let one = $(".resume-creation__addition");
    let two = $(".resume-creation__wishes");
    let userPhoto = document.querySelector('.resume-creation__photo-input').files.length != 0;
    let error = $(".resume-addition-error");
    if(citizenship.val() != "" && cityResidence.val() != "" && userPhone.val() != 0 && userPhoto){
        one.removeClass("active")
        two.addClass("active")
    }
    else if(citizenship.val() != "" && cityResidence.val() != "" && userPhone.val()){
        error.text("Необходимо загрузить фотографию*")
    }
    else error.text("Необходимо запонить все поля*")        
    
})

educationBtn.on("click", () =>{
    let error = $(".resume-education-error");
    if(levelEducation.val() != "" && educationalInstitution.val() != "" && yearIssue.val() != "" && speciality.val() != ""){
        $(".resume-form").submit()
    }
    else error.text("Необходимо заполнить все поля*")
})

let homeBtn = $(".resume-creation__exit-btn")
let resumePopUp = $(".resume-creation__popup")
let exitHome = $(".resume-creation__popup-block-home-btn")
let cancellationExitHome = $(".resume-creation__popup-block-cancellation")


homeBtn.on("click", () =>{
    resumePopUp.css('display', 'flex')
    resumePopUp.animate({opacity: 1}, 60)
})

exitHome.on("click", ()=>{
    $(location).attr('href',"/");
})

cancellationExitHome.on("click", ()=>{
    resumePopUp.animate({opacity: 0}, 60)
    setTimeout(() =>{
        resumePopUp.css('display', 'none')
    }, 1000)
    
    
})




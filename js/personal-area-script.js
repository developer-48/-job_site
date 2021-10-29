// let fulname = $(".resume-creation__fulname-input");
// let yearBirth = $(".resume-creation__year-birth-input");
// let careerObjective = $(".resume-creation__career-objective-input");
// let email = $(".resume-creation__email-input");


//     let error = $(".resume-created-error");
//     if(fulname.val() != "" && yearBirth.val() != "" && careerObjective.val() != "" && email.val() != ""){  
//         error.text("")      

//     }
//     else{
//         error.text("Необходимо заполнить все поля*")
//     }    








// let citizenship = $(".resume-creation__addition-citizenship-input");
// let cityResidence = $(".resume-creation__city-residence-input");
// let userPhone = $(".resume-creation__phone-input");
// let userImage = document.querySelector(".resume-creation__user-photo");
// const reader = new FileReader();

// const uploadPhoto = (event) => {
//     const files = event.target.files;
//     const file = files[0];
//     reader.readAsDataURL(file);
//     reader.addEventListener('load', (event) => { 
//       userImage.classList.add("active")
//       userImage.src = event.target.result;
//       userImage.alt = file.name;
//     });
//     $(".resume-creation__photo-label").addClass("active")
// }

// document.querySelector('.resume-creation__photo-input').addEventListener('change', (event) => uploadPhoto(event))

// let userImageDelete = $(".resume-creation__photo-delete-btn");
// userImageDelete.on("click", () =>{
//     document.querySelector('.resume-creation__photo-input').remove()
//     $(".resume-creation__addition-one-line-right").append(
//         $(
//             `<input id="resume-creation__photo" type="file" multiple accept="image/*,image/jpeg" class="resume-creation__photo-input" onChange="uploadPhoto(event)"/>`
//         )
//     )
//     $(".resume-creation__photo-label").removeClass("active")
//     userImage.classList.remove("active")
//     userImage.src = "";
//     userImage.alt = "";        
// });



//     let userPhoto = document.querySelector('.resume-creation__photo-input').files.length != 0;
//     let error = $(".resume-addition-error");
//     if(citizenship.val() != "" && cityResidence.val() != "" && userPhone.val() != 0 && userPhoto){

//     }
//     else if(citizenship.val() != "" && cityResidence.val() != "" && userPhone.val()){
//         error.text("Необходимо загрузить фотографию*")
//     }
//     else error.text("Необходимо заполнить все поля*")        
    



    

// let salary = $(".resume-creation__salary-input")
// let schedule = $(".resume-creation__schedule-input")






// let workedCompany = $(".resume-creation__company-input")
// let workedPosition = $(".resume-creation__position-input")
// let workedBeginningMonth = $(".resume-creation__work-beginning-month")
// let workedBeginningYear = $(".resume-creation__work-beginning-year")
// let workedEndMonth = $(".resume-creation__work-end-month")
// let workedEndYear = $(".resume-creation__work-end-year")
// let workedEndNow = $(".resume-creation__work-end-now-input")
// let workedResponsibilities = $(".resume-creation__work-responsibilities")

// let workedBeginningMonthClean = $(".resume-creation__work-input-clean.beginning-month")
// let workedBeginningYearClean = $(".resume-creation__work-input-clean.beginning-year")
// let workedEndMonthClean = $(".resume-creation__work-input-clean.end-month")
// let workedEndYearClean = $(".resume-creation__work-input-clean.end-year")
// let responsibilitiesLimitAmount = $(".resume-creation__work-textarea-limit-amount")
// let responsibilitiesLimitMax = $(".resume-creation__work-textarea-limit-max")

// workedEndNow.on("click", () =>{
//     if(workedEndNow.is(':checked')){
//         workedEndMonth.attr("readonly", "readonly");
//         workedEndYear.attr("readonly", "readonly");
//         workedEndMonth.val("")
//         workedEndYear.val("")
//     }
//     else{
//         workedEndMonth.removeAttr("readonly", "readonly");
//         workedEndYear.removeAttr("readonly", "readonly");
//     }
// })

// workedBeginningMonthClean.on("click", () =>{
//     workedBeginningMonth.val("")
// })

// workedBeginningYearClean.on("click", () =>{
//     workedBeginningYear.val("")
// })

// workedEndMonthClean.on("click", () =>{
//     workedEndMonth.val("")
// })

// workedEndYearClean.on("click", () =>{
//     workedEndYear.val("")
// })

// workedResponsibilities.on("input", (event) =>{
//     let count = event.target.value.length
//     let limit = +responsibilitiesLimitMax.text()
//     let error = $(".resume-experience-error");
//     responsibilitiesLimitAmount.text(count)
//     if(count > limit){
//         responsibilitiesLimitAmount.addClass("exceeding")
//         workedResponsibilities.addClass("exceeding-limit")
//         error.text('Вы превысили максимальное колличество знаков в поле "Навыки и достижения"')
//     }
//     else 
//     {
//         responsibilitiesLimitAmount.removeClass("exceeding")
//         workedResponsibilities.removeClass("exceeding-limit")
//         error.text('')
//     }
// })



//     let error = $(".resume-experience-error");
//     if(workedCompany.val() != "" && workedPosition.val() != "" && workedBeginningMonth.val() != "" && workedBeginningYear.val() != "" && ((workedEndMonth.val() != "" && workedEndYear.val() != "") || workedEndNow.is(':checked')) && workedResponsibilities.val() != ""){
//         if(workedResponsibilities.val().length <= +responsibilitiesLimitMax.text()){
//             error.text("")
//             console.log(workedResponsibilities.val().length <= 3, workedResponsibilities.val().length)
//         }
        
//     }
//     else if(workedCompany.val() == "" && workedPosition.val() == "" && workedBeginningMonth.val() == "" && workedBeginningYear.val() == "" && ((workedEndMonth.val() == "" && workedEndYear.val() == "") || workedEndNow.is(':checked')) && workedResponsibilities.val() == ""){
        
//     }
//     else error.text("Необходимо заполнить все поля*")
    



// let levelEducation = $(".resume-creation__level-education-input")
// let educationalInstitution = $(".resume-creation__educational-institution-input")
// let yearIssue = $(".resume-creation__year-issue-input")
// let speciality = $(".resume-creation__speciality-input")


//     let error = $(".resume-education-error");
//     if(levelEducation.val() != "" && educationalInstitution.val() != "" && yearIssue.val() != "" && speciality.val() != ""){

//     }
//     else error.text("Необходимо заполнить все поля*")



// let articleId = 1;
// let articleRemoveId = [];
// let articleBtn = $(".resume-creation__article-btn")
// let articleName = $(`.resume-creation__article-item[blockid=${articleId}] .resume-creation__article-name-input`)
// let specificationArticle = $(`.resume-creation__article-item[blockid=${articleId}] .resume-creation__specification-article-input`)


// let addArticleBtn = $(".resume-creation__add-article-btn")

// addArticleBtn.on("click", () =>{
//     let error = $(".resume-article-error");
//     let articleNameBool = true;
//     let specificationArticleBool = true;
//     let articleDovnload = true;

//     for(let i = 1; i <= articleId; i++){
//         console.log(i, articleRemoveId.indexOf(i) == -1, articleRemoveId)
//         if(articleRemoveId.indexOf(i) == -1){
//             if($(`.resume-creation__article-item[blockid=${i}] .resume-creation__article-name-input`).val() == ""){
//                 articleNameBool = false;
//             } 
//             if($(`.resume-creation__article-item[blockid=${i}] .resume-creation__specification-article-input`).val() == ""){
//                 specificationArticleBool = false;
//             } 
//             if(document.querySelector(`#upload-article${i}`).files.length == 0){
//                 articleDovnload = false;
//             }
//         }
        
//     }
//     if(articleNameBool && specificationArticleBool && articleDovnload){
//         error.text("")
//         articleId++
//         $(".resume-creation__scrol-block").append(
//             $(`
//                 <div class="resume-creation__scrol-item resume-creation__article-item" blockid = "${articleId}">
//                     <div class="resume-creation__scrol-content">
//                         <label for="" class="resume-creation__label resume-creation__article-name-label " >Название статьи</label>
//                         <input type="text" class="resume-creation__input resume-creation__article-name-input">
//                         <label for="" class="resume-creation__label  resume-creation__specification-article-label">Спецификация статьи</label>
//                         <input type="text" class="resume-creation__input resume-creation__specification-article-input">
//                         <div class="resume-creation__upload-article-container">
//                             <div class="resume-creation__upload-article-line"></div>
//                             <input type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//                             onchange="(event) =>uploadArticle(event, ${articleId})"
//                             id="upload-article${articleId}" class="resume-creation__upload-article-input" >
//                             <label for="upload-article${articleId}" class="resume-creation__upload-article-label" >Загрузить файл</label>
//                         </div>
//                     </div>
//                     <div class="resume-creation__scrol-right">
//                         <div class="resume-creation__scrol-vertical-line article-top"></div>
//                         <div blockid = "${articleId}" class="resume-creation__scrol-delite"></div>
//                         <div class="resume-creation__scrol-vertical-line article-bottom"></div>
//                     </div>
//                 </div>
//         `)
//         )
//         $(`#upload-article${articleId}`).on("change", (event) => uploadArticle(event, articleId))
//         $(`.resume-creation__article-item[blockid=${articleId-1}]`).addClass("active")
//         $(".resume-creation__scrol-block").scrollHeight;
//         $(".resume-creation__scrol-block").animate({
//             scrollTop: $('.resume-creation__scrol-block').get(0).scrollHeight}, 1000);
//     }
//     else if(articleNameBool && specificationArticleBool){
//         error.text("Перед добавлением новой статьи необходимо загрузить статью(файл)*")
//     }
//     else error.text("Перед добавлением новой статьи необходимо заполнить все поля*")
// })


// const uploadArticle = (event, id) => {
//     let articleNameBlock = $(`.resume-creation__article-item[blockid=${id}] .resume-creation__upload-article-line`);
//     const files = event.target.files;
//     const file = files[0];
//     reader.readAsDataURL(file);
//     reader.addEventListener('load', (event) => { 
//       articleNameBlock.addClass("document-downloaded")
//       articleNameBlock.text(file.name);
//     });
//   }

// $(`.resume-creation__article-item[blockid=1] .resume-creation__upload-article-input`).on('change', (event) => uploadArticle(event, 1))

//     let error = $(".resume-article-error");
//     let articleNameBool = true;
//     let specificationArticleBool = true;
//     let articleDovnload = true;
//     for(let i = 1; i <= articleId; i++){        
//         if(articleRemoveId.indexOf(i) == -1){
//             if($(`.resume-creation__article-item[blockid=${i}] .resume-creation__article-name-input`).val() == ""){
//             articleNameBool = false;
//             } 
//             if($(`.resume-creation__article-item[blockid=${i}] .resume-creation__specification-article-input`).val() == ""){
//                 specificationArticleBool = false;
//             } 
//             if(document.querySelector(`#upload-article${i}`).files.length == 0){
//                 articleDovnload = false;
//             }
//         }
        
//     }
//     if(articleNameBool && specificationArticleBool && articleDovnload){
//         $(".resume-form").submit()
//         error.text("")
//     }
//     else if(articleNameBool && specificationArticleBool){
//         error.text("Необходимо загрузить статью(файл)*")
//     }
//     else error.text("Необходимо заполнить все поля*")        


// let deliteArticleBtn = $(".resume-creation__scrol-delite")

// deliteArticleBtn.on("click", (event) =>{
//     let id = event.target.getAttribute("blockid");
//     if(id != 1 || articleId > 1){        
//         $(`.resume-creation__article-item[blockid=${id}]`).remove()
//         articleRemoveId.push(+id);
//     }
//     else $(".resume-article-error").text("Нельзя удалить единственную статью*")
    
// })


// let homeBtnLogo = $(".resume-creation__logo-btn")
// let homeBtn = $(".resume-creation__exit-btn")
// let resumePopUp = $(".resume-creation__popup")
// let exitHome = $(".resume-creation__popup-block-home-btn")
// let cancellationExitHome = $(".resume-creation__popup-block-cancellation")

// let resumePopUpFunc = () =>{
//     if(fulname.val() != "" || yearBirth.val() != "" || careerObjective.val() != "" || email.val() != ""){
//         resumePopUp.css('display', 'flex')
//         resumePopUp.animate({opacity: 1}, 60)
//     }
//     else{
//         $(location).attr('href',"/");
//     }
// }

// homeBtnLogo.on("click", resumePopUpFunc)

// homeBtn.on("click", resumePopUpFunc)

// exitHome.on("click", ()=>{
//     $(location).attr('href',"/");
// })

// cancellationExitHome.on("click", ()=>{
//     resumePopUp.animate({opacity: 0}, 60)
//     setTimeout(() =>{
//         resumePopUp.css('display', 'none')
//     }, 1000)
// })

let fulname = $(".personal-area__fulname-input");
let yearBirth = $(".personal-area__year-birth-input");
let careerObjective = $(".personal-area__career-objective-input");
let email = $(".personal-area__email-input");

let citizenship = $(".personal-area__citizenship-input");
let cityResidence = $(".personal-area__city-residence-input");
let userPhone = $(".personal-area__phone-input");
let userImage = document.querySelector(".personal-area__user-photo")

let salary = $(".personal-area__salary-input")
let schedule = $(".personal-area__schedule-input")

let workedCompany = $(".personal-area__company-input")
let workedPosition = $(".personal-area__position-input")
let workedBeginningMonth = $(".personal-area__work-beginning-month")
let workedBeginningYear = $(".personal-area__work-beginning-year")
let workedEndMonth = $(".personal-area__work-end-month")
let workedEndYear = $(".personal-area__work-end-year")
let workedEndNow = $(".personal-area__work-end-now-input")
let workedResponsibilities = $(".personal-area__work-responsibilities")

let workedBeginningMonthClean = $(".personal-area__work-input-clean.beginning-month")
let workedBeginningYearClean = $(".personal-area__work-input-clean.beginning-year")
let workedEndMonthClean = $(".personal-area__work-input-clean.end-month")
let workedEndYearClean = $(".personal-area__work-input-clean.end-year")
let responsibilitiesLimitAmount = $(".personal-area__work-textarea-limit-amount")
let responsibilitiesLimitMax = $(".personal-area__work-textarea-limit-max")

let levelEducation = $(".personal-area__level-education-input")
let educationalInstitution = $(".personal-area__educational-institution-input")
let yearIssue = $(".personal-area__year-issue-input")
let speciality = $(".personal-area__speciality-input")

let articleId = $(".personal-area__scrol-block .personal-area__article-item").length;
let articleRemoveId = [];
let articleBtn = $(".personal-area__article-btn")

let personalDataError = $(".personal-area__personal-data-error");
let experienceError = $(".personal-area-experience-error");
let educationError = $(".personal-area-education-error");
let addAticleError = $(".personal-area__article-error");


let availabilityChanges = false;

$(".personal-area__form").on("input", () => savebtn())

const reader = new FileReader();
const articleReader = new FileReader()

const uploadPhoto = (event) => {
    const files = event.target.files;
    const file = files[0];
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => { 
      userImage.src = event.target.result;
      userImage.alt = file.name;
    });
    savebtn()
}

document.querySelector('.personal-area__user-photo-edit-input').addEventListener('change', (event) => uploadPhoto(event))

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
    savebtn()
})

workedBeginningMonthClean.on("click", () =>{
    workedBeginningMonth.val("")
    savebtn()
})

workedBeginningYearClean.on("click", () =>{
    workedBeginningYear.val("")
    savebtn()
})

workedEndMonthClean.on("click", () =>{
    workedEndMonth.val("")
    savebtn()
})

workedEndYearClean.on("click", () =>{
    workedEndYear.val("")
    savebtn()
})

workedResponsibilities.on("input", (event) =>{
    let count = event.target.value.length
    let limit = +responsibilitiesLimitMax.text()    
    responsibilitiesLimitAmount.text(count)
    if(count > limit){
        responsibilitiesLimitAmount.addClass("exceeding")
        workedResponsibilities.addClass("exceeding-limit")
        experienceError.text('Вы превысили максимальное колличество знаков в поле "Навыки и достижения"')
    }
    else 
    {
        responsibilitiesLimitAmount.removeClass("exceeding")
        workedResponsibilities.removeClass("exceeding-limit")
        experienceError.text('')
    }
    savebtn()
})

let addArticleBtn = $(".personal-area__add-article-btn")

addArticleBtn.on("click", () =>{
    let articleNameBool = true;
    let specificationArticleBool = true;
    let articleDovnload = true;

    for(let i = 1; i <= articleId; i++){        
        if(articleRemoveId.indexOf(i) == -1){
            if($(`.personal-area__article-item[blockid=${i}] .personal-area__article-name-input`).val() == ""){
                articleNameBool = false;
            } 
            if($(`.personal-area__article-item[blockid=${i}] .personal-area__specification-article-input`).val() == ""){
                specificationArticleBool = false;
            } 
            if(document.querySelector(`#upload-article${i}`).files.length == 0 && $(`#upload-article${i}`).attr('article-was') != "true"){
                articleDovnload = false;
            }
        }        
    }
    if(articleNameBool && specificationArticleBool && articleDovnload){
        addAticleError.text("")
        articleId++
        $(".personal-area__scrol-block").append(
            $(`
            <div class="personal-area__scrol-item personal-area__article-item" blockid = "${articleId}">
                <div class="resume-creation__scrol-content">
                    <label for="" class="resume-creation__label personal-area__article-name-label">Название статьи</label>
                    <input type="text" class="resume-creation__input personal-area__article-name-input">
                    <label for="" class="resume-creation__label  personal-area__specification-article-label">Спецификация статьи</label>
                    <input type="text" class="resume-creation__input personal-area__specification-article-input">
                    <div class="resume-creation__upload-article-container">
                        <div class="personal-area__upload-article-line"></div>
                        <input type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        id="upload-article${articleId}" class="personal-area__upload-article-input">
                        <label for="upload-article${articleId}" class="personal-area__upload-article-label">Загрузить файл</label>
                    </div>
                </div>
                <div class="resume-creation__scrol-right">
                    <div class="resume-creation__scrol-vertical-line article-top"></div>
                    <div blockid = "${articleId}" class="personal-area__scrol-delite"></div>
                    <div class="resume-creation__scrol-vertical-line article-bottom"></div>
                </div>
            </div>
        `)
        )
        $(`#upload-article${articleId}`).on("change", (event) => uploadArticle(event, articleId))
        $(`.personal-area__article-item[blockid=${articleId}] .personal-area__scrol-delite`).on("click", (event) => deliteArticleFunc(event))
        $(`.personal-area__article-item[blockid=${articleId-1}]`).addClass("active")
        $(".personal-area__scrol-block").scrollHeight;
        $(".personal-area__scrol-block").animate({
            scrollTop: $('.personal-area__scrol-block').get(0).scrollHeight}, 1000);
    }
    else if(articleNameBool && specificationArticleBool){
        addAticleError.text("Перед добавлением новой статьи необходимо загрузить статью(файл)*")
    }
    else addAticleError.text("Перед добавлением новой статьи необходимо заполнить все поля*")
    savebtn()
})

let deliteArticleFunc = (event) => {
    let id = event.target.getAttribute("blockid");
    if(articleId - articleRemoveId.length > 1){        
        $(`.personal-area__article-item[blockid=${id}]`).remove()
        articleRemoveId.push(+id);
    }
    else $(".personal-area__article-error").text("Нельзя удалить единственную статью*")
    savebtn()
    
}

let deliteArticleBtn = $(".personal-area__scrol-delite")


deliteArticleBtn.on("click", (event) => deliteArticleFunc(event))

const uploadArticle = (event, id) => {
    let articleNameBlock = $(`.personal-area__article-item[blockid=${id}] .personal-area__upload-article-line`);
    const files = event.target.files;
    const file = files[0];
    articleReader.readAsDataURL(file);
    articleReader.addEventListener('load', (event) => { 
      articleNameBlock.addClass("document-downloaded")
      articleNameBlock.text(file.name);
    });
    savebtn()
  }

for(let i = 1; i <= articleId; i++){
    $(`.personal-area__article-item[blockid=${i}] .personal-area__upload-article-input`).on('change', (event) => uploadArticle(event, i))
}






let personalAreaSave = $(".personal-area__btn-save")

personalAreaSave.on("click", () =>{
    let personalData = false;
    let experience = false;
    let education = false;
    let article = false;
    
    if(availabilityChanges){
        if(fulname.val() != "" && yearBirth.val() != "" && careerObjective.val() != "" && email.val() != "" && citizenship.val() != "" && cityResidence.val() != "" && userPhone.val() != ""){  
            personalDataError.text("")
            personalData = true;
            // все заполнено      
        }
        else{
            personalDataError.text("Необходимо заполнить все поля*")
        }
    
        if(workedCompany.val() != "" && workedPosition.val() != "" && workedBeginningMonth.val() != "" && workedBeginningYear.val() != "" && ((workedEndMonth.val() != "" && workedEndYear.val() != "") || workedEndNow.is(':checked')) && workedResponsibilities.val() != ""){
            if(workedResponsibilities.val().length <= +responsibilitiesLimitMax.text()){
                experienceError.text("")
                experience = true;
            }
            
        }
        else if(workedCompany.val() == "" && workedPosition.val() == "" && workedBeginningMonth.val() == "" && workedBeginningYear.val() == "" && ((workedEndMonth.val() == "" && workedEndYear.val() == "") || workedEndNow.is(':checked')) && workedResponsibilities.val() == ""){
            experienceError.text("")
            experience = true;
        }
        else experienceError.text("Необходимо заполнить все поля*")
    
        if(levelEducation.val() != "" && educationalInstitution.val() != "" && yearIssue.val() != "" && speciality.val() != ""){
            education = true;
            educationError.text("")
        }
        else educationError.text("Необходимо заполнить все поля*")
    
    
    
    
        
        let articleNameBool = true;
        let specificationArticleBool = true;
        let articleDovnload = true;
        if(articleId == 1 ){
            if($(`.personal-area__article-item[blockid=1] .personal-area__article-name-input`).val() != "" && $(`.personal-area__article-item[blockid=1] .personal-area__specification-article-input`).val() != ""){
                if(document.querySelector(`#upload-article1`).files.length == 0 && $(`#upload-article1`).attr('article-was') != "true"){
                    articleDovnload = false
                }
            }
            else if($(`.personal-area__article-item[blockid=1] .personal-area__article-name-input`).val() != "" || $(`.personal-area__article-item[blockid=1] .personal-area__specification-article-input`).val() != "" || document.querySelector(`#upload-article1`).files.length > 0 || $(`#upload-article1`).attr('article-was') == "true"){
                articleNameBool = false;
                specificationArticleBool = false;
                articleDovnload = false;
            }
        }
        else{
            for(let i = 1; i <= articleId; i++){        
                if(articleRemoveId.indexOf(i) == -1){
                    if($(`.personal-area__article-item[blockid=${i}] .personal-area__article-name-input`).val() == ""){
                        articleNameBool = false;
                    } 
                    if($(`.personal-area__article-item[blockid=${i}] .personal-area__specification-article-input`).val() == ""){
                        specificationArticleBool = false;
                    } 
                    if(document.querySelector(`#upload-article${i}`).files.length == 0 && $(`#upload-article${i}`).attr('article-was') == "true"){
                        articleDovnload = false;
                    }
                }        
            }
            
        }
    
        if(articleNameBool && specificationArticleBool && articleDovnload){
            addAticleError.text("")
            article = true
        }
        else if(articleNameBool && specificationArticleBool){
            addAticleError.text("Необходимо загрузить статью(файл)*")
        }
        else addAticleError.text("Необходимо заполнить все поля*")
    
    
        if(personalData && experience && education && article){
            $(".personal-area__form").submit()
        }
    }

})

$(".personal-area__progress-bar-line").css('width', `${$(".personal-area__user-progres-value-span").text()}%`)


let savebtn = () =>{
    personalAreaSave.addClass("active")
    availabilityChanges = true;
}


let resumePopUpFunc = (block) =>{
    let popupBlock;
    if(block == "exit-home"){        
        if(availabilityChanges){
            popupBlock = $('.personal-area__popup-block.exit-home')
            popupBlock.css('display', 'block')  
            $('.personal-area__popup').css('display', 'flex')
            $('.personal-area__popup').animate({opacity: 1}, 60)
        }
        else  $(location).attr('href',"/")       
    }
    else{
        popupBlock = $('.personal-area__popup-block.delete-account')
        popupBlock.css('display', 'block')
        $('.personal-area__popup').css('display', 'flex')
        $('.personal-area__popup').animate({opacity: 1}, 60)
    }
    
    
}

let deleteAccountBtn = $(".personal-area__delete-account")
deleteAccountBtn.on("click", () => resumePopUpFunc("delete-account"))

let homeBtn = $(".personal-area__logo-btn")

homeBtn.on("click", () => resumePopUpFunc("exit-home"))

let homeLoad = $(".personal-area__popup-block-home-btn")

homeLoad.on("click", () => $(location).attr('href',"/"))

let cancellationExitHome = $(".personal-area__popup-block-cancellation")
cancellationExitHome.on("click", ()=>{
    $('.personal-area__popup').animate({opacity: 0}, 60)
    setTimeout(() =>{
        $('.personal-area__popup').css('display', 'none')
    }, 1000)
    $('.personal-area__popup-block.exit-home').css('display', 'none')
    $('.personal-area__popup-block.delete-account').css('display', 'none')
})
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

let fulname = $(".resume-creation__fulname-input");
let yearBirth = $(".resume-creation__year-birth-input");
let careerObjective = $(".resume-creation__career-objective-input");
let email = $(".personal-area__email-input");

let citizenship = $(".resume-creation__addition-citizenship-input");
let cityResidence = $(".resume-creation__city-residence-input");
let userPhone = $(".resume-creation__phone-input");
let userImage = document.querySelector(".resume-creation__user-photo")

let salary = $(".resume-creation__salary-input")
let schedule = $(".resume-creation__schedule-input")

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

let levelEducation = $(".resume-creation__level-education-input")
let educationalInstitution = $(".resume-creation__educational-institution-input")
let yearIssue = $(".resume-creation__year-issue-input")
let speciality = $(".resume-creation__speciality-input")

let articleId = 1;
let articleRemoveId = [];
let articleBtn = $(".resume-creation__article-btn")
let articleName = $(`.resume-creation__article-item[blockid=${articleId}] .resume-creation__article-name-input`)
let specificationArticle = $(`.resume-creation__article-item[blockid=${articleId}] .resume-creation__specification-article-input`)

let homeBtnLogo = $(".resume-creation__logo-btn")
let homeBtn = $(".resume-creation__exit-btn")
let resumePopUp = $(".resume-creation__popup")
let exitHome = $(".resume-creation__popup-block-home-btn")
let cancellationExitHome = $(".resume-creation__popup-block-cancellation")

let personalAreaError = $(".personal-area__personal-data-error");

let personalAreaSave = $(".personal-area__btn-save")

const reader = new FileReader();

const uploadPhoto = (event) => {
    const files = event.target.files;
    const file = files[0];
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => { 
      userImage.src = event.target.result;
      userImage.alt = file.name;
    });
}

document.querySelector('.personal-area__user-photo-edit-input').addEventListener('change', (event) => uploadPhoto(event))

personalAreaSave.on("click", () =>{
    
    if(fulname.val() != "" && yearBirth.val() != "" && careerObjective.val() != "" && email.val() != "" && citizenship.val() != "" && cityResidence.val() != "" && userPhone.val() != ""){  
        personalAreaError.text("")      
    }
    else{
        personalAreaError.text("Необходимо заполнить все поля*")
    }
    


})

$(".personal-area__progress-bar-line").css('width', `${$(".personal-area__user-progres-value-span").text()}%`)
const toTop = document.querySelector(".to-top");
const resumeSkills = document.querySelector(".resume_skills");

window.addEventListener("scroll", () => {
    if (window.pageYOffset >100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > resumeSkills.offsetTop){
        resumeSkills.classList.add("sticky");
    } else {
        resumeSkills.classList.remove("sticky");
    }
})

const business = document.querySelector(".skill_business");
const businesses = document.querySelectorAll(".skill_business");
const listItems = document.querySelectorAll(".experiences li");
const listLen = listItems.length;

business.addEventListener("click", () =>{
    var i;
    for (i = 0; i<listLen; i++){
        var TF = listItems[i].innerHTML.includes('skill_business');
        if (TF){
            listItems[i].classList.add("visible");
            for (let j = 0; j<businesses.length; j++){
                businesses[j].classList.add("active");
            }
        } else{
            listItems[i].classList.add("invisible");
        }
    }
})



$(document).ready(function(){
    $('.skill_button').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'business'){
            $('.itemBox').show('1000');
        }
    })
})
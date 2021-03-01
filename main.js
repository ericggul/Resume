const toTop = document.querySelector(".to-top")
const resumeSkills = document.querySelector(".resume_skills")

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


$(document).ready(function(){
    $('.skill_button').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'business'){
            $('.itemBox').show('1000');
        }
    })
})
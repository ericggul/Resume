const toTop = document.querySelector(".to-top")


window.addEventListener("scroll", () => {
    if (window.pageYOffset >100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos>currentScrollpos){
        document.getElementsByClassName(".resume_skills").style.top = "0";
    } else {
        document.getElementsByClassName(".resume_skills").style.top = "-50px";
    }
    prevScrollpos = currentScrollpos;
}
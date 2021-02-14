const toTop = document.querySelector(".to-top")


window.addEventListener("scroll", () => {
    if (window.pageYOffset >100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
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
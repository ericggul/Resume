
const resumeSkills = document.querySelector(".resume_skills");



window.addEventListener("scroll", () =>{
    if (window.pageYOffset > resumeSkills.offsetTop){
        resumeSkills.classList.add("sticky");
    } else {
        resumeSkills.classList.remove("sticky");
    }
})

const businesses = document.querySelectorAll(".skill_business");
const datas = document.querySelectorAll(".skill_data");
const leaderships = document.querySelectorAll(".skill_leadership");
const mathematicses = document.querySelectorAll(".skill_mathematics");
const philosophies = document.querySelectorAll(".skill_philosophy");
const listItems = document.querySelectorAll(".experiences li");

for (let k = 0; k<businesses.length; k++){
    var business = businesses[k];
    var businessClick = 0;
    business.addEventListener("click", () =>{
        businessClick += 1;
        if(businessClick%2 ==1){
            for (let j = 0; j<businesses.length; j++){
                businesses[j].classList.add("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_business');
                if (TF){
                    listItems[i].classList.add("visible");
                } else{
                    listItems[i].classList.add("invisible_business");
                }
            }
        } else{
            for (let j = 0; j<businesses.length; j++){
                businesses[j].classList.remove("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_business');
                if (TF){
                    listItems[i].classList.remove("visible");
                } else{
                    listItems[i].classList.remove("invisible_business");
                }
            }
        }
    })
}

for (let k = 0; k<datas.length; k++){
    var data = datas[k];
    var dataClick = 0;
    data.addEventListener("click", () =>{
        dataClick += 1;
        if(dataClick%2 ==1){
            for (let j = 0; j<datas.length; j++){
                datas[j].classList.add("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_data');
                if (TF){
                    listItems[i].classList.add("visible");
                } else{
                    listItems[i].classList.add("invisible_data");
                }
            }
        } else{
            for (let j = 0; j<datas.length; j++){
                datas[j].classList.remove("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_data');
                if (TF){
                    listItems[i].classList.remove("visible");
                } else{
                    listItems[i].classList.remove("invisible_data");
                }
            }
        }
    })
}

for (let k = 0; k<leaderships.length; k++){
    var leadership = leaderships[k];
    var leadershipClick = 0;
    leadership.addEventListener("click", () =>{
        leadershipClick += 1;
        if(leadershipClick%2 ==1){
            for (let j = 0; j<leaderships.length; j++){
                leaderships[j].classList.add("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_leadership');
                if (TF){
                    listItems[i].classList.add("visible");
                } else{
                    listItems[i].classList.add("invisible_leadership");
                }
            }
        } else{
            for (let j = 0; j<leaderships.length; j++){
                leaderships[j].classList.remove("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_leadership');
                if (TF){
                    listItems[i].classList.remove("visible");
                } else{
                    listItems[i].classList.remove("invisible_leadership");
                }
            }
        }
    })
}

for (let k = 0; k<mathematicses.length; k++){
    var mathematics = mathematicses[k];
    var mathematicsClick = 0;
    mathematics.addEventListener("click", () =>{
        mathematicsClick += 1;
        if(mathematicsClick%2 ==1){
            for (let j = 0; j<mathematicses.length; j++){
                mathematicses[j].classList.add("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_mathematics');
                if (TF){
                    listItems[i].classList.add("visible");
                } else{
                    listItems[i].classList.add("invisible_mathematics");
                }
            }
        } else{
            for (let j = 0; j<mathematicses.length; j++){
                mathematicses[j].classList.remove("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_mathematics');
                if (TF){
                    listItems[i].classList.remove("visible");
                } else{
                    listItems[i].classList.remove("invisible_mathematics");
                }
            }
        }
    })
}

for (let k = 0; k<philosophies.length; k++){
    var philosophy = philosophies[k];
    var philosophyClick = 0;
    philosophy.addEventListener("click", () =>{
        philosophyClick += 1;
        if(philosophyClick%2 ==1){
            for (let j = 0; j<philosophies.length; j++){
                philosophies[j].classList.add("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_philosophy');
                if (TF){
                    listItems[i].classList.add("visible");
                } else{
                    listItems[i].classList.add("invisible_philosophy");
                }
            }
        } else{
            for (let j = 0; j<philosophies.length; j++){
                philosophies[j].classList.remove("active");
            }
            var i;
            for (i = 0; i<listItems.length; i++){
                var TF = listItems[i].innerHTML.includes('skill_philosophy');
                if (TF){
                    listItems[i].classList.remove("visible");
                } else{
                    listItems[i].classList.remove("invisible_philosophy");
                }
            }
        }
    })
}





$(document).ready(function(){
    $('.skill_button').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'business'){
            $('.itemBox').show('1000');
        }
    })
})
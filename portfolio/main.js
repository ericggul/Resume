function getnumber(min,max){
    return Math.random()*(max-min)+min
}


function imageLine(i){
    return `<div class = "container-item"><img src = "../art work/art${i}.jpg"></div>`
}

const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

function earthquake(){
    $(document).animate({
        scrollTop: '+= 70'
    }, 300);
}


/*function earthquake(i){

        anime({
            targets: '.earthquake',
            translateX: -50,
            translateY: getnumber(-2,5),
            duration: 10,
            loop: 100
        });
        console.log("EARTHQUAKE");
    
    /*for (let j=0; j<i; j++){
        anime({
            targets: scrollElement,
            translateX: 30,
            translateY: -30,
            duration: 300
        });
    }*/


var sample_txt = `
    <div class = "container-item"><a href = ><img src = "../art work/art1.jpg"></a></div>
    <div class = "container-item"><img src = "../art work/art2.jpg"></div>
    <div class = "container-item"><img src = "../art work/art13.jpg"></div>
    <div class = "container-item"><h2>O, wat a great new world!</h2></div>
    <div class = "container-item"><img src = "../art work/art3.jpg"></div>
    <div class = "container-item"><img src = "../art work/art8.jpg"></div>
    <div class = "container-item"><img src = "../art work/art9.jpg"></div>
    <div class = "container-item"><img src = "../art work/art10.jpg"></div>
    <div class = "container-item"><img src = "../art work/art11.jpg"></div>
    <div class = "container-item"><h1>GALLERY</h1> <h1>GALLERY</h1> <h1>GALLERY GALLERY GALLERY</h1></div>
    <div class = "container-item"><img src = "../art work/art4.jpg"></h1></div>
    <div class = "container-item"><img src = "../art work/art5.jpg"></div>
    <div class = "container-item"><img src = "../art work/art14.jpg"></div>
    <div class = "container-item"><img src = "../art work/art6.jpg"></div>
    <div class = "container-item"><img src = "../art work/art12.jpg"></div>
    <div class = "container-item"><img src = "../art work/art7.jpg"></div>`;


for(var i = 0; i<n; i++){
    document.querySelector('.container').innerHTML = sample_txt + sample_txt+ document.querySelector('.container').innerHTML+ RIOT + imageLine(2)+sample_txt +document.querySelector('.container').innerHTML+ document.querySelector('.container').innerHTML+ Boogie_Woogie.repeat(i) + document.querySelector('.container').innerHTML+ sample_txt;
};

const toTop = document.querySelector(".to-top");
const toLeft = document.querySelector(".to-left");

var checkYScrollSpeed = (function(settings){
    settings = settings || {};
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 1000; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

var checkXScrollSpeed = (function(settings){
    settings = settings || {};
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 1000; // in "ms" (higher means lower fidelity )
    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollX;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };

})();


var modal = document.getElementById("speedmodal");
var speedlimit = document.querySelector(".speedlimit")
var container = document.querySelector(".container");
var scrollCounter= 0;

$(window).on('load', function(){
    window.scrollBy(getnumber(2456,4563),getnumber(3565,5363));
    setTimeout(function(){
        $(".loader-wrapper").hide();
        $(".speedlimit").addClass("active");
        $(".earthquake").addClass("active");
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100){
                toTop.classList.add("active");
            } else{
                toTop.classList.remove("active");
            }
        });
        $(".to-top").click(function(){
          alert("Elevator Up!");
          window.scrollBy(0,getnumber(-13556,-25));
        });

        $(".to-left").click(function(){
          alert("Elevator Down!");
          window.scrollBy(-203,5930);
        });
        $(".earthquake").click(function(){
            alert("EARTHQUAKE!!!");
            earthquake();
        });

    },2000);

    setTimeout(function(){
        $(window).scroll(function(){
        console.log(checkYScrollSpeed());
        if ((Math.abs(checkYScrollSpeed()) >100) || (Math.abs(checkXScrollSpeed())>100)){
        scrollCounter += 1;
        console.log(scrollCounter);
        if(scrollCounter == 1){
            earthquake(305);
        }
        else if(scrollCounter == 2){
            speedlimit.classList.add("flash");
        }
        /*if(scrollCounter == 3){
            speedlimit.classList.add("centerflash");
            setTimeout(function(){
                speedlimit.classList.remove("centerflash");
            }, 2000);
        }*/

        else if(scrollCounter>3){
            var someDate = new Date();
            var numberOfDaysToAdd = 30;
            var newDate = new Date(someDate.getDate() + numberOfDaysToAdd); 
            console.log(checkYScrollSpeed());
            console.log(checkXScrollSpeed());
            var maxspeed = Math.max(checkYScrollSpeed(), checkXScrollSpeed());
            console.log(maxspeed)
            speedlimit.classList.add("centerflash");
            document.getElementById("speed").innerHTML = `<p>${maxspeed}</p>`;
            document.getElementById("date").innerHTML =  `<p>${new Date().toLocaleDateString()}</p>`
            document.getElementById("futuredate").innerHTML = `<p>${newDate}</p>`
            document.getElementById("location").innerHTML = `<p>(${window.pageXOffset},${window.pageYOffset})</p>`
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
            /*setTimeout(function(){
            speedlimit.classList.remove("centerflash");
            }, 2000);*/ 
        }
    }
    })
    }, 5000);

});

/*Totop, Toleft */










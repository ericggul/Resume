const toTop = document.querySelector(".to-top");
const downloadPDF = document.querySelector(".download-pdf");
const resume = document.querySelector(".resume");

window.addEventListener("scroll", () => {
    if (window.pageYOffset >100){
        toTop.classList.add("active");
        downloadPDF.classList.add("active");
    } else{
        toTop.classList.remove("active");
        downloadPDF.classList.remove("active");
    }
})

downloadPDF.addEventListener("click", () =>{
    var opt = {
        margin: [5,2,5,2],
        filename: 'Jeanyoon_Choi_Resume.pdf',
        image: {type: 'jpeg', quality: 1}
    };
    html2pdf().from(resume).set(opt).save();
})
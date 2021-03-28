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
        image: {type: 'jpeg', quality: 75},
        html2canvas :{scale: 5, dpi: 1000, letterRendering: true, width: 1000 },
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'},
        pagebreak: {mode: ['css']}
    };
    html2pdf().from(resume).set(opt).save();
})


export function about(){

    function xdx2(){
        
        var aboutCont =document.getElementById("aboutCont")
        var supportCont =document.getElementById("supportCont")
        supportCont.style.display="none"
        aboutCont.style.display="unset"

    }



    var aboutov = document.getElementById("nav_link4");
    aboutov.addEventListener("mouseenter",()=> {xdx2();})

    





}
setTimeout(about, 200)
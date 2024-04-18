

export function support(){

    function xdx5(){
        
        var supportCont =document.getElementById("supportCont")
        var aboutCont =document.getElementById("aboutCont")

        supportCont.style.display="unset"
        aboutCont.style.display="none"
    }

    function xdx5n(){
        
        var supportCont =document.getElementById("supportCont")
        supportCont.style.display="none"
        
    }



    var supportov = document.getElementById("nav_link5");
    supportov.addEventListener("mouseenter",()=> {xdx5();})
    // supportov.addEventListener("mouseout",()=> {xdx5n();})

    





}
setTimeout(support, 200)
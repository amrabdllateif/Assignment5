function showNavbarSmallScreen(){
    document.getElementById("layer").style.display = "flex";
}
function hideNavbarSmallScreen(){
    document.getElementById("layer").style.display = "none";
}


let darkIcon=document.getElementById("dark-icon");
darkIcon.onclick=function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        darkIcon.className="fa-solid fa-sun";
    }
    else{
        darkIcon.className="fa-solid fa-moon";

    }
}
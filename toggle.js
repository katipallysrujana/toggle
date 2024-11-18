let icon=document.querySelector("i");
    icon.onclick=function(){
        if(icon.classname==="fa-solid fa-sun"){
            icon.classname="fa-solid fa-moon";
            document.body.style.backgroundColor="black"
            document.body.style.color="white"
        }
        else{
            icon.classname="fa-solid fa-sun";
            document.body.style.backgroundColor="lightgray"
            document.body.style.color="black"
        }
    }

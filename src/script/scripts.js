window.onload=function()
{
    document.getElementById("profile").addEventListener('mouseover',profilePopup);
    document.getElementById("profile").addEventListener('mouseout',profilePopup);
}

function profilePopup()
{
    const display = document.getElementById("profilePopup").style.display;
    if(display!="flex"){
        document.getElementById("profilePopup").style.display="flex";
        document.getElementById("popupShape1").style.display="block";
        document.getElementById("popupShape2").style.display="block";
    }else{
        document.getElementById("profilePopup").style.display="none";
        document.getElementById("popupShape1").style.display="none";
        document.getElementById("popupShape2").style.display="none";
    }
}

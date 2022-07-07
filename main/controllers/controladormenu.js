let menu=document.getElementById("menu")

//detecto el scroll o movimiento en la ventana
window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop==0){

        //menu es transparente
        menu.classList.add("menu")
        menu.classList.remove("menu2")

    }else{
        //menu es de color
        menu.classList.add("menu2")
        menu.classList.remove("menu")
    }

})
const boton = document.querySelector(".switch-background");
boton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    boton.classList.toggle("active");

    if(document.body.classList.contains("dark")){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.removeItem('dark-mode');
    }


});

if (localStorage.getItem("dark-mode")){
    boton.classList.add("active")
    document.body.classList.add("dark");
    
}

window.addEventListener('scroll', function (){
    var header = document.querySelector('.header');
    header.classList.toggle('abajo',this.window.scrollY>0);
})





let menuVisible = false;
//esta funcion ocultara o mostrara el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //ocultar el menu cuando ya se elige una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//con este codigo aplicamos la animacion de las skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss"); 
        habilidades[2].classList.add("postman");
        habilidades[3].classList.add("as400"); 
        habilidades[4].classList.add("jira"); 
        habilidades[5].classList.add("comunicacion"); 
        habilidades[6].classList.add("trabajo"); 
        habilidades[7].classList.add("adaptabilidad"); 
        habilidades[8].classList.add("capacidad"); 
        habilidades[9].classList.add("autoaprendizaje"); 
    }
}

//detecta el Scrolling  de la animacion de las barras
window.onscroll = function(){
    efectoHabilidades();
}
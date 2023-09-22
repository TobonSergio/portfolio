var contenidoSkills = document.getElementById("contenidoSkills");
var contenidoExperience = document.getElementById("contenidoExperience");
var contenidoEducation = document.getElementById("contenidoEducation");

document.getElementById("skills").addEventListener("click", function(){

    contenidoExperience.style.display = "none";
    contenidoEducation.style.display = "none";

    if(contenidoSkills.style.display === "none" || contenidoSkills.style.display === ""){

        contenidoSkills.style.display = "block";

    }else{

        contenidoSkills.style.display = "none";
    
    }
});

document.getElementById("experience").addEventListener("click", function(){

    contenidoSkills.style.display = "none";
    contenidoEducation.style.display = "none";

    if(contenidoExperience.style.display === "none" || contenidoExperience.style.display === ""){

        contenidoExperience.style.display = "block";

    }else{

        contenidoExperience.style.display = "none";
        
    }
});

document.getElementById("education").addEventListener("click", function(){

    contenidoSkills.style.display = "none";
    contenidoExperience.style.display = "none";

    if(contenidoEducation.style.display === "none" || contenidoEducation.style.display === ""){

        contenidoEducation.style.display = "block";

    }else{

        contenidoEducation.style.display = "none";
        
    }
});


document.getElementById("botonAboutMe").addEventListener("click", function() {
    // Encuentra la sección de destino por su identificador
    var aboutMe = document.getElementById("aboutMe");

    // Desplaza la página hasta la sección de destino
    aboutMe.scrollIntoView({ behavior: "smooth" });
});
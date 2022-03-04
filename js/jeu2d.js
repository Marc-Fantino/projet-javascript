let jeu2D = document.querySelector(".newjeu2d");
let boule = document.querySelector(".boule");

function sauter(){
    // function qui fait sauter le personnage
    if(jeu2D.classList != "animation"){
        jeu2D.classList.add('animation');
    }
    setTimeout(function(){
        jeu2D.classList.remove('animation');
    },500)
}

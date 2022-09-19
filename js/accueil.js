let menuNav = document.getElementById("header");

menuNav.innerHTML = 
`
    <a href="accueil.html" class="">Accueil</a>
    <a href="floppy.html" class="">Mes Jeux</a>
    <a href="todolist.html" class="">To Do list</a>
    <a href="produit.html" class="">Nos produits</a>
    <a href="#" class="icon" onclick="showHideMenu()">
    <i class="fa-solid fa-flower-tulip"></i>
`

let photoSurVideo = document.getElementById("containerVideo");
let video = document.createElement("div")

photoSurVideo.appendChild(video);

photoSurVideo.innerHTML =
`    
<video autoplay loop muted id="champ-video">
<source src="img/Particles - 66485.mp4" type="video/mp4" />
</video>    
<img src="img/avatar-gratuit.png" alt="photo-profil">   
<h3>Javascript Générator</h3>
<P>Artiste Graphique - Web Designer - Illustrateur</p>

`


let champImage = document.getElementById("containerLogo");

let logo1 = document.createElement("div")
let logo2 = document.createElement("div")
let logo3 = document.createElement("div")


champImage.appendChild(logo1)
logo1.classList.add("logo1")
champImage.appendChild(logo2)
logo2.classList.add("logo2")
champImage.appendChild(logo3)
logo3.classList.add("logo3")
logo1.innerHTML =
`    
<img src="img/cyberpunk-g5f76caaeb_1920.jpg" alt="image de voyage" width="300px" height="400px">
<br>

    <p>Mes envie de voyage</p>
`
logo2.innerHTML =
`  
<img src="img/food-g084a3471e_1920.jpg" alt="image de plat" width="300px" height="400px">
<br>
    
    <p>Mes plats préféré</p>
`
logo3.innerHTML =
`    
<img src="img/gamepad-gd7673a3bb_1920.jpg" alt="image de jeux" width="300px" height="400px">
<br>
    
    <p>Mes Jeux Vidéo</p>
`



function openNav(){
    document.getElementById("deroulant").style.width = "100%"
}

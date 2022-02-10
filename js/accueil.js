let menuNav = document.getElementById("header");

menuNav.innerHTML = 
`
    <a href="index.html" class="">Connexion</a>
    <a href="brique.html" class="">Casse Brique</a>
    <a href="todolist.html" class="">To Do list</a>
    <a href="produit.html" class="">Nos produits</a>
    <a href="contact.html" class="">Contact</a>
    <a href="#" class="icon" onclick="showHideMenu()">
    <i class="fa-solid fa-flower-tulip"></i>
`

let photoSurVideo = document.getElementById("champ-video");

photoSurVideo.innerHTML =

`    
<video autoplay loop muted id="champ-video">
<source src="img/Particles - 66485.mp4" type="video/mp4" />
</video>    
<img src="img/avatar-gratuit.png" alt="photo-profil">   
<h3>Javascript Générator</h3>
<i class="fa-solid fa-flower-tulip"></i>
<P>Artiste Graphique - Web Designer - Illustrateur</p>

`
let champImage = document.getElementById("champ-image");

champImage.innerHTML =

`    
    <i class="fa-solid fa-ufo"></i>
    Mes envie de voyage
    <i class="fa-solid fa-user-chef »></i>
    <p>Mes plats préféré</p>
    <i class="fa-solid fa-dice-d6 »></i>
    <p>Mes Jeux Vidéo</p>

`



function openNav(){
    document.getElementById("deroulant").style.width = "100%"
}

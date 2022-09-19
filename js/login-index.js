const login = "loginUser";
const password = "1234";

let chiffre = Math.round(Math.random()* 999);
let erreurLogin = document.getElementById("erreur");
let toto = getElementById('toto')
toto.innerHTML=chiffre
//document.getElementById("toto").innerHTML = chiffre

function openNav() {
    document.getElementById("deroulant").style.width ="100%";
}
function closeNav() {
    document.getElementById("deroulant").style.width= "0%"
}


function connexion(){
    let loginUser = document.getElementById("login").value; 
    let passwordUser = document.getElementById("password").value; 
    let chiffreUser = document.getElementById("numero").value; 
    console.log("ecris login="+loginUser)
    console.log("ecris le mot de passe="+passwordUser)
    console.log("ecris chiffre="+chiffreUser)
    console.log(chiffre)

    if(loginUser ==="" || passwordUser === "" || chiffreUser ===""){
        erreurLogin.className ="erreur";
        erreurLogin.innerHTML ="Merci de renseigner tous les champs";
    }
    else{
        if(loginUser === login && passwordUser === password && chiffreUser == chiffre){
            console.log("ok")
            document.getElementById("form").style.display ="none";
            document.getElementById("chargement").classList.add("charger");
            function connexion(){
                window.location = "accueil.html";
                
              }
              setTimeout(connexion, 5000);
        }else{
            console.log("erreur de num")
        }
    
    } 
    
}
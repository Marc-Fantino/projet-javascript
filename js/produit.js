 let Produits = [
    {
        id:1,
        nomProduits: "Jumanji",
        imageProduit: "https://th.bing.com/th/id/R.4a484e8813e2afe3c516d067887cb28d?rik=D9p3MLRWaprzWA&pid=ImgRaw&r=0",
        descriptionProduits: "Partez à l'aventure et riez dans le jeu d'action de Jumanji Survivez au défi ultime pour ceux qui cherchent à laisser leur monde derrière eux Déverrouillez de nouvelles tenues et de nouveaux styles d'armes. Il n'y a jamais deux parties de Jumanji qui se ressemblent !",
        prixProduitHt: 40.95,
        produitQuantite: 1,
        tva:0.2,
        prixTTC:0,
    },
    {
        id:2,
        nomProduits: "BATMAN: ARKHAM COLLECTION XBOX ONE",
        imageProduit: "https://cdn.cdkeys.com/700x700/media/catalog/product/b/a/batman-_arkham_collection_xbox_one_eu_cover.jpg",
        descriptionProduits: "Chaque titre Batman inclus dans le lot est accompagné de tous les DLC disponibles Faites un voyage à Arkham, et rencontrez certains des méchants les plus emblématiques de la franchise Batman",
        prixProduitHt: 35.99,
        produitQuantite: 1,
        tva:0.2,
        prixTTC:0,
    },
    {
        id:3,
        nomProduits: "TitanFall",
        imageProduit: "https://media.ldlc.com/r1600/ld/products/00/01/47/64/LD0001476405_2.jpg",
        descriptionProduits: "Situé dans un futur proche sur une lointaine frontière déchirée par la guerre, Titanfall laisse tomber les joueurs au milieu d'un conflit entre l'Interstellar Manufacturing Corporation (IMC) et la Milice. L'action est rapide et variée, avec des courses de mur de style parkour, des doubles sauts massifs et la possibilité de détourner des titans. La liberté d'aller et venir entre le pilote et le titan permet aux joueurs de changer de tactique à la volée, en attaquant ou en s'échappant selon la situation et en étendant l'action verticalement vers de nouveaux sommet",
        prixProduitHt: 9.99,
        produitQuantite:1,
        tva:0.2,
        prixTTC:0,
    }
];
// le tableau Vide
let panier = [];

function afficherProduit(){
    let listeUl = document.getElementById("tableau1")

    Produits.forEach((donnee) => {
        console.log(donnee)
        let listeItemLi = document.createElement("li");
        listeItemLi.className ="classeLI";
        listeItemLi.id = `monIdUnique-${donnee.id}`


        listeItemLi.innerHTML = 
        `
        <p>Nom du produit ${donnee.nomProduits}</p>
        <img src="${donnee.imageProduit}" alt="${donnee.nomProduits}" title="${donnee.nomProduits}" width="15%">

        <p>Prit HT :${donnee.prixProduitHt} €</p>
        <p>Taux de la TVA : 20%</p>

        `
        //Ajouter les <li> au parent <ul>
        listeUl.appendChild(listeItemLi);

        listeItemLi.addEventListener("click", () => {
            //Au clic on ajoute l'objet concerné au tableau panier
        panier.push(donnee)
            //On cache le produit du tableau produit avec du css
        listeItemLi.style.display = "none"

        console.log("Le tableau panier sous forme d'onglet" + panier);
            //On appel la fonction afficherPanier qui boucle sur le tableau panier
            afficherPanier();                
        });
    });

}
afficherProduit()
/*
function getTVA(prixHT, tauxTVA){
    console.log(prixHT * tauxTVA)
}

getTVA(200, 1.2)
*/

function afficherPanier(){

    let produitPanier = "";

    panier.forEach(Produit => {
         //On ajoute du contenu dynamique a la variable vide let produitPanier = "";
        produitPanier +=
        `
        <li class="classeLI" id="panier-produit-${Produit.id}">
        <p style="color: red">Nom du produit ${Produit.nomProduits}</p>
        <img src="${Produit.imageProduit}" alt="${Produit.nomProduits}" title="${Produit.nomProduits}" width="15%">
          <select id="selectQuantites-${Produit.id}">
            <option selected>Choisir les quantitées</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>+ 10</option>
        </select>
        <p>Prix Hors Taxe: ${Produit.prixProduitHt} €</p>
        <p id="total-${Produit.id}">TOTAL</p>
        <p id="tva-${Produit.id}">Montant de tva : </p>
        <p id="ttc-${Produit.id}">Montant TTC : </p>
    </li>
        `
    });
      //Recupd de <ul id="panier" et ajour du li + HTML
    document.getElementById("tableau2").innerHTML = produitPanier
    
    //Supprimer un produit du tableau panier
    panier.forEach(supprimer => {
    //Recup des produits caché (display none) du teableru de produit
    let produitTableau1 = document.getElementById(`monIdUnique-${supprimer.id}`);
    let produitsSupprimer = document.getElementById(`panier-produit-${supprimer.id}`);
    
    //On creer un bouton pour les produits ajouter au panier panier
    let btnSupprimer = document.createElement("button");
    btnSupprimer.id =`btn-supprimer${supprimer.id}`;
     //Ajout d'une classe au bouton supprimer
    btnSupprimer.className ="btn-chargement";
    //Ajout de texte au bouton
    btnSupprimer.innerHTML = " X ";
    produitsSupprimer.appendChild(btnSupprimer);
    
     //Au clic sur le btouton supprimer-moi
     btnSupprimer.addEventListener("click", function (){
          //alert("test de clic")
                //On fait reapparaitre le produits dans le tableau de produit avec css
    produitTableau1.style.display = "block";
    //On recupère l'index du produit dans le tableau panier
    let panierIndex = panier.indexOf(supprimer);
    console.log("index du tableau panier " + panierIndex);
    //recup de l'index du tableau pannier et suppression d'un element
            /*La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux
             éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.*/
    panier.splice(panierIndex, 1);
    console.log(panier);
     //On supprimer le noeud de type element <li> du DOM
    produitsSupprimer.remove()
     });
      //Recupération de id de chaque select quantité de chaque produit
    let selectQuantitees = document.getElementById(`selectQuantites-${supprimer.id}`);
      //Quand l'utilisateur modifie la quantité => on appel une fonction anonyme (callBack)
    selectQuantitees.addEventListener("change", () => {
        //Récupération de l'index de chaque <select><option>
        let indexQuantite = selectQuantitees.selectedIndex;
        //debug
        console.log("INDEX DE LA FENETRE DEROULANTE " + indexQuantite);
        //On multiplie le prix HT par la quantité
        let prixMutiplierQuantite = indexQuantite * `${supprimer.prixProduitHt}`;
        //debub
        console.log(prixMutiplierQuantite );
        document.getElementById(`total-${supprimer.id}`).innerHTML = "Prix HT X Quantitées = " + prixMutiplierQuantite + "€";

        //Calcul du montant de TVA  PrixHT * 20%   0.2 = 20 / 100
        let montantTVA = prixMutiplierQuantite * .2;
        console.log("montant de la tva = " + montantTVA + "euros");
         //Calcul du TTC = prixHT + TVA
         let prixTTC = prixMutiplierQuantite + montantTVA;
         console.log("Prix TTC = " + prixTTC + "euros");
             //Recup des ids dynamique creer ligne 197 - 199 etc...
            //Afficher le montant de tva et le prix TTC
            document.getElementById(`tva-${supprimer.id}`).innerHTML ="Montant de la tva a 20% : " + montantTVA + " €";
            document.getElementById(`ttc-${supprimer.id}`).innerHTML = "Montant TTC : " + prixTTC + " €";
 
    });
    });
}
afficherPanier();

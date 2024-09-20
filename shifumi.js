let pierre = document.getElementById("pierre");
let feuille = document.getElementById("feuille");
let ciseau = document.getElementById("ciseau");
let monchoix = document.getElementById("choix");
let choixBot = document.getElementById("botchoix");
let result = document.getElementById("result");


pierre.addEventListener("click",jouePierre);
feuille.addEventListener("click",joueFeuille);
ciseau.addEventListener("click",joueCiseau);

function jouePierre(){
    jeu("Pierre");
}
function joueFeuille(){
    jeu("Feuille");
}
function joueCiseau(){
    jeu("Ciseaux");
}
function jeu(choix){
    let tabChoix = ["Pierre","Feuille","Ciseau"];
    let botChoix= Math.floor(Math.random() * 3);
    monchoix.textContent = choix;
    choixBot.textContent = tabChoix[botChoix];
    if(choix =="Pierre" && botChoix == 2)
        result.textContent ="Gagné";
    else if(choix =="Ciseaux" && botChoix == 1)
        result.textContent ="Gagné";
    else if(choix =="Feuille" && botChoix == 0)
        result.textContent ="Gagné";
    else if(choix == tabChoix[botChoix])
        result.textContent ="Egalité";
    else 
        result.textContent ="Perdu";
}
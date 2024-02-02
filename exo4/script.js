function tableauSomme(tableau) {
     let somme=0 
     // une variable qui va stocker la somme des éléments du tableau initialisée à 0

     for (let i = 0; i < tableau.length; i++) {
         //  la boucle pour parcourir le tableau et apres chaque itération stocker
         // la valeur de l'élément lu dans la variable somme qui, au fil du temps accumule les valeurs qu'elle reçoit 


        somme += tableau[i];
         // autrement écrit : somme = somme + tableau[i] , 
        // i définissant la valeur de l'index dans laquelle elle se trouve

        console.log(somme);
    }
    return somme //mettre le retour de somme en dehors de la boucle pour q'elle parcoure tous les élémnets du tableau
}
// exemple
let TblExmple= [0,6,7,6,5]
let resultat= tableauSomme(TblExmple)
alert(resultat)
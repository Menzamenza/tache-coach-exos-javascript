function trouverElement(tableau,element) {
    // la fonction avec comme argument le tableau ainsi que l'élément à rechercher

    for (let i = 0; i < tableau.length; i++) {
        // la boucle pour parcourir le tableau

        if (tableau[i]===element) { //cette condition qui vérifie si l'index actuel est la même que l'élément recherché
            return true
        }        
    }
    return false 
    //return false apres la boucle pour permettre à la boucle de continuer sa recherche until la fin du tab sinon rek ymgx
}
let tab=[5,9,7,3,1,0]
let elem=4
console.log(trouverElement(tab,elem));

elem=9
console.log(trouverElement(tab,elem));

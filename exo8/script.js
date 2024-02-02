function tableauTriCroissant(tableau) {
    const tableauTrié= tableau.slice().sort().join('_')
    // .slice sans arguments créée une copie complete du tableau
    // .sort avec une fonction de comparaison tri le tableau en mode croissant
    //  si nous voulions faire le contraire alors mettre b-a
    return tableauTrié
}
const tableauNon= [8,5,6,7,2,3,9,4,1,2]
console.log(tableauNon)
const tableauTrié = tableauTriCroissant(tableauNon)
alert(tableauTrié)
console.log(tableauTrié);

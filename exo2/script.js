function TableMultiplication(nombre) { //la fonction avec comme argument nombre(qui sera plu tard le nombre à entrer)

//    boucle for pour faire l'itération tant que le c'est inférieur ou = à 10 en commençant par 0
    for (let i = 0; i <=10; i++) { 

        //une variable result qui fait la multiplication et stocke le resulat 
        let result= nombre * i
       
        alert(`${nombre} x ${i} = ${result}`)
        //ceci affiche le nombre entré x la variable i qui s'incrémente=la variable résultat(cette variable stocke le reultat)
    }
}
// mnt creer une variable pour permettre au user d'entrer un nbre et le stocke
let nbreEntre = parseInt(prompt("entrez un nombre"))

// appel de la fonction cette fois-ci avec comme paramètre la variable qui stocke le nbre entré
TableMultiplication(nbreEntre)
function genererMotDePasse(longueur) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let motDePasse = "";

    for (let i = 0; i <= longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length);
        //Math.random(): une fonction JavaScript qui génère un nombre aléatoire compris entre 0 (inclus) et 1 (exclus).
        //Cela signifie qu'elle peut générer des valeurs comme 0.1234, 0.9876, etc.
        //Chaque fois que vous appelez Math.random(), vous obtenez un nombre aléatoire différent.
        //Math.floor():une fonction JavaScript qui arrondit un nombre à l'entier inférieur le plus proche.
        //Cela signifie que Math.floor() prend le nombre obtenu à partir de Math.random() * caracteres.length et
        //arrondit ce nombre vers le bas pour obtenir un entier


        motDePasse += caracteres.charAt(indexAleatoire);
        //caracteres.charAt(indexAleatoire): Cette méthode charAt() est utilisée sur la chaîne de caractères 'caracteres' pour
        //extraire le caractère situé à l'index spécifié indexAleatoire. Cela signifie que caracteres.charAt(indexAleatoire)
        //renvoie le caractère de la chaîne 'caracteres' situé à l'index aléatoire indexAleatoire. 
        //Par exemple, si indexAleatoire est 3, alors caracteres.charAt(3) renverra le 4ème caractère de la chaîne 'caracteres'.
        //  cette ligne extrait un caractère aléatoire de la chaîne de caractères 'caracteres' en utilisant un 
        // index aléatoire généré précédemment, puis ajoute ce caractère à la fin du mot de passe en cours de construction. 
        // Cela contribue à la création du mot de passe aléatoire caractère par caractère.
        
        console.log(motDePasse);//ceci affiche dans la console les mots de passesobtenu apres chaque itération
        
    }

    return motDePasse;
}

// générer un mot de passe de longueur 7
let motDePasseLongueur8 = genererMotDePasse(7);
confirm("Mot de passe de longueur 8 :"+ " " +motDePasseLongueur8);

function voyelle(char) { 
    //un fonction qui prend la chaine de caractere char en parametre

    let sommeVoyelle=0 //initialiser le nbre de voyelle à 0

    let chaineMinus=char.toLowerCase() 
    //mnt convertir la chaine de caractère en voyelle pour 
    // la comparaison avec les voyelles dans la condition écrites en minus dans une nouvelle variable

    for (let i = 0; i < chaineMinus.length; i++) { //comme dhab la boucle pour parcourir chaque lettre de la chaine de caract
        let caractere=chaineMinus[i]
        // mettons le caractère actuel dans une variable caractère
        
        //verifions si le caractére actuel est voyelle or not
        if (caractere==='a'|| caractere==='e'||caractere==='u'||caractere==='i'||caractere==='o'||caractere==='y') {
            sommeVoyelle++ 
            //des que la boucle rencontre une voyelle elle s'incrémente et va chercher une autre
            console.log(`le nombre de voyelle ${sommeVoyelle}`);
        }
        
    }
    return sommeVoyelle //retourne en fin de compte le nbre de voyelles apres la boucle
}
let charac=prompt("veuillez entrez un mot ou phrase")
console.log(charac);
let nbreVoyelle= voyelle(charac)
alert(`Il y a ${nbreVoyelle} voyelles`)
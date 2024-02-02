// creation de la fonction
function Palindrome(mot) {
    // le param devient le mot entré par l'utilisateur avec la methode toLowerCase
    mot = prompt("saisissez un mot").toLowerCase()

    // une constante qui sépare le mot ,l'inverse et le reunit ensuite
    const inverse = mot.split('').reverse().join('')

    // verifier si le mot obtenu est le meme que celui entre
    return mot === inverse
}
const result =Palindrome("") //creer une constante qui stocke la fonction pour pouvoir l'afficher
alert((result))
console.log(result);
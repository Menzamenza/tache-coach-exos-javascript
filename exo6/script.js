function conversion(temp) {
    const tempconverti = temp*9/5+32
    return tempconverti
}
// temp=prompt("Veuillez entrer la tempérenture en Celsius")
let exple=prompt('Veuillez entrer la tempérenture en Celsius')
// toutes les deux manières marchent
const result = conversion(exple)
alert(`${exple}C° équvaut à ${result}F`)
let nombre=0
for (let i = 0; i <= 30 ; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        alert("FizzBuzz")
        console.log(i);
    }
    else if (i % 3 === 0) {
        alert("Fizz")
        console.log(i);
    }
    else if ( i % 5 === 0) {
        alert("Buzz")
        console.log(i);
    }
    else {
        alert(`${i} n'est ni un multiple de 3 ni un multiple de 5`)
        console.log(i);
    }
}

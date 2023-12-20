console.log('JS OK')

//Creo il ciclo per stampare i numeri

for (let i = 1; i <= 100; i++) {
    let flag = i;
    if (i % 3 == 0 && i % 5 == 0) {
        flag = 'BuzzFizz';
    } else if (i % 3 == 0) {
        flag = 'Fizz';
    } else if (i % 5 == 0) {
        flag = 'Buzz';
    }
    console.log('numero:', flag);

}
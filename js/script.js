console.log('JS OK')

//Recupero i tag che potrebbero servirmi
const containerNum = document.querySelector('.container');


//Creo il ciclo per stampare i numeri
const rowNumber = document.createElement('div');
rowNumber.classList.add('row', 'row-cols-1', 'text-white', 'gap-3');
for (let i = 1; i <= 100; i++) {
    const colNumber = document.createElement('div');
    colNumber.classList.add('col', 'square');
    let flag = i;
    if (i % 15 == 0) {
        colNumber.classList.add('bg-fizzbuzz');
        flag = 'FizzBuzz';
    } else if (i % 3 == 0) {
        colNumber.classList.add('bg-fizz');
        flag = 'Fizz';
    } else if (i % 5 == 0) {
        colNumber.classList.add('bg-buzz');
        flag = 'Buzz';
    }
    colNumber.classList.add('bg-normal');
    colNumber.innerText = flag;
    console.log('numero:', flag);
    rowNumber.appendChild(colNumber);
}

containerNum.appendChild(rowNumber)
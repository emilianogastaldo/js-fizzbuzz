console.log('JS OK')

//Recupero i tag che potrebbero servirmi
const containerNum = document.querySelector('.container');


//Creo il ciclo per stampare i numeri
const rowNumber = document.createElement('div');
rowNumber.classList.add('row', 'text-white');
for (let i = 1; i <= 100; i++) {
    const colNumber = document.createElement('div');
    colNumber.classList.add('col');
    let flag = i;
    if (i % 15 == 0) {
        flag = 'BuzzFizz';
    } else if (i % 3 == 0) {
        flag = 'Fizz';
    } else if (i % 5 == 0) {
        flag = 'Buzz';
    }
    colNumber.innerText = flag;
    console.log('numero:', flag);
    rowNumber.appendChild(colNumber);
}

containerNum.appendChild(rowNumber)
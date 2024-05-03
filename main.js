let index = prompt("Введите число:");
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];

function удалитьЭлемент(arr, index) {
    index = parseInt(index); 
    if (!isNaN(index) && index >= 0 && index < arr.length) {
        let удаленныйЭлемент = arr.splice(index, 1); 
        console.log(`Элемент "${удаленныйЭлемент}" удален из массива.`);
    } else {
        console.log("Такого элемента в массиве нет или введен некорректный индекс.");
    }
}

удалитьЭлемент(arr, index);

let arr2 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];

function проверкаЧисел(arr2) {
    let количествоЧисел = 0;

    for (let i = 0; i < arr2.length; i++) {
        if (typeof arr2[i] === 'number') {
            количествоЧисел++;
        }
    }

    if (количествоЧисел > 5) {
        console.log('гуд');
    } else {
        console.log('нот гуд');
    }
}

проверкаЧисел(arr2);
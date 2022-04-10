'use strict'

// !!!!!!!!!!!!!!!!!!!
// По уловию в дз запросить число должно находиться в функции
// не знаю правильно ли я сделал что каждый раз вызываю новую цункцию и оно каждый раз просит ввести число
// Но если запросить число не в функции и записать в глобальные переменые (вроде так оно называеться)
// то оно потом просто выведет по очереди ответи
// я может не правильно сделал
// я закоментил второй вариант как могло быть

// если я сделаю эти переменые не в функции будет ошибка ?
//надеюсь понял вопрос ))))))

//разкоментить
// let number = +prompt('Введите число', 1);
// let degree = +prompt('Введите степень', 1);

function mainFunction(callback){

    //закоментить
    //закрить открить страницу заново ;)
    let number = +prompt('Введите число');
    let degree = +prompt('Введите число 2(степень)');

    callback(number, degree);
}

function exponentiation(num, deg){

    let answerExp = num ** deg;

    return alert(`${answerExp}`);
}

//Доп function
function multiplay(num, deg){

    let answerMul = num * deg;

    return alert(`${answerMul}`);
}

function division(num, deg){

    let answerDiv = num / deg;

    return alert(`${answerDiv}`);
}

function modulo(num, deg){

    let answerMod = num % deg;

    return alert(`${answerMod}`);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);


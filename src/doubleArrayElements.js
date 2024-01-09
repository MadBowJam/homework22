/*
 Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
*/

const doubleArrayElements = inputArray => inputArray.map(element => element * 2);

// Використання функції
// const exampleArray = [1, 2, 3, 4, 5]
// const doubledArray = doubleArrayElements(exampleArray)
// console.log('Подвоєні елементи масиву:', doubledArray) // Виведення подвоєних елементів

module.exports = doubleArrayElements // Експорт функції

"use strict";

/*
В функцию findIndex передается число и отсортированный по возрастанию массив.
Функция должна вернуть сумму двух индексов массива, элементы которых в сумме
дают число переданное первым аргументом.
*/
function findIndexSum(val, arr) {
  const array = arr.filter((item) => item <= val);
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let sum = array[leftIndex] + array[rightIndex];
    if (sum < val) {
      leftIndex++;
    } else if (sum > val) {
      rightIndex--;
    } else {
      return leftIndex + rightIndex;
    }
  }

  return -1;
}

const arr = [2, 5, 8, 9, 22, 57, 94, 100, 127, 198, 345, 451];
// console.log(findIndexSum(79, arr)); // 4 + 5 -> 9
// console.log(findIndexSum(70, arr)); // -1

/**
 * Прислал Дмитрий Кутыршин
 *
 * Returns the rectangle object with width and height parameters and
 * getArea() method.
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

const r = new Rectangle(10, 20);
// console.log(r.width); // 10
// console.log(r.height); // 20
// console.log(r.getArea()); // 200

/*
Прислал Dariel. Задача с реального собеседования.

В функцию sumNumbers передается массив, содержащий все подряд (любые
типы данных). Необходимо реализовать функцию так, чтобы она вернула
среднее арифметическое всех элементов, которые могут быть нативно
представлены в javascript в виде числа, т.е. мы считаем значение, если
при прверащении в число, значение не является NaN.
*/
function sumNumbers(arr) {
  
}

console.log(
  sumNumbers([
    1,
    "9",
    NaN,
    9.5,
    true,
    "WebInterview",
    Symbol("5"),
    null,
    // 5n, // В jsfiddle bigint нормально не работает
    undefined,
    { a: 5 },
    () => 100,
  ])
); // 4.25

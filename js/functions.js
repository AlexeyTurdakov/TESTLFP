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

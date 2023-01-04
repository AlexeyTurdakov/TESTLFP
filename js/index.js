function getArr(num) {
  let arr = [];

  for (let i = num; i >= 0; i--) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(getArr(17));


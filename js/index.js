function func(arr) {
  let num = 0;
  for (let a of arr) {
    if (a % 2 === 0) {
      console.log(Number.isInteger(Math.sqrt(a)));
      if (Number.isInteger(Math.sqrt(a))) {
        num = num + Math.sqrt(a);
      }
    }
  }
  return num;
}


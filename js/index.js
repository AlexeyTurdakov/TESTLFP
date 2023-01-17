function Num(number) {
  let factorNum = 1;

  for (let i = 2; i <= number; i++) {
   factorNum *= i;
  }

  return String(factorNum).split('').reduce((acc, curr) => Number(acc) + Number(curr))
}


console.log(Num(100));
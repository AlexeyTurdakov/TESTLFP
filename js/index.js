function funnBizz() {
  const arr = [];
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0) {
      if (index % 5 === 0) {
        arr.push("funnbizz");
        continue;
      }
      arr.push("funn");
      continue;
    }

    if (index % 3 === 0) {
      arr.push("bizz");
      continue;
    }
    arr.push(index);
  }

  return arr;
}
console.log(funnBizz());


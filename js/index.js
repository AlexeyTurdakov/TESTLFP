

function func(arr) {
    return arr.reduce((acc = 0, cur) => {
        if (cur % 2 === 0) {
           return acc + Math.sqrt(cur)
        }
    }, 0)
}

console.log(func([3,9,4,16, 0, 36]));

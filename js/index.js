


function apl(str) {
    return Boolean(str.match(/\*/));
}

console.log(apl('string'));
console.log(apl('st*ring'));
console.log(apl('string*'));
console.log(apl('string'));
console.log(apl('string'));

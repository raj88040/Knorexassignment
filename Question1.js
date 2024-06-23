const num = 321;
function reverseNumber(n) {
    let x =Math.abs(n)
    let y = 0
    while (x > 0) {
        y = y * 10 + (x % 10)
        x = Math.floor(x/10)
    };
    return Math.sign(n) * y
};
console.log(reverseNumber(num));
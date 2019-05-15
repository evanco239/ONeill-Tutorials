// Javascript math functions
// Each of these will be 2 - Standard math functions
console.log(1+1);
console.log(3-1);
console.log(1*2);
console.log(2/1);
console.log(5 % 3);

// Javascript Math Object
// round
console.log(Math.round(1.7))
console.log(Math.round(2.1))

// floor/ceiling
console.log(Math.floor(2.9));
console.log(Math.ceil(1.2));

// square root + powers
console.log(Math.pow(3, 2))
console.log(Math.sqrt(9));

// absolute
console.log(Math.abs(-4))

// Min/max
console.log(Math.min(1, -100, 600, 10000, -4000, 2));
console.log(Math.max(1, -100, 600, 10000, -4000, 2));

// random numbers
console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.floor(Math.random() * 100));

// Trigonometry
Math.cos()
Math.sin()
Math.tan()

// converting to a number from a string
let num = '10';
console.log(typeof num);
num = parseInt(num)
console.log(typeof num);
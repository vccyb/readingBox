let a = 6;
let b = 3;

// 1
a = a + b;
b = a - b;
a = a - b;

// 2
[a, b] = [b, a];

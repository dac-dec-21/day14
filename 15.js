// Named Function
function sum(n1, n2) {
  return n1 + n2;
}

// Annonymous Function
let sum1 = function (n1, n2) {
  return n1 + n2;
};

let sum2 = (n1, n2) => {
  return n1 + n2;
};

let sum3 = (n1, n2) => n1 + n2;

console.log(sum(1, 1));
console.log(sum1(1, 1));
console.log(sum2(1, 1));
console.log(sum3(1, 1));

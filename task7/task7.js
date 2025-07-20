let zero = 0;
let counter = 3;
let my= ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];


console.log(my.reverse().splice(my.indexOf("Osama")));
console.log(my.slice(counter/counter,counter).reverse());
console.log(my[2][0].concat(my[2][1]).concat(my[1][2]).concat(my[1][3]).concat(my[1][4]).concat(my[1][5]));
console.log(my[2].slice(zero,my[2].length-counter).concat(my[1].slice(my[1].indexOf("z"))));
console.log(my[1][counter+counter/counter].concat(my[3][zero]) );

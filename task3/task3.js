let a=1_00;//100
let b=2_00.5;//200.5
let c=1e2; //100
let d=2.4;//2.4

//find smallest number in int 
console.log(Math.round(Math.min(a,b,c,d)));

//get value of 10000 using the variables
console.log(a*c);

//get 2 value from d with 4 methods

console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Number(d.toFixed()));
console.log(parseInt(d));

//use  b and d to get the values
console.log((Math.floor(b)/Math.ceil(d)).toFixed(2))//66.67->string
console.log(Math.round(Math.floor(b)/Math.ceil(d)))//67->number




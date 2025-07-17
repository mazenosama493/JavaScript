let a=10;
let b="20";
let c=80;

console.log(++a + +b++ +c++ - +a++);
/*
[++a]
-Value:11
-Description: Pre-increment operator increases the value of 'a' by 1 before using it in the expression.
[+]
-Description: add operator
[+b++]
-Value:20
-Description: Unary plus operator converts 'b' to a number, then post-increment operator
[+]
-Description: add operator
[c++]
-Value:80
-Description: Post-increment operator increases the value of 'c' by 1 after using it in the expression.
[-]
-Description: subtract operator
[+]
-Description: add operator
[a++]
-Value:11
-Description: Post-increment operator increases the value of 'a' by 1 after using it in the expression.

result 11+20+80-11=100
*/
console.log(++a + -b + +c++ - -a++ + +a);
/*
[++a]
-Value:11
-Description: Pre-increment operator increases the value of 'a' by 1 before using it in the expression.
[+]
-Description: add operator
[-b]
-Value:-20
-Description: Unary minus operator negates the value of 'b', converting it to a negative number.
[+]
-Description: add operator
[+]
-Description: add operator
[c++]
-Value:80
-Description:Post-increment operator increases the value of 'c' by 1 after using it in the expression.
[-]
-Description: subtract operator
[-]
-Description: subtract operator
[a++]
-Value:11
-Description:Post-increment operator increases the value of 'a' by 1 after using it in the expression.
[+]
-Description: add operator
[+]
-Description: add operator
[a]
-Value:12
result=11+(-20)+ +80-(-11)+12=94
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true)
/*
[--c]
-Value:79
-Description: Pre-decrement operator decreases the value of 'c' by 1 before using
[+]
-Description: add operator
[+b]
-Value:20
-Description: Unary plus operator converts 'b' to a number.
[+]
-Description: add operator
[--a]
-Value:9
[*]
-Description: multiply operator
[+]
-Description:Unary plus operator converts 'b' to a number.
[b++]
-Value:20
-Description: Post-increment operator increases the value of 'b' by 1 after using it in the expression.
[-]
-Description: subtract operator
[+b]
-Value:21
-Description: Unary plus operator converts 'b' to a number.
[*]
-Description: multiply operator
[a]
-Value:9
[+]
-Description: add operator
[--a]
-Value:8
[-]
-Description: subtract operator
[+true]
-Value:1
-Description: Unary plus operator converts 'true' to a number, which is 1.
result=79+20+(9*20)-(21*9)+8-1=97
*/


let d="-100";
let e="20";
let f=30;
let g=true;

//2000
console.log((+e % f)*-d*+g);
//173
console.log(Math.ceil((-d / ++e + +g)*f));
console.log(-d + ++g * ++e + ++f);





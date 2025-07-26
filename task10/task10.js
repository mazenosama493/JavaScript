let names=function(...args) {
    return `string ${'[' + args.join('], [')+ ']'+'=>'+'Done'}`;
}

console.log(names('Alice', 'Bob', 'Charlie'));


let names2=(...args) =>`string ${'[' + args.join('], [')+ ']'+'=>'+'Done'}`;
console.log(names2('Alice', 'Bob', 'Charlie'));



let myNumbers=[20,50,10,60];
let calc=(one,two,...nums)=> `${((one*two)/nums[0])+nums[1]}`
console.log(calc(10,60,20,50));

let calc2= function(one,two,...nums) {
    return `${((one*two)/nums[0])+nums[1]}`;
}
console.log(calc2(10,60,20,50));


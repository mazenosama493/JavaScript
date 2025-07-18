let a="Elzero Web School";

//use slice and charAT to get zero with capital z
console.log(a.charAt(2).toUpperCase()+a.slice(3,6))

//8 H
console.log(a.charAt(13).toUpperCase().repeat(8))

//return array first element is Elzero
console.log(a.split(" ")[0])

//use substr to get Elzero School
console.log(a.substr(0,6)+" "+a.substr(11))

//solution must be dynamic as string can be changed 
console.log(a.charAt(0).toLowerCase()+a.substr(1,a.length-2).toUpperCase()+a.charAt(a.length-1).toLowerCase())

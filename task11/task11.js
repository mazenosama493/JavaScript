let myString="1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,Z";//Elzero Web School

let solution = myString.split(",").filter((item)=> isNaN(item)).map((item)=> item==="_"?" ":item[+false]).reduce((acc, item)=> acc + item).slice(+false,-true);

console.log(solution);
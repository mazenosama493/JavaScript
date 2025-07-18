//ternary if
let a=10
 a<10?console.log(10):
 a>=10&&a<=40?console.log("10 to 40"):
 a>40?console.log("> 40"):
 console.log("Unkown");



 let st="Elzero Web School";

 if((st.length*2).toFixed()==="34")//or can use tostring
{
    console.log("Good");

}
if(st.charAt(st.indexOf("W"))==="W")
{
    console.log("Good");
}
if(typeof(st.length)!=="string")
{
    console.log("Good");
}
if(typeof(st)!=="number")
{
    console.log("Good");
}
if(st.substr(0,6).repeat(2)==="ElzeroElzero")
{
    console.log("Good");
}




function showDetails(arg1,arg2,arg3){
    let string=""
    let bolean=true
    let number=0
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i]==="string"){
            string=arguments[i];
        }
        else if(typeof arguments[i]==="boolean"){
            bolean=arguments[i];
        }
        else if(typeof arguments[i]==="number"){
            number=arguments[i];
        }
    }
    console.log(`"Hello ${string}, Your age is ${number} you are ${bolean=== true ? "available" : "not available"} for hire."`);

}
showDetails("Osama",38,true);
showDetails(38,"Osama",true);
showDetails(true,38,"Osama");
showDetails(false,"Osama",38);

// from if to switch statement


let job="Manager";
let salary=0;

switch(job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
}

//from switch to if statement
let holidays=0;
let money=0;

if (holidays === 0)
{
    money = 5000;
    console.log(`My money is ${money}`);
}
else if (holidays ===1 || holidays === 2)
{
    money = 2000;
    console.log(`My money is ${money}`);
}
else if (holidays === 3)
{
    money = 2000;
    console.log(`My money is ${money}`);
}
else if (holidays === 4)
{
    money = 1000;
    console.log(`My money is ${money}`);
}
else if (holidays === 5)
{
    money = 0;
    console.log(`My money is ${money}`);
}
else    
{
    money = 0;
    console.log(`My money is ${money}`);
}
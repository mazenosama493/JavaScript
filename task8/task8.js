let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"]
let myEmployees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];

if (myAdmins.includes("Stop")) {
    myAdmins.splice(myAdmins.indexOf("Stop"), myAdmins.length-1);
}

document.write(`<div>we have ${myAdmins.length} admins</div><hr>`);
for(let i=0; i<myAdmins.length; i++) {
    document.write(`<div>The admin for team ${i+1} is ${myAdmins[i]}</div>`);
    document.write(`<h3>Team members:</h3>`);
    for(let j=0; j<myEmployees.length; j++) {
        if(myEmployees[j][0]===myAdmins[i][0]){
        document.write(`<p>- ${myEmployees[j]}</p>`);
    }
    }
    document.write(`<hr>`);
}


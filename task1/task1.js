let Title="Elzero",Description="Elzero Web School",Date="25/10";

let Variable=`
    <div>
    <h3>${Title}</h3>
    <p>${Description}</p>
    <span>${Date}</span>
    </div>
`;

let result = Variable.repeat(4);
document.body.innerHTML+= result;

//document is the main object in the DOM that access the HTML document
//body is the main element in the HTML document that contains all the content
//innerHTML is a property that allows you to get or set the HTML content of an element
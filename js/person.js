console.log('Hello from script');

const name = 'Simon Cebanu';
const age = 17;
const job = 'Student';
const city = 'Tallinn';
const gender = 'Male';
console.log(typeof(name));
console.log(typeof(age));



const today = new Date();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

const html = `
    <h1> ${fullDate}</h1>
    <ul>
        <li>Name: ${name}</li> 
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>
    </ul>
`;

document.body.innerHTML = html;
import fs from "fs";
// an hard-code javascript object
//let employee = { id: 200, name: "Ajay", salary: 50000 };
let employeeArray = [
  { id: 300, name: "Brad", salary: 45000 },
  { id: 400, name: "Charles", salary: 55000 },
];
// you can't write JS object to the file, you need to write in JSON format
// converting JS to JSON using JSON.stringify(employee);
// converting JSON to JS using JSON.parse(jsonString)
let jsonString = JSON.stringify(employeeArray);
fs.writeFileSync("employee.json", jsonString); // don't use the append parameter
console.log("json file is written");
// when you read json you will get binary form data, that needs to be converted to JSON to JS
let jsonString2 = fs.readFileSync("employee.json");
console.log(jsonString2);
let employeeArray2 = JSON.parse(jsonString2); // to convert JSON to JS
employeeArray2.forEach((item, index) => console.log(`Hello ${item.name}`));

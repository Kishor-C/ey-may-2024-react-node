import { Employee } from "./employee.js";
import readline from "readline-sync";
import fs from "fs";

let id = readline.questionInt("Enter id: ");
let name = readline.question("Enter name: ");
let salary = readline.questionFloat("Enter salary: ");

let employee = new Employee(id, name, salary);
let employeeItems = fs.readFileSync("employee.json");
// since we read the json array, it must be converted to javascript to call push
let employees = JSON.parse(employeeItems);
employees.push(employee);
fs.writeFileSync("employee.json", JSON.stringify(employees));

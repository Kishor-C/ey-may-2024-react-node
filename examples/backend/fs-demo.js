import fs from "fs";

// writing to a file
fs.writeFileSync("hello.txt", "This is hello content\n", { flag: "a+" });
console.log("File writing done...");

// reading from the file
let buff = fs.readFileSync("hello.txt");
console.log(buff.toString());

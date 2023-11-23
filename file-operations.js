const fs = require('fs');

// Create a file named "welcome.txt" with content "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and console.log data from "welcome.txt"
const data = fs.readFileSync('welcome.txt', 'utf-8');
console.log(data);

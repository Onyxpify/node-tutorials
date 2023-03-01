const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//to write a new text file on the folder and add the content of first and second text file to it
writeFileSync('./content/result-sync.txt', `here is the result : 
${first}, ${second}`, {flag: 'a'})
//the flag; 'a' makes it to add two result
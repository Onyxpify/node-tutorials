const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err) 
            return 
        }
        console.log('start')
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const second = result
    writeFile('./content/result-sync.txt', 
    `here is my result : ${first}, ${second}`,
    (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('done with this task')
    }
    )
    })
})
console.log('starting next task')
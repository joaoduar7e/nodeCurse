const fs  = require("fs");


//não bloqueante
fs.readFile('text.txt', (err, data) => {
    if (err) throw er

    console.log(data.toString())
})

//bloqueante
const texto = fs.readFileSync("text.txt", "utf8")
console.log('--------------------------------')
console.log(`Texto: ${texto}`)
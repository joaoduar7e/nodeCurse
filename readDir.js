// Sem o ./ entende e procura uma api nativa
const fs = require('fs');

// Le o dir e retorna callback
fs.readdir(__dirname, (err, data) => {
    if (err) throw err;

    data.forEach((files) => {
        console.log(__dirname + '\\' + files)
    })
})
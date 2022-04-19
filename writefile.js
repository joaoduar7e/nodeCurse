// Busca o writeFile dentro do fs
const {writeFile} = require('fs');

writeFile("arquivo.txt", 'Criando arquivo de texto', err =>{
    if(err) throw err;
    console.log('Arquivo de texto criado com sucesso')
})

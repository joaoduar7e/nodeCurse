const { promisify } = require('util');

const writeFile = promisify(require('fs').writeFile);
const conteudo = "Crianco um arquivo utilizando promisify do móudlo nativo util"

writeFile('utilArq.txt', conteudo).then(() => {
    console.log('Arquivo promisify criado com sucesso')
}).catch((err) => {
    console.log(`Deu erro: ${err}`)
})
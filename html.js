const http = require('http')

const { readFile } = require('fs')

const host = '127.0.0.1'
const port = 3000
const url = `http://${host}:${port}`

let conteudo = ''

readFile('index.html', (err, data) => {
    if (err) throw err
    conteudo = data
})


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(conteudo)
})

server.listen(port, host, () => {
    console.log(`Rodando na porta ${url}`)
})

// Verifica a platforma
const open = (process.platform == 'linux' ? 'xdg-open' :
    process.platform == 'win32' ? 'start' : 'xdg-open');

// Executa no navegador
require('child_process').exec(open + ' ' + url)
const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = "8080";

//Criando Novo Arquivo
fs.writeFile('test.txt', 'Testando a criação de arquivo', (err) => {
    if (err)
        throw err;

    console.log('O arquivo foi criado com sucesso!')
})

//Cria arquivo ou Insere conteudo no Final
fs.appendFile('test.txt', '\n Outro conteudo seila', (err) => {
    if (err)
        throw err;

    console.log('O arquivo foi salvo com sucesso!')
})

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

server.listen(port, hostname, () => {
    console.log('Servidor Ok!');
})

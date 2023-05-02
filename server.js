//Criando Servidor Local

const http = require("http");
const port = 3000;

const rotas = {
    '/': 'SafeSavings',
    '/login': 'Tela de Login',
    '/cadastro': 'Tela de Cadastro',
    '/checkout': 'Carrinho',
    '/ranking': 'Ranking compradores'
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})

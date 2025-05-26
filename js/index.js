const http = require('http');

let toDo = ["Eten koken", "Ramen lappen", "Luiers kopen"];

const server = http.createServer();

server.on('request', (req, res)=> {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(toDo));
});

server.listen(3000, () => {
    console.log('Server draait op http://localhost:3000');
});
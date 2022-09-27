var colors = require('colors')
var http = require('http');
var mymodule = require('./mymodule');
const {getCurrentDate, jumlah} = require('./mymodule2')

//console.log("hallo program node js")

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    if(req.url == "/ditest") {
        res.end(JSON.stringify({
            data: 'Test',
            tanggal: mymodule.getCurrentDate(),
            jumlah: jumlah(5,9)
        }));
    } else {
        res.end(JSON.stringify({
            data: 'Hello World!'
        }));
    }
});

// 😸 server running
server.listen(8000);
console.log("😸Server was running ...8000".green)
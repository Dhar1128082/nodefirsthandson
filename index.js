const http = require('http');
const data = {
    firstName:'Dharmender Kumar',
    lastName:'Pandey',
    Age:25,
    desig:"Network Administration"
}
const server = http.createServer((req,res)=>{
    res.write('<h1>Details</h1>');
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000);
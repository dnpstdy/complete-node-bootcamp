const { log } = require("console");
const fs = require("fs"); //requre file system
const http = require('http')

////////////// FiLES ////////////////












//Blocking, Synchronous
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `this is what we know about Avocado ${textIn}.\nCreate on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// log("file written");

//None-Blocking, Asynchronous
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}` , 'utf-8',err =>{
//         log('your file has been written')
//       })
//     });
//   });
// });
// log("Will read File");


////////////// SERVER  ////////////////
const server = http.createServer((req,res) => {
    const pathName = req.url;

    if(pathName === '/overview'){
        res.end('This is the PRODUCT')
    }
    res.end('Hello from the server')
});

server.listen(8000,'127.0.0.1', () => {
    console.log('Listening on Port 8000')
});
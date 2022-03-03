const fs = require("fs");
const http = require("http");


const requestHandler = (request, response) => {
     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     if(request.url === "/home" || request.url === "/"){
          response.write("<h2>Home</h2>");
          fs.appendFileSync("text.txt", "Home")
          }
     else if(request.url == "/about"){
          response.write("<h2>About</h2>");
          fs.appendFileSync("text.txt", "About")
          }
     else if(request.url == "/contact"){
          response.write("<h2>Contacts</h2>");
          fs.appendFileSync("text.txt", "Contacts")
          }
     else{
          response.write("<h2>Not found</h2>");
          fs.appendFileSync("text.txt", "Not found")
          }
          response.end();
     };
         
 http.createServer(requestHandler).listen(3000);   



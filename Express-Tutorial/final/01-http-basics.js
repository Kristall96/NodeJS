const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>home page</h1>");
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);

//////////////////////////////////////////////////////Моите записки////////////////////////////////////////////////////////////////////
// Node js First Step creating web server
const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeAppJS = readFileSync("./navbar-app/browser-app.js");
const homeImg = readFileSync("./navbar-app/logo.svg");
//  Create a Server Second Step
// const server = http.createServer((request, response) => {
// Third  step: Send back the request to client
//   console.log(request.method);
const url = request.url;
if (url === "/") {
  // Home page
  response.writeHead(200, { "content-type": "text/html" }); // ако е txt/html то използва HTML / text/plain е чист текст
  response.write(homePage);
  response.end();
  console.log(request.url);
} else if (url === "/styles.css") {
  // style Main Page
  response.writeHead(200, { "content-type": "text/css" }); // ако е txt/html то използва HTML / text/plain е чист текст
  response.write(homeStyle);
  response.end();
  console.log(request.url);
} else if (url === "/browser-app.js") {
  // JS Logic
  response.writeHead(200, { "content-type": "script" }); // ако е txt/html то използва HTML / text/plain е чист текст
  response.write(homeAppJS);
  response.end();
  console.log(request.url);
} else if (url === "/logo.svg") {
  // Logo
  response.writeHead(200, { "content-type": "image/svg+xml" }); // ако е txt/html то използва HTML / text/plain е чист текст
  response.write(homeImg);
  response.end();
  console.log(request.url);
} else {
  // 404
  response.writeHead(404, { "content-type": "text/html" }); // ако е txt/html то използва HTML / text/plain е чист текст
  response.write("<h1>404 Page Doesn't Exist!</h1)");
  response.end();
  console.log(request.url);
}
// });

// Forth step:
server.listen(5000);

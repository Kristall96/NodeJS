const http = require("http");

/**Това е преправено от ChatGPT и работи идеално */
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end(`<h1>Welcome to about page</h1>`);
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for </p> 
      <a href="/">back home</a>`);
  }
});

/** 
 * това е оригинала но не работи защотот не мога да извиквам страницата отново
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end(`<h1>Welcome to about page</h1>`);
  }

  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for </p> 
  <a href="/">back home</a>`); // Corrected the closing anchor tag
});
 */
server.listen(5000);

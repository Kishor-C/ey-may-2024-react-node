import http from "http";
// creates the server & the callback is called once a request is made
// callbackFn takes 2 parameters 1st is request & 2nd is response
let server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  let username = "Guest";
  res.write(`<html><body>
  <h2>Welcome to my website</h2>
  <h3>Hello ${username}, happy to see you here</h3>
  </body></html>`);
  res.end();
});
server.listen(8181, () =>
  console.log("Server started, use http://localhost:8181")
);
// to start the server we must call listen(port, callbackFn)

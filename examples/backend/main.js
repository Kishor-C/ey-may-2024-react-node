import express from "express";
import cors from "cors";

// create an express object that gives http methods: get, post, put, delete, listen
let app = express();
// middleware that is intercepted for each request
app.use(cors()); // to enable different domains to send request
app.use(express.json()); // intercepts json in the request body & converts to javascript

// HTTP POST that accepts profile data
app.post("/profile", (request, response) => {
  // reads the JSON data from the request body in the form JS
  let profile = request.body;
  console.log(profile); //print to verify what is the data
  response.json({ message: "DB Store needs to implemented" });
});

// a GET /greet/anyValue
app.get("/greet/:username", (req, res) => {
  let name = req.params["username"];
  res.status(200).json({ message: `Hello ${name}` });
});
// start the server using app.listen(port, callbackFn)
app.listen(9090, () =>
  console.log("Server started in 9090, use base URI http://localhost:9090")
);

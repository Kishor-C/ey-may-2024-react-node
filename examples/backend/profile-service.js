import express from "express";
import cors from "cors";
import {
  store,
  findById,
  findAll,
  updatePhone,
  authenticate,
} from "./dbprofile.js";
let app = express();
app.use(cors()); // middleware/interceptor that intercepts each request from any domain
app.use(express.json()); // middleware/interceptor that intercepts request body having json

app.listen(9999, () => console.log("Server is running in 9999"));

// login by decoding the header
app.get("/profiles", async (request, response) => {
  let auth = request.headers.authorization;
  //split the authorization using space because we get like 'Basic encodedValue'
  let authValue = auth.split(" ");
  let encodedValue = authValue[1];
  // decoding the value
  let decodedValue = Buffer.from(encodedValue, "base64").toString();
  let decodedArray = decodedValue.split(":");
  let _id = parseInt(decodedArray[0]);
  let pwd = decodedArray[1];
  // method that connects to DB & checks id & password
  let result = await authenticate(_id, pwd);
  if (result != null) {
    response.status(200).json(result);
  } else {
    response.status(404).json({ message: "Invalid id or password" });
  }
});

// calling CRUD operations using HTTP methods
app.post("/profiles", async (request, response) => {
  let doc = request.body;
  try {
    let result = await store(doc);
    response.status(200).json(result);
  } catch (err) {
    if (err.errorResponse.code == 11000) {
      response.status(409).json({ error: "Id already exists" });
    } else {
      response.status(404).json({ error: "Something went wrong" });
    }
  }
});

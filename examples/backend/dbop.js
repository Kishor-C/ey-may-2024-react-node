// import MongoClient it is the class provides functions to interact with the MongoDB
import { MongoClient } from "mongodb";
// URL to connect to the mongodb
let DB_URL = "mongodb://127.0.0.1:27017"; // mongodb://ip:port
// connecting to the database
MongoClient.connect(DB_URL)
  .then((value) => {
    // value is the connection object
    // switch to the db using db function
    let db = value.db("mydb");
    let doc = {
      _id: 4,
      name: "Kishor2",
      password: "kishor2123",
      dob: new Date(1999, 11, 22),
      phone: 998998,
      email: "k@g",
    };
    // access the collection and store using collection("collectionName").insertOne(document)
    db.collection("profiles")
      .insertOne(doc)
      .then((s) => console.log(s))
      .catch((e) => console.log(e))
      .finally(() => value.close());
  })
  .catch((error) => console.log(error));

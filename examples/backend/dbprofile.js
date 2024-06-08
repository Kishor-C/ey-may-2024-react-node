import { MongoClient } from "mongodb";
let DB_URL = "mongodb://127.0.0.1:27017";
// to connect to the db, returns the Promise
async function dbconnection(url) {
  let con = null;
  try {
    con = await MongoClient.connect(url);
  } catch (e) {
    throw "DB Connection failed";
  }
  return con;
}
// CRUD operations : store, find, delete & update

// update the phone no in the document based on id
export async function updatePhone(id, ph) {
  let value = null;
  try {
    value = await dbconnection(DB_URL);
    let db = value.db("mydb");
    return await db
      .collection("profiles")
      .updateOne({ _id: id }, { $set: { phone: ph } });
  } catch (e) {
    throw e;
  } finally {
    value.close();
  }
}
// find the document using id and password
export async function authenticate(id, pwd) {
  let value = null;
  try {
    value = await dbconnection(DB_URL);
    let db = value.db("mydb");
    return await db.collection("profiles").findOne({ _id: id, password: pwd });
  } catch (e) {
    throw e;
  } finally {
    value.close();
  }
}
// finding all the documents
export async function findAll() {
  let value = null;
  try {
    value = await dbconnection(DB_URL);
    let db = value.db("mydb");
    return await db.collection("profiles").find().toArray();
  } catch (e) {
    throw e;
  } finally {
    value.close();
  }
}

// finding the document based on the id
export async function findById(id) {
  let value = null;
  try {
    value = await dbconnection(DB_URL);
    let db = value.db("mydb");
    return await db.collection("profiles").findOne({ _id: id });
  } catch (e) {
    throw e;
  } finally {
    value.close();
  }
}

// storing the document by writing a reusable store
export async function store(doc) {
  // dbconnection(DB_URL).then().catch() [or]
  // try { await dbconnection(DB_URL)} catch(err) { }
  let value = null;
  try {
    value = await dbconnection(DB_URL);
    let db = value.db("mydb");
    return await db.collection("profiles").insertOne(doc);
  } catch (e) {
    throw e;
  } finally {
    value.close();
  }
}
// now invoke store like store({}).then().catch() or try { store({}) }

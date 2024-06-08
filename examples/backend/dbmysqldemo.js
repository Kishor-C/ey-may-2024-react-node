import mysql from "mysql2/promise";

let connection = undefined;

try {
  connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 10000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
} catch (err) {
  console.log(err);
}

async function store(id, name) {
  const [result, fields] = await connection.execute(
    "insert into test(id, name) values(?,?)",
    [id, name]
  );

  return result;
}

async function findById(id) {
  const [result, fields] = await connection.execute(
    "select *  from test where id = ?",
    [id]
  );
  return result;
}
findById(2).then((r) => console.log(r));

// store(6, "Six")
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));

import { useState } from "react";

export function UserInput() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let handleClick = (e) => {
    let inputName = e.target.name;
    if (inputName == "username") setName(e.target.value);
    if (inputName == "userage") setAge(e.target.value);
  };
  let handleSubmission = (e) => {
    alert("Sending " + name + " and " + age + " to DB is pending");
  };
  return (
    <div>
      <h2>
        Hello {name} and your age {age}
      </h2>
      <input type="text" name="username" onChange={handleClick} />
      <input type="number" name="userage" onChange={handleClick} />
      <br />
      <button onClick={handleSubmission}>Update</button>
    </div>
  );
}

export function Person(props) {
  let username = props.username;
  return username != undefined ? (
    <div>Hello {username} </div>
  ) : (
    <div>Hello Guest</div>
  );
}

export function UsersList(props) {
  let users = props.users;
  let roundCorner = { borderRadius: "50%" };
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>State</th>
            <th>City</th>
            <th>Pin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.imageURL}
                  style={roundCorner}
                  width="50"
                  height="50"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.address?.state}</td>
              <td>{user.address?.city}</td>
              <td>{user.address?.pin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Teams(props) {
  let teams = props.teams;

  return (
    <div>
      <h2>Teams: {props.message}</h2>
      <ol>
        {teams.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ol>
    </div>
  );
}
export function Hello(props) {
  let name = props.name;
  let age = props.age;
  let coloring = { color: "blue", backgroundColor: "yellow" };
  return (
    <div>
      <h2 style={coloring}>
        Hello {name}, your age is {age}
      </h2>
    </div>
  );
}

export function User(props) {
  // a props with name, profession, imageURL
  let { name, profession, imageURL } = props.user;
  return (
    <div>
      <h3 className="text-success">Hello {name}</h3>
      <img src={imageURL} width="100" height="100" />
      <p className="text-primary">Your profession is {profession}</p>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
export function ProfileSuccess() {
  // extracts value from /success/1, success/2 & so on
  let { profileId } = useParams();

  return (
    <div>
      <h3>Hello {profileId}, you have logged in</h3>
      <Link to="/login">Signout</Link>
    </div>
  );
}

export function ProfileLogin() {
  let [profileId, setProfileId] = useState("");
  let [password, setPassword] = useState("");

  // a code to test the axios library using fake api
  let handleClick = (e) => {
    let FAKE_URL = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(FAKE_URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // useNavigate() to navigate to the components programmatically
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault(); // inbuilt function that stops reloading the page on submit
    // encode the profileId & password using Buffer in base64
    let encodedValue = Buffer.from(profileId + ":" + password).toString("base64");
    let URL = "http://localhost:9999/profiles";
    // call the webservice by passing this encodedValue in the authorization header
    // get(URL, headers)
    axios
      .get(URL, { headers: { Authorization: "Basic " + encodedValue } })
      .then((r) => navigate("/success/" + profileId))
      .catch((e) => alert(e.response.data.message));
  };
  return (
    <div>
      <Link to="/register">Create Account</Link>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={profileId}
            className="form-control w-25"
            type="number"
            placeholder="Enter profile id"
            name="profileId"
            onChange={(e) => setProfileId(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            value={password}
            className="form-control w-25"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="btn btn-secondary me-1"
            type="submit"
            value="Login"
          />
          <input
            className="btn btn-secondary me-1"
            type="reset"
            value="Reset"
          />
        </div>
      </form>
      <div>
        <h3>Fake API Testing</h3>
        <button className="btn btn-secondary" onClick={handleClick}>
          Users
        </button>
      </div>
    </div>
  );
}

export function ProfileRegistration() {
  let [profileId, setProfileId] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [dob, setDob] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [passwordError, setPasswordError] = useState("");

  // useEffect is used to add effects to the components
  // import it from 'react' library
  useEffect(() => {
    if (password != confirmPassword) {
      setPasswordError("Password and Confirm Password must match");
    } else {
      setPasswordError("");
    }
  }, [password, confirmPassword]);

  // event handler to prevent the default submission and submit to the backend
  let handleSubmit = (e) => {
    e.preventDefault(); // inbuilt function that stops reloading the page on submit
    if (password != confirmPassword) {
      alert("Password and Confirm Password must match");
    } else {
      let reqBody = {
        _id: parseInt(profileId),
        name: name,
        password: password,
        dob: dob,
        phone: phone,
        email: email,
      };
      let BE_URL = "http://localhost:9999/profiles";
      axios
        .post(BE_URL, reqBody)
        .then((s) => {
          console.log(s.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div>
      <Link to="/login">Sign In</Link>
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            placeholder="Enter profile id"
            name="profileId"
            onChange={(e) => setProfileId(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {passwordError != "" ? (
              <span className="text-danger">{passwordError}</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <label>Select Birthday</label>
          <input
            type="date"
            name="dob"
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Enter phone no."
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <input type="submit" value="Register" />
          <input type="reset" value="Reset" />
        </div>
      </form>
      <div>
        {name != "" ? (
          <p className="text-primary">
            Hello {name}, you are trying to register
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export function MyApp() {
  return (
    <div>
      <Routes>
        <Route path="" element={<ProfileLogin />} />
        <Route path="/login" element={<ProfileLogin />} />
        <Route path="/register" element={<ProfileRegistration />} />
        <Route path="/success/:profileId/*" element={<ProfileSuccess />} />
      </Routes>
    </div>
  );
}

import { useState } from "react";
import axios from "axios";

function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelNameChange = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handelConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  };
  const handelSubmit = () => {
    console.log(userName);
    console.log(password);
    console.log(confirmPassword);
    updateToDB(userName, password, confirmPassword);
    if (password === confirmPassword) {
      setUserName("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  function updateToDB(username, password, confirmpassword) {
    axios
      .post("https://login-nx0e.onrender.com/register/register", {
        username: username,
        password: password,
        confirmpassword: confirmPassword,
      })
      .then((data) => {
        alert("uploded to db");
      })
      .catch((err) => {
        console.log("error");
      });
  }
  return (
    <>
      <h1>Login In Form</h1>
      <form>
        <ul className="wrapper">
          <li className="form-row">
            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="User Name"
              onChange={handelNameChange}
            ></input>
          </li>
          <li className="form-row">
            <label>Password</label>
            <input
              type="password"
              id="townborn"
              placeholder="New Password"
              onChange={handelPassword}
            ></input>
          </li>
          <li className="form-row">
            <label>Confirm Password</label>
            <input
              type="password"
              id="email"
              placeholder="Confirm Password"
              onChange={handelConfirmPassword}
            ></input>
          </li>
          <li className="form-row">
            <button type="submit" onClick={handelSubmit}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default Home;

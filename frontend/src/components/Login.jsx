import React from "react";
import { useState } from "react";
import http from "axios";

function Login(props) {
  const loggedIn = props.loggedIn;
  const setLoggedIn = props.setLoggedIn;
  const setWhichPage = props.setWhichPage;
  const setMessage = props.setMessage;
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      await http.post(
        "http://localhost:4000/api/users/login",
        {},
        {
          headers: {
            authorization: usernameValue + ":::" + passwordValue,
          },
        }
      );
      setLoggedIn(true);
      setMessage("Successful login");
      sessionStorage.setItem("user", usernameValue);
      setWhichPage("userpage");
    } catch (err) {
      setMessage('Wrong username or password');
    }
  };

  return (
    <div className="login">
      <div id="container">
        <h1>Log In</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <button className="link" onClick={(event) => login(event)}>
            Log in
          </button>
          <button onClick={() => setWhichPage("reg")}>
            Go to registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

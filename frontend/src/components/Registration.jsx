import React from "react";
import "../index.css";
import { useState } from "react";
import http from "axios";

function Registration(props) {
  const setWhichPage = props.setWhichPage;
  const setMessage = props.setMessage;
  const [nameValue, setNameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [hospital1Value, setHospital1Value] = useState("");
  const [hospital2Value, setHospital2Value] = useState("");
  
  let isNameInvalid = nameValue.length < 5;
  let isUsernameInvalid = usernameValue.length < 5;
  let isPasswordInvalid = passwordValue.length < 5;
  let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  let regex = new RegExp(emailPattern);

  /*
    const login = async () => {
      try {
        const response = await http.post(
          `${backend}/api/login`,
          {},
          {
            headers: {
              authorization: authEmail + ":::" + authPassword,
            },
          }
        );
        setToAppear("collection");
        //console.log(response);
        localStorage.setItem("sessionId", response.data);
        //     localStorage.setItem("password", authPassword);
        setLoggedIn("true");
        setMessage("Succesful login");
      } catch (err) {
        setMessage("Wrong email or password");
        return;
        //        setToAppear("signup")
      }
    };

    const signup = async () => {
      try {
        await http.post(`${backend}/api/signup`, {
          password: password,
          email: email,
        });
        setToAppear("login");
        setPassword("");
        setEmail("");
        setMessage("Successful sign up");
        return;
      } catch (err) {
        if (!err.response) {
          setMessage("Ooops... something went wrong");
          return;
        } else if (err.response.status === 409) {
          setMessage("User already exists, please use the login");
          return;
        } else if (err.response.status === 400) {
          setMessage("Missing credentials");
          return;
        }
      }
    };

    useEffect(() => {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      if (!email || !password) return;
      setAuthEmail(email);
      setAuthPassword(password);
      //    setToAppear('login')
    }, []);
    //console.log(buttonToAppear);

*/
  
    
    
  const signUp = async () => {
    try {
      await http.post("http://localhost:4000/api/users/signup", {
        name: nameValue,
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
      });
      // localStorage.setItem("username", usernameValue);
      setNameValue("");
      setUsernameValue("");
      setEmailValue("");
      setPasswordValue("");
      setMessage("Successful signup, please login");
    } catch (err) {
      console.log(err.response);
      if (!err.response) {
        setMessage("Oops... Something went wrong");
      }
      if (err.response.status === 409) {
        setMessage("Username or email already in use");
      }
      if (err.response.status === 400) {
        setMessage("Missing credentials");
      }
    }
    setWhichPage("login");
  };

  return (
    <div className="registration">
      <div id="container">
        <h1>Registration</h1>
        <form name="myform">
          <input
            type="text"
            placeholder="Name"
            required
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <div className="required">
            {isNameInvalid ? "Required field! Minimum 5 character!" : ""}
          </div>
          <input
            type="text"
            placeholder="Username"
            required
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
          />
          <div className="required">
            {isUsernameInvalid
              ? "Required field! Minimum 5 character!"
              : ""}
          </div>
          <input
            type="email"
            placeholder="E-mail"
            required
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <div className="required">
            {regex.test(emailValue)
              ? ""
              : "Required field, format example: example@example.ex"}
          </div>
          <input
            type="password"
            placeholder="Password"
            required
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <div className="required">
            {isPasswordInvalid
              ? "Required field! Minimum 5 character!"
              : ""}
          </div>

          <button className="link" onClick={signUp} disabled={!isNameInvalid && !isUsernameInvalid && !regex.test(emailValue) && !isPasswordInvalid}>Register</button>
          <button onClick={() => setWhichPage("login")}>Go to login</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;

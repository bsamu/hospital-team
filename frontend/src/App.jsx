import { React, useState } from "react";
import "./index.css";
import Menu from "./components/Menu";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Admin from "./components/Admin";
import Ordering from "./components/Ordering";
import History from "./components/History";
import Userpage from "./components/Userpage";

function App() {
  const [whichPage, setWhichPage] = useState("welcome");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

<<<<<<< HEAD
  let a = null;
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="container">
        {/* <Menu
=======


  return (
    <>
      <div className="container">

        <Menu
>>>>>>> fdf350530c1b7326d43eee5eed70e655daca0694
          setWhichPage={setWhichPage}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        /> */}
        <button onClick={() => setIsShown(!isShown)}>Click</button>
        {/* {isShown && <p>{a?.b?.c}</p>} */}
        {isShown && <p>{a.b.c}</p>}
        {whichPage === "welcome" && <Welcome />}
        {loggedIn === false && whichPage === "reg" && (
          <Registration setWhichPage={setWhichPage} setMessage={setMessage} />
        )}
        {loggedIn === false && whichPage === "login" && (
          <Login
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setWhichPage={setWhichPage}
            setMessage={setMessage}
          />
        )}
        {loggedIn === true && whichPage === "userpage" && (
          <Userpage setMessage={setMessage} />
        )}
        {loggedIn === true && whichPage === "admin" && (
          <Admin setMessage={setMessage} />
        )}
        {loggedIn === false && whichPage === "ordering" && (
          <Ordering setMessage={setMessage} />
        )}
        {loggedIn === true && whichPage === "history" && (
          <History setMessage={setMessage} />
        )}

      </div>
      <div className="message">{message}</div>
    </>
  );
}

export default App;

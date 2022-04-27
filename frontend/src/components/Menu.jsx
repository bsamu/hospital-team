import React from "react";
import "../index.css";

function Menu(props) {
  const setWhichPage = props.setWhichPage;
  const loggedIn = props.loggedIn;
  const setLoggedIn = props.setLoggedIn;

  const logout = () => {
    // sessionStorage.removeItem("user");
    setLoggedIn(false);
    setWhichPage("welcome");
  };

  return (
    <>
      {loggedIn === false ? (
        <div className="menu">
          <div className="menu-inner">
            <ul className="menu-nav">
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={() => setWhichPage("welcome")}>Home</div>
                  </span>
                </a>
              </li>
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={() => setWhichPage("reg")}>Registration</div>
                  </span>
                </a>
              </li>
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={() => setWhichPage("login")}>Login</div>
                  </span>
                </a>
              </li>
              
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={() => setWhichPage("ordering")}>Ordering</div>
                  </span>
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      ) : (
        <div className="menu">
          <div className="menu-inner">
            <ul className="menu-nav">
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={() => setWhichPage("admin")}>Admin</div>
                  </span>
                </a>
              </li>
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={() => setWhichPage("ordering")}>Ordering</div>
                  </span>
                </a>
              </li>
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={() => setWhichPage("history")}>History</div>
                  </span>
                </a>
              </li>
              <li className="menu-nav-item">
                <a className="menu-nav-link">
                  <span>
                    <div onClick={logout}>Logout</div>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;

import React, { useState } from "react";
import "./JoinUs.css";
import axios from "axios";
import logo from "./images/login_img.png";

const JoinUs = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerMobile, setRegisterMobile] = useState();
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [changeEmail, setChangeEmail] = useState("");
  const [changeNewPassword, setChangeNewPassword] = useState("");
  const [changeConfirmNewPassword, setChangeConfirmNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const loginf = (event) => {
    event.preventDefault();
    const data = {
      email: loginEmail,
      password: loginPassword,
    };
    try {
      axios
        .post("http://localhost:5000/users/login", data)
        .then((response) => {
          if (response.data.status === "ok") {
            alert("Succesfully Logged In");
            window.location.href = "/locations";
            setLoginEmail("");
            setLoginPassword("");
          } else {
            alert(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      alert(err);
    }
  };

  const registerf = (event) => {
    event.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      alert("Please make sure confirm password is same as Password");
      return;
    }
    const data = {
      email: registerEmail,
      mobile_no: registerMobile,
      password: registerPassword,
    };
    try {
      axios
        .post("http://localhost:5000/users/register", data)
        .then((response) => {
          if (response.data.status === "ok") {
            alert("Succesfully Registered and Logged In");
            window.location.href = "/locations";
            setRegisterEmail("");
            setRegisterPassword("");
            setRegisterMobile("");
            setRegisterConfirmPassword("");
          } else {
            alert(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      alert(err);
    }
  };

  const changepasswordf = (event) => {
    event.preventDefault();
    if (changeNewPassword !== changeConfirmNewPassword) {
      alert("Please make sure confirm password is same as Password");
      return;
    }

    const data = {
      email: changeEmail,
      oldPassword: oldPassword,
      password: changeNewPassword,
    };
    try {
      axios
        .post("http://localhost:5000/users/changepassword", data)
        .then((response) => {
          if (response.data.status === "ok") {
            alert("Succesfully Password Changed and Logged In");
            window.location.href = "/locations";
            console.log(response.data);
            setChangeEmail("");
            setChangeNewPassword("");
            setOldPassword("");
            setChangeConfirmNewPassword("");
          } else {
            alert(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <img src={logo} alt="site icon" className="loginPage_icon" />
      <div className="white_bar"></div>
      <div className="shabd">
        Your travel itinerary, <br /> just a few clicks away...
      </div>
      {!showRegister && (
        <section>
          <div className="center">
            <h1>Login</h1>
            <form onSubmit={loginf}>
              <div className="txtfield">
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
                <span> </span>
                <label>Email</label>
              </div>
              <div className="txtfield">
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
                <span> </span>
                <label>Password</label>
              </div>
              <div
                className="pass"
                onClick={() => {
                  setShowForgetPassword(true);
                }}
              >
                Change Password
              </div>
              <input type="submit" value="Login" />
              <div className="signup_link">
                Not a member?
                <button
                  className="register_button"
                  onClick={() => {
                    setShowRegister(true);
                  }}
                >
                  Register here
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
      {showRegister && (
        <div class="center">
          <h1>Register</h1>
          <form onSubmit={registerf}>
            <div class="txtfield">
              <input
                type="email"
                required
                value={registerEmail}
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
              <span> </span>
              <label>Email</label>
            </div>
            <div class="txtfield">
              <input
                type="number"
                required
                value={registerMobile}
                onChange={(event) => {
                  setRegisterMobile(event.target.value);
                }}
              />
              <span> </span>
              <label>Mobile No.</label>
            </div>
            <div class="txtfield">
              <input
                type="password"
                required
                value={registerPassword}
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
              <span> </span>
              <label>Password</label>
            </div>
            <div class="txtfield">
              <input
                type="password"
                required
                value={registerConfirmPassword}
                onChange={(event) => {
                  setRegisterConfirmPassword(event.target.value);
                }}
              />
              <span> </span>
              <label>Confirm Password</label>
            </div>
            <input type="submit" value="Register" />
            <div className="signup_link">
              Already have an account?
              <button
                className="register_button"
                onClick={() => {
                  setShowRegister(false);
                  setShowForgetPassword(false);
                }}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      )}

      {!showRegister && showForgetPassword && (
        <>
          <div class="center">
            <h1>Change Password</h1>
            <form onSubmit={changepasswordf}>
              <div class="txtfield">
                <input
                  type="email"
                  required
                  value={changeEmail}
                  onChange={(event) => {
                    setChangeEmail(event.target.value);
                  }}
                />
                <span> </span>
                <label>Email</label>
              </div>
              <div class="txtfield">
                <input
                  type="password"
                  required
                  value={oldPassword}
                  onChange={(event) => {
                    setOldPassword(event.target.value);
                  }}
                />
                <span> </span>
                <label>Old Password</label>
              </div>
              <div class="txtfield">
                <input
                  type="password"
                  required
                  value={changeNewPassword}
                  onChange={(event) => {
                    setChangeNewPassword(event.target.value);
                  }}
                />
                <span> </span>
                <label>New Password</label>
              </div>
              <div class="txtfield">
                <input
                  type="password"
                  required
                  value={changeConfirmNewPassword}
                  onChange={(event) => {
                    setChangeConfirmNewPassword(event.target.value);
                  }}
                />
                <span> </span>
                <label>Confirm Password</label>
              </div>
              <input type="submit" value="Change Password" />
              <div className="signup_link">
                Not a member?
                <button
                  className="register_button"
                  onClick={() => {
                    setShowRegister(true);
                    setShowForgetPassword(false);
                  }}
                >
                  Register here
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default JoinUs;

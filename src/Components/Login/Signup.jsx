import React, { useState } from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
// import { GoogleLogout } from "react-google-login";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    let str = e.target.value;
    if (str.includes("@") && str.includes(".")) {
      setShowPassword(true);
      setEmail(e.target.value)
    } else {
      setShowPassword(false);
    }
  };


  const responseGoogle = (res) => {
    // console.log(res);
    let data = { ...res.profileObj, events: {} };
    // console.log(data);
    localStorage.setItem("login", JSON.stringify(data));
  };

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }

  const handleRegister =(e)=>{
    let creadentials = {password, email};
    localStorage.setItem("login", JSON.stringify(creadentials));
    document.location.href = "http://bookmyhotel.live/login";
  }

  return (
    <div className={styles.login}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <p><span>BookMyHotel</span><span>.com</span></p>
          </Link>
        </div>
        
      </div>

      <div className={styles.form}>
        <h2 className={styles.formheading}>Sign in or create an account</h2>
        <form action="">
          <label htmlFor="email">Email address</label>
          <input
            onChange={handleEmailChange}
            className={styles.input}
            type="email"
            name="email"
            id="email"
            autoFocus
          />
          {showPassword ? (
            <div>
              <label htmlFor="password1">Password</label>
              <input
                className={styles.input}
                type="password"
                name="password1"
                id="password1"
              />
              <label htmlFor="password2">Confirm Password</label>
              <input
                className={styles.input}
                onChange={handlePasswordChange}
                type="password"
                name="password2"
                id="password2"
              />
            </div>
          ) : null}
          <input
            className={styles.button}
            type="button"
            onClick={handleRegister}
            value="Create account"
          />
          <div className={styles.account}>
            Already have account login <a href="/login">Here!</a>
          </div>
        </form>
      </div>

      <div className={styles.line}>
        <hr className={styles.hr} />
        <p className={styles.p}>or use Google</p>
        <hr className={styles.hr} />
      </div>

      <div className={styles.authlogin}>
        <GoogleLogin
          clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className={styles.google}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img
                className={styles.googleimage}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-KxlZ9aqVMbPO3Ll49gBa3Ro245LV3KdLR2w4kQO4gy_PYVGJTPv4mBaJmVRNK4WPp4&usqp=CAU"
                alt=""
              />
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div className={styles.line1}>
        <hr />
        <p className={styles.p1}>
          By signing in or creating an account, you agree with our{" "}
          <span style={{ color: "blue" }}>Terms & Conditions</span> and{" "}
          <span style={{ color: "blue" }}>Privacy Statement</span>
        </p>
        <hr />
      </div>
      <div className={styles.line1}>
        <p className={styles.p1}>All rights reserved.</p>
        <p className={styles.p1}>Copyright - 2023 – BookMyHotel.com™</p>
      </div>
    </div>
  );
};

export default SignUp;

// <GoogleLogout
//                   className={styles.logout}
//                   clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
//                   buttonText=""
//                   onLogoutSuccess={logoutres}
//                 >
//                   <span>logout</span>
//                 </GoogleLogout>

// const logoutres = () => {
//     console.log("logout");
//   };

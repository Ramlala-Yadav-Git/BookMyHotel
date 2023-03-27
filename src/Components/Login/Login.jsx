import React, { useState } from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    let str = e.target.value;
    if (str.includes("@") && str.includes(".")) {
      setShowPassword(true);
      setEmail(e.target.value);
    } else {
      setShowPassword(false);
    }
  };

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }


  const responseGoogle = (res) => {
    let data = { ...res.profileObj, events: {} };
    if(data.events.email){
      localStorage.setItem("login", JSON.stringify(data));
    }
    setTimeout(() => {
      let data = JSON.parse(localStorage.getItem("login"));
      if(!data.password) {
        localStorage.removeItem("login");
        data = null;
        return;
      };
      if (data) {
        document.location.href = "http://bookmyhotel.live/";
        alert("You have successfully Logged In")
      }
    }, 5000)

  };
  const handleLogin = (event)=>{
    let creadentials = JSON.parse(localStorage.getItem("login"));
    if(creadentials &&  creadentials.email == email && creadentials.password == password ){
      document.location.href = "/";
    }else{
      alert("Wrong credentail please enter try again!!")
    }
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
        <h2 className={styles.formheading}>Sign in </h2>
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
                onChange={handlePasswordChange}
                type="password"
                name="password1"
                id="password1"
              />
            </div>
          ) : null}
          <button
            className={styles.button}
            type="button"
            onClick={handleLogin}
            defaultValue="Login"
          >Login</button>
          <div className={styles.account}>
            Don't have account create one <Link to="/register">Here!</Link>
          </div>
        </form>
      </div>

      {/* <div className={styles.line}>
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
                alt="img"
              />
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
        
      </div> */}
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

export default Login;

export const Logout = () => {
  const logoutres = () => {
    console.log("logout");
  };

  return <div> 
    <button className={styles.logout}>
       logout
    </button>
    {/* <GoogleLogout
      className={styles.logout}
      clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
      buttonText=""
      onLogoutSuccess={logoutres}
    >
      <p style={{ marginBottom: "8px", marginRight: "10px" }} className={styles.logoutText}>logout</p>
    </GoogleLogout> */}
  </div>

}



import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import { LOGIN, SERVER } from "../../Config/Config";
import axios from "axios"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

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


  const handleLogin = (event)=>{
    const payload ={
      email,
      password
    }
    axios.post(LOGIN, payload).then((res)=>{
      if(res.error){
        alert(res.error);
      }
      else{
        console.log(res, "loogedin");
        localStorage.setItem("login", JSON.stringify(res.data));
        alert("Successfully logged in !!")
        history.push("/");
      }
    });
    
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
  </div>

}



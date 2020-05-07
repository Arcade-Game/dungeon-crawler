import React, {useState} from "react";
import {connect} from "react-redux";
import {registerUser, loginUser}
from "../Redux/authReducer";
// import {withRouter} from "react-router-dom";

const Auth = (props) => {
   const [username, setUsername] = useState(""),
             [password, setPassword] = useState(""),
             [verPassword, setVerPassword] = useState(""),
             [email, setEmail] = useState(""),
             [registerToggle, setRegisterToggle] = useState(false);

   const clearPlaceholder = (inputId, newValue) => {
      console.log(newValue)
      if(newValue){
         document.getElementById(inputId).placeholder = ""
      } else {
         document.getElementById(inputId).placeholder = inputId
      }
   },
   handleRegister = () => {
      if (password === verPassword){
         props.registerUser(username, password, email);
         props.history.push("/town")
      }
      else {
         console.log ("password do not match");
         setVerPassword("");
      }
   },

   handleLogin = async () => {
   await props.loginUser(username, password);
   props.history.push("/town")
   }
console.log(username)
console.log(password)
   return (
      <div className="auth-container">
         <div className="login-container">
            <h1>{registerToggle ? "Register" : "Sign In"}</h1>
            <input id="login" value={username} placeholder="Username" 
            onChange={(event) => setUsername(event.target.value)}
            onFocus={() => clearPlaceholder ("login")}
            onBlur={() => clearPlaceholder("login", "Username")}/>
            <input id="password" value={password} type="password" placeholder="Password" 
            onChange={(event) => setPassword(event.target.value)}
            onFocus={() => clearPlaceholder("password")}
            onBlur={() => clearPlaceholder("password", "Password")}/>
            {registerToggle 
            ? (
               <>
                  <input id="verPassword" value={verPassword} type="password" placeholder="Verify Password" 
                  onChange={(event) => setVerPassword(event.target.value)}
                  onFocus={() => clearPlaceholder("verPassword")}
                  onBlur={() => clearPlaceholder("verPassword", "Verify Password")}/>
                  <input id="email" value={email} placeholder="Email" 
                  onChange={(event) => setEmail(event.target.value)}
                  onFocus={() => clearPlaceholder("email")}
                  onBlur={() => clearPlaceholder("email", "Email")}/>
               </>
            ) : null
            }
         </div>
         <div className="button-container">
            {!registerToggle 
            ? (
               <>
                  <button onClick={() => handleLogin()}>Login</button>
                  <p> 
                  <span className="register-toggle-off" onClick={() => setRegisterToggle(!registerToggle)}>Register</span>
                  <span className="login-toggle-on">Login</span>
                  </p>
               </>
               ) : (
               <>
                  <button onClick={() => handleRegister()}>Register</button>
                  <p> 
                  <span className="register-toggle-on">Register</span>
                  <span className="login-toggle-off"onClick={() => setRegisterToggle(!registerToggle)}>Login</span>
                  </p>
               </>)
            }
         </div>
      </div>
      )
}
export default connect(null, {registerUser, loginUser})(Auth);
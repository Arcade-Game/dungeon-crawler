import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
// import {getCurrentUser} from "../Redux/authReducer";
import axios from "axios";
import { setUser } from "../Redux/authReducer";
// import {withRouter} from "react-router-dom";

const Auth = (props) => {
   const [username, setUsername] = useState(""),
             [password, setPassword] = useState(""),
             [verPassword, setVerPassword] = useState(""),
             [email, setEmail] = useState(""),
             [registerToggle, setRegisterToggle] = useState(false);

//  useEffect (() => {
//     props.getCurrentUser()
//  },[])


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
         axios.post("/api/auth/register", {username, password, email})
         .then(({data}) => {
            console.log(data);
            setUser(data.userName)
         }).catch(err => console.log(err));
         props.history.push("/town")
      }
      else {
         console.log ("password do not match");
         setVerPassword("");
      }
   },

   handleLogin = async () => {
      axios.post("/api/auth/login", {username, password})
      .then(res => {
         console.log(res.data);
         setUser(res.data.userName)
      }).catch(err => console.log(err));
   props.history.push("/town")
   }

   // handleLogout = () => {
   //    axios.post("/api/auth/logout")
   // }


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
export default connect(null, setUser)(Auth);
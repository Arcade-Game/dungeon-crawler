import React, {useState, useEffect, useRef} from "react";
import {connect} from "react-redux";
import axios from "axios";
import { setUser } from "../Redux/reducers/authReducer";
import {TweenMax, Power1} from 'gsap';
import './auth.scss';
import { Tween } from "gsap/gsap-core";

const Auth = (props) => {
   const [username, setUsername] = useState(""),
             [password, setPassword] = useState(""),
             [verPassword, setVerPassword] = useState(""),
             [email, setEmail] = useState(""),
             [registerToggle, setRegisterToggle] = useState(false),
             [loginToggle, setLoginToggle] = useState(false);

   let authScreen = useRef(null);
   let authTitle = useRef(null);
   let logReg = useRef(null);
   let topScroll = useRef(null);
   let botScroll = useRef(null);
   let logCon = useRef(null);
   let inCon = useRef(null);
   let regBut = useRef(null);
   let logBut = useRef(null);
   let butCon = useRef(null);

   useEffect(() => {
      TweenMax.fromTo(
         authTitle,
         4.5,
         {
            x: 145,
            y: 44,
            opacity: 0
         },
         {
            x: 165,
            opacity: 1
         }
      ).delay(.8)

      TweenMax.fromTo(
         logReg,
         4,
         {
            opacity: 0
         },
         {
            opacity: 1
         }
      ).delay(5)

      TweenMax.fromTo(
         botScroll,
         4,
         {
            opacity: 0
         },
         {
            opacity: 1
         }
      ).delay(5)

      TweenMax.fromTo(
         butCon,
         2,
         {
            opacity: 0
         },
         {
            opacity: 1
         }
      ).delay(8)

      TweenMax.to(
         logCon,
         2,
         {
            height: 700
         }
      ).delay(6)

      TweenMax.to(
         botScroll,
         1.25,
         {
            top: 653
         }
      ).delay(6)

      TweenMax.fromTo(
         inCon,
         1.5,
         {
            opacity: 0
         },
         {
            opacity: 1
         }
      ).delay(8)

   }, [])

     

   useEffect (() => {
      // localStorage.clear()
      console.log(localStorage.length)
      if (localStorage.length != 0){
         props.history.push("/town")
      }
      else {
         console.log("sign in")
      }
   },[])
   const clearPlaceholder = (inputId, newValue) => {
      if(newValue){
         document.getElementById(inputId).placeholder = newValue
      } else {
         document.getElementById(inputId).placeholder = ""
      }
   },

   handleRegister = () => {
      if (password === verPassword){
         axios.post("/api/auth/register", {username, password, email})
         .then(res => {
            props.setUser(res.data)
            if (res.data){ 
               props.history.push("/town") 
            }
         }).catch(err => console.log(err));
      }
      else {
         console.log ("password do not match");
         setVerPassword("");
      }
   },

   handleLogin = async () => {
      axios.post("/api/auth/login", {username, password})
      .then(res => {
         props.setUser(res.data)
         if (res.data){ 
            props.history.push("/town") 
         }
      }).catch(err => console.log(err));
   },

   handleUsername = (event) => {
      console.log(loginToggle)
      setUsername(event.target.value)
      setLoginToggle(true)
      console.log(loginToggle)
   }

   return (
      <div className='auth-background' >
         <audio src={require("../music/Soliloquy.mp3")} autoPlay />
         <div className="auth-container" ref={el => {authScreen = el}}>

   <span className="auth-title" ref={el => {authTitle = el}}><span style={{fontSize: "110px", fontFamily: "'Bilbo Swash Caps', cursive"}}>V</span>indermere</span>

         <div className="scroll-bottom" ref={el => {botScroll = el}}></div>
         <div className="login-container" ref={el => {logCon = el}}>
            <div className="scroll-top" ref={el => {topScroll = el}}></div>
            
            <div className='login-register' ref={el => {logReg = el}}>
               <div className='input-container' ref={el => {inCon = el}} style={registerToggle ? {height: "150px", width: "120%"} : null}>
                  <input id="login" value={username} placeholder="Username"
                              onClick={() => setLoginToggle(true)} 
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
            </div>
            <div className="button-container" ref={el => {butCon = el}}>

                  {
                     !registerToggle ? (
                        <>
                        <span className="register-toggle" onClick={() => setRegisterToggle(!registerToggle)}>Register</span>
                        <button className='login-button' ref={el => {logBut = el}} onClick={() => handleLogin()}>Login</button></>) 
                        : 
                        <>
                        <button className='register-button' onClick={() => handleRegister()}>Register</button>
                        <span className="login-toggle"onClick={() => setRegisterToggle(!registerToggle)}>Login</span>
                        </>
                  }
               
               
{/*                
               <span className="register-toggle" ref={el => {regBut = el}}>Register</span>
               
               <span className="register-toggle" onClick={() => setRegisterToggle(!registerToggle)}>Register</span>) */}


               {/* {!registerToggle 
               ? (loginToggle ? (
                  <>
                     <p> 
                     </p>
                  </>
                  <>
                     <p> 
                     </p>
                  </>)
               } */}
            </div>
         </div>


         </div>
      </div>
      )
}
export default connect(null, {setUser})(Auth);
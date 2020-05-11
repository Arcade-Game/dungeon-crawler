import React, { useState } from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {setHeroList} from "../../../Redux/reducers/heroesReducer"
import { setUser } from "../../../Redux/reducers/authReducer";
import {selectHero} from "../../../Redux/reducers/heroReducer"
import axios from "axios";
import "./Inn.scss";
const Inn = (props) => {

   const saveGame = () => {
      console.log("Game may have been saved?")
   },

   handleLogout = async () => {
        await  axios.post("/api/auth/logout").then(res => {
           console.log(res.data)
            localStorage.clear()
            // props.setHeroList()
            // props.setUser()
            // props.selectHero()
         }).catch(err => console.log(err))
         // window.location.reload()
         window.location.assign("/")
      
   }
   
console.log(props)
   return (
      <div className="inn-screen-container"
               onClick={(event)=> props.stopPropagation(event)}> 
         <div className="inn-container">
            {props.hero.file_id ? (
            <button className="inn-option-button" onClick={() => saveGame()}>SAVE</button>
            ) : (<button className="inn-option-button" disabled>SAVE</button>)
            }
            <button className="inn-option-button"
            onClick={() => handleLogout()}>LOGOUT</button>
         </div>
      </div>
   )
   }
const mapStateToProps = reduxState => reduxState
export default withRouter(connect(mapStateToProps, {setUser, setHeroList, selectHero})(Inn));
// export default withRouter(connect(mapStateToProps)(Inn));
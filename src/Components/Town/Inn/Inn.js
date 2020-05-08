import React, { useState } from "react";
import {connect} from "react-redux";
import {setHeroList} from "../../../Redux/reducers/heroesReducer"
import { setUser } from "../../../Redux/reducers/authReducer";
import axios from "axios";
import "./Inn.scss";
const Inn = (props) => {

   const saveGame = () => {
      console.log("Game may have been saved?")
   },

   handleLogout = () => {
         axios.post("/api/auth/logout").then(res => {
            console.log(res.data)
            props.setHeroList({})
            props.setUser({})

         }).catch(err => console.log(err))
      
   }
   

   return (
      <div className="inn-screen-container"
               onClick={(event)=> props.stopPropagation(event)}> 
         <div className="inn-container">
            <div className="inn-option-button" onClick={() => saveGame()}>SAVE</div>
            {/*  save option not available if not character is selected*/}
            <div className="inn-option-button"
            onClick={() => handleLogout()}>LOGOUT</div>
         </div>
      </div>
   )
   }

export default connect(null, {setUser, setHeroList})(Inn);
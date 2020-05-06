import React, {useState, useEffect} from "react";
import Equipment from "./Inventory/Equipment"
const CharacterStats = () => {
   const [charName, setCharName] = useState("Ryan"),
             [charLevel, setCharLevel] = useState(),
             [classBaseStats] = useState([5, 0, 1])
             [charHealth, setCharHealth] = useState(),
             [charArmor, setCharArmor] = useState(),
             [charDamage, setCharDamage] = useState(),
             [charStats, setCharStats] = useState(classBaseStats)

   useEffect (() => {
      setCharHealth(classBaseStats[0] + charLevel)
      setCharArmor(0 + (Math.floor(charLevel/3)))
      setCharDamage(1 + (Math.floor(charLevel/2)))
   },[charLevel])
   const getCharStats = (equipment) => {
      charHealth + charLevel + equipment.health
      charArmor + charLevel + equipment.armor
      charDamage + charLevel + equipment.damage
   }
   const getCharArmor = (equipment) => {
   }
   const getCharDamage = (equipment) => {
   }
   return (
      <div className="stats"> 
         <Equipment />
      </div>
   )
}

export default CharacterStats;
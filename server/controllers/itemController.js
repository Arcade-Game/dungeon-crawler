const itemList = require("../../db/inventory/item_list.json");
const inventory = [0,0,0,0,0,0,0,0];
const equipment = require("../../db/inventory/equipment.json");
const keys = require('../../db/inventory/keys.json');


module.exports = {
   deleteItem: (req, res) => { 
      const {id} = req.params,
                {equipped} = req.body;
      console.log("id: ", id, "equ: ",equipped)
      if (equipped === "true"){
         console.log("delete true")
         const index = equipment.findIndex(item => item.id ===+id);
         // let zeroIndex = inventory.findIndex(e => e === 0)
         const equipped = equipment[index]
         equipped.id = null;
         equipped.name = "";
         equipped.damage = "" ;
         equipped.armor = "";
         equipped.image ="";
         console.log(equipment)
      } else  if (equipped === "false"){
         console.log("delete false")
         inventory.splice(id, 1, 0)
         console.log(inventory)
      } else {
         console.log("DELETE ITEM ERROR")
      }
      // const equipped = equipment[index]
      // equipped.id = null;
      // equipped.name = "";
      // equipped.damage = "" ;
      // equipped.armor = "";
      // equipped.image ="";
      res.status(200).send({equipment, inventory});
   },
   findItem: async(req, res) => {
      const db = req.app.get('db')
      let item = await db.session.get_item()
      console.log(item)
      res.status(200).send(item[0]);
   },
   findKey: (req, res) => {
      let index = inventory.findIndex(e => e === 0)
      let key = keys[0]
      index !== -1 ? inventory.splice(index, 1, key) : null
      res.status(200).send(inventory)
   },
   equippedItems: (req, res) => {
      const {weapon} = req.params;
      let wep = equipment.find(item => item.type.toLowerCase() === weapon.toLowerCase())
      res.status(200).send(wep)
   }

}
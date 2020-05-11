const itemList = require("../../db/inventory/item_list.json");
const inventory = [0,0,0,0,0,0,0,0];
const equipment = require("../../db/inventory/equipment.json");


module.exports = {
   findItem: (req, res) => {
      let num = Math.floor(Math.random() * itemList.length)
      console.log("inventory1", inventory)
      let index = inventory.findIndex(e => e === 0)
      index !== -1 ? inventory.splice(index, 1, itemList[num]) : null
      console.log("inventory", inventory)
      res.status(200).send(inventory);
      // push  from item_list to  equipment if already using an item put in inventory
   },
   
   equippedItems: (req, res) => {
      const {weapon} = req.params;
      let wep = equipment.find(item => item.type.toLowerCase() === weapon.toLowerCase())
      res.status(200).send(wep)
   }

}
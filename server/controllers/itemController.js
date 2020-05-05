const itemList = require("../../db/inventory/item_list.json");
const inventory = [0,0,0,0,0,0,0,0];
const equipment = require("../../db/inventory/equipment.json");


module.exports = {
   getInventory: (req, res) => {
      res.status(200).send(inventory);
   },

   equipItem: (req, res, next) => {
      const {index} = req.params;
      const {id, name, type, damage, armor, image} = req.body.item
      if (id){
      const itemIndex = equipment.findIndex(item => item.type === type);
      inventory.splice(index, 1, 0)
      const equipped = equipment[itemIndex]
      equipped.id = id;
      equipped.name = name;
      equipped.damage = damage || equipped.damage;
      equipped.armor = armor || equipped.armor;
      equipped.image = image;
      // if you place on top of an  item unequip it
         res.status(200).send({equipment, inventory});
      }
   },

   unEquipItem: (req, res) => { 
      const {id} = req.params;
      // console.log(id)
      if (id){
      const index = equipment.findIndex(item => item.id ===+id);
      // console.log(index)
      // console.log(equipment[index])
      let zeroIndex = inventory.findIndex(e => e === 0)
      // console.log("zero: ", zeroIndex)
      inventory.splice(zeroIndex, 1, {...equipment[index]})
      console.log(inventory)
      const equipped = equipment[index]
      equipped.id = null;
      equipped.name = "";
      equipped.damage = "" ;
      equipped.armor = "";
      equipped.image ="";
      res.status(200).send({equipment, inventory});
      }
   },

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

   findItem: (req, res) => {
      let num = Math.floor(Math.random() * itemList.length)
      console.log("inventory1", inventory)
      let index = inventory.findIndex(e => e === 0)
      index !== -1 ? inventory.splice(index, 1, itemList[num]) : null
      console.log("inventory", inventory)
      res.status(200).send(inventory);
      // push  from item_list to  equipment if already using an item put in inventory
   },

}
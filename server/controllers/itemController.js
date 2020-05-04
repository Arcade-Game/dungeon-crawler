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
   },

   unEquipItem: (req, res) => { 
      const {id} = req.params;
      const index = equipment.findIndex(item => item.id ===+id);
      let zeroIndex = inventory.findIndex(e => e === 0)
      inventory.splice(zeroIndex, 1, equipment[index])
      const equipped = equipment[index]
      equipped.id = null;
      equipped.name = "";
      equipped.damage = "" ;
      equipped.armor = "";
      equipped.image ="";
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
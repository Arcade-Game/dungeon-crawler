const monsterList = require('../../db/combat/monster.json')
const characterList = require('../../db/combat/charStats.json')

module.exports = {
   monsterStats: (req, res) => {
      const {id} = req.params;
      const monster = monsterList.find(monster => monster.id === id)
      res.status(200).send(monster)
   },
   charStats: (req, res) => {
      const {id} = req.params;
      const character = characterList.find(char => char.id === id)
      res.status(200).send(character)
   }
}
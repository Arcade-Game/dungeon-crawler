const monsterList = require('../../db/combat/monster.json')
const characterList = require('../../db/combat/charStats.json')

module.exports = {
   monsterStats: (req, res) => {
      const {monsterType} = req.params;
      console.log(monsterType)
      const monster = monsterList.find(monster => monster.name === monsterType)
      res.status(200).send(monster)
   },
   charStats: (req, res) => {
      const {classType} = req.params;
      const character = characterList.find(char => char.class.toLowerCase() === classType)
      res.status(200).send(character)
   }
}
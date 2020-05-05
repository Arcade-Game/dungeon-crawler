const monsters = require('../../db/combat/monster.json')

module.exports = {
    getMonster: (req, res) => {
        let num = Math.floor(Math.random() * monsters.length)
        let monster = monsters[num]
        res.status(200).send(monsters[num])
    }
}
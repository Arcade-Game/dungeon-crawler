module.exports = {
   getHeroes: async (req, res) => {
      const player_id = req.params.id,
                db = req.app.get("db");
      let heroes = await db.hero.get_heroes(player_id)
             await Promise.all(heroes.map( async (el,i) => {
                   let inventory = await db.hero.get_inventory(el.file_id)
                   let equipment = await db.hero.get_equipment(el.file_id)
                  el.inventory = [...inventory],
                  el.equipment = [...equipment]
            }))
      res.status(200).send([heroes])
},

createHero: async (req, res) => {
      const { player_id, heroName, class_id } = req.body;
                  db = req.app.get("db");
      let saveFile = await db.hero.create_hero(player_id, heroName, class_id)
      let newHero = await db.hero.get_hero(saveFile[0].file_id)
            newHero.forEach(el => {
                  el.inventory = [0, 0, 0, 0, 0, 0, 0, 0],
                  el.equipment = [{type: "weapon"}, {type: "two-hand"}, {type: "off-hand"}, {type: "armor"}, {type: "helm"}, {type: "boots"}]
            })
            res.status(201).send(newHero)
},

}
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

getClasses: (req, res) => {
      const db = req.app.get("db");
            db.hero.get_classes().then(classes => {
                  res.status(200).send(classes)
            }).catch(err => res.status(500).send(err))
},

      createHero: async (req, res) => {
            const { player_id, heroName, gender, class_id } = req.body;
                        db = req.app.get("db");
            let saveFile = await db.hero.create_hero(player_id, heroName, gender, class_id)
            let newHero = await db.hero.get_hero(saveFile[0].file_id)
                  newHero.forEach(el => {
                        el.inventory = [0, 0, 0, 0, 0, 0, 0, 0],
                        el.equipment = [{type: "weapon"}, {type: "two-hand"}, {type: "off-hand"}, {type: "armor"}, {type: "helm"}, {type: "boots"}]
                  })
                  res.status(201).send(newHero)
},

      deleteHero: (req, res) => {
            const {id} = req.params;
                  db = req.app.get("db");
            db.hero.delete_hero(id).then(() => {
                  res.sendStatus(200)
            }).catch(err => res.status(500).send(err))
      },

      saveHero: async (req, res) => {
            const {id} = req.params,
                      {player_id, gold, deaths, equipment, inventory} = req.body;
                  db = req.app.get("db")
            db.hero.save_hero(id, gold, deaths)
            db.session.delete_inventory(id)
            db.session.delete_equipment(id)
            await inventory.forEach (el => ( el.item_id ? ( console.log(el),
                  db.session.save_inventory(id,el.item_id))
                  : null ))
            await equipment.forEach (el => ( el.item_id ? ( console.log(el),
                  db.session.save_equipment(id,el.item_id))
                  : null ))

            console.log(id)
            console.log(player_id)
            console.log(gold)
            console.log(equipment)
            console.log(inventory)

            res.sendStatus(200)
      }


}
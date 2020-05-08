module.exports = {
   getHeroes: async (req, res) => {
      const player_id = req.params.id,
                db = req.app.get("db");

      let heroes = await db.hero.get_heroes(player_id)
             await Promise.all(heroes.map( async (e,i) => {
                   let inventory = await db.hero.get_inventory(e.file_id)
                   let equipment = await db.hero.get_equipment(e.file_id)
                  e.inventory = [...inventory],
                  e.equipment = [...equipment]
            }))

      res.status(200).send([heroes])
},

createHero: (req, res) => {
//       const {player_id, hero_name, class_id} = req.body;
//       db = req.app.get("db");
//       console.log(player_id);
//       console.log("hit");
//       let heroes = await db.hero.create_hero(player_id),

}


}
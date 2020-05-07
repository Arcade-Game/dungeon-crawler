module.exports = {
   getHeroes: async (req, res) => {
      const player_id = req.params.id,
                db = req.app.get("db");
      console.log(player_id);
      console.log("hit");
      let heroes = await db.saved.get_heroes(player_id),
            inventory = await db.saved.get_inventory(player_id),
            equipment = await db.saved.get_equipment(player_id)
      // fileId = heroes.map(el => el.file_id),
      // equ = equipment.filter(e => e.file_id === fileId.map(el => el))
      // test = 
      //  test = [];
      // for ( let i = 0; i < heroes.length; i++){
      //    console.log("i",i)
      //    for (let j = 0; j < equipment.length; j++){
      //       if  (equipment[j].file_id === heroes[i].file_id)
      //          test.push(equipment[j])
      //    }
      // }
      // console.log(test);

      // console.log(equ)

      res.status(200).send([...equipment, ...heroes, ...inventory])
},

// get MAP


}
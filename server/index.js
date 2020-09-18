require('dotenv').config()
const express = require('express'),
      cors = require("cors"),
      massive = require('massive'),
      session = require("express-session"),
      {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, MONGO_STRING} = process.env,
      authCtrl = require("./controllers/authController"),
      itemCtrl = require("./controllers/itemController"),
      combatCtrl = require("./controllers/combatController"),
      monsterCtrl = require("./controllers/monsterController"),
      mapCtrl = require("./controllers/mapController"),
      heroCtrl = require("./controllers/heroController"),
      port = SERVER_PORT,
      mongoose = require('mongoose'),
      app = express();

app.use(cors())
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) ); 

app.use(session({
   resave: false,
   saveUninitialized: true,
   secret: SESSION_SECRET,
   cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

mongoose.connect(
   MONGO_STRING,
   {useNewUrlParser: true, useUnifiedTopology: true},
   () => console.log("MongoDB Connected")
)

massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
}).then(db => {
   app.listen(port, () => console.log(`Server running on port: ${port}`))
   app.set("db", db)
   console.log("DB connected")
})

//auth endpoints 
app.post("/api/auth/register", authCtrl.register);
app.post("/api/auth/login", authCtrl.login);
app.post("/api/auth/logout", authCtrl.logout);

//map endpoints
app.get("/api/maps", mapCtrl.getMaps);
app.get("/api/map", mapCtrl.getMap);
app.post("/api/map/create", mapCtrl.createMap);
app.put("/api/map/edit", mapCtrl.editMap);
app.get("/api/tiles", mapCtrl.getTiles);
app.post("/api/tile/create", mapCtrl.createTile);

//item endpoints
app.get("/api/item", itemCtrl.getRandomItem);
app.get("/api/items/:quantity", itemCtrl.getRandomItems);
app.get('/api/equipped-items/:weapon', itemCtrl.equippedItems);
app.get('/api/key', itemCtrl.findKey);

//combat endpoints
app.get('/api/monster-stats/:monsterType', combatCtrl.monsterStats);
app.get('/api/character-stats/:classType', combatCtrl.charStats);

//hero endpoints
app.get("/api/classes", heroCtrl.getClasses);
app.get("/api/heroes/player/:id", heroCtrl.getHeroes);
app.post("/api/heroes", heroCtrl.createHero);
app.put("/api/hero/:id", heroCtrl.saveHero);
app.delete("/api/hero/:id", heroCtrl.deleteHero);


//monster endpoints
app.get('/api/monster', monsterCtrl.getMonster);

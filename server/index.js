require('dotenv').config()
const express = require('express'),
      cors = require("cors"),
      massive = require('massive'),
      session = require("express-session"),
      {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env,
      authCtrl = require("./controllers/authController"),
      itemCtrl = require("./controllers/itemController"),
      combatCtrl = require("./controllers/combatController"),
      monsterCtrl = require("./controllers/monsterController"),
      port = SERVER_PORT,
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

massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
}).then(db => {
   app.set("db", db)
   console.log("DB connected")
   app.listen(port, () => console.log(`Server running on port: ${port}`))
})

//auth endpoints 
app.post("/api/auth/register", authCtrl.register);
app.post("/api/auth/login", authCtrl.login);
app.post("/api/auth/logout", authCtrl.logout);
app.get("/api/auth/user", authCtrl.getCurrentUser);

//item endpoints
app.get("/api/item", itemCtrl.findItem);
app.get("/api/inventory", itemCtrl.getInventory);
app.put("/api/inventory/:index", itemCtrl.equipItem);
app.put("/api/equipment/:id", itemCtrl.unEquipItem);
app.post("/api/item/:id", itemCtrl.findItem);

//combat endpoints
app.get('/api/monster-stats/:id', combatCtrl.monsterStats);
app.get('/api/character-stats/:id', combatCtrl.charStats);

//monster endpoints
app.get('/api/monster', monsterCtrl.getMonster);

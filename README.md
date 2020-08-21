Game is playable and hosted on Digital Ocean, and can be found at http://vindermere.com/#/.

Game starts in Auth.js.  Scroll animation done with GreenSock.  Authentication encryption done with the Bcrypt package.  

Upon registration and login, you are routed to the "Town View", held in Town.js.  If you have a hero selected, it will show in the bottom left corner.  If there is no hero selected, than the "Heroes" div will blink in the center of the screen, prompting you to create your character.  Choose between three classes with different stats, and two genders.  

Once a character has been created, hit "Begin" to route to the main game view, contained in Game.js.  The center map component is created in Map.js, and each square in the map is a rendering of Tile.js.  Hitting any of the arrow keys, or WASD, will update the character index, which will reconfigure the map around that central index, and rerender the new Map and Tile components.  The logic for detecting arrow or WASD keypresses is found in Game.js.  

There are three static elevations and one dynamic elevation.  The static elevations are the base floor, platforms which can be jumped onto from the floor, and cliffs, which cannot be reached by either the floor or the platforms.  The dynamic elevation is a pushable boulder.  If approached from the floor, the boulder is pushable as long as the tile it is being moved towards is the same or lower elevation.  If approached from a platform, the boulder is climbable, and serves as a bridge elevation between the platforms and the cliffs, meaning if the character moves toward a cliff from atop a boulder, the character will move on to the cliffs.  For an added layer of complexity, the movable boulders can exist on any of the three static elevations, and whether they are pushable or climbable depends on from which elevation the character is approaching from.  The logic for the "pushable" function is found in Game.js.  

There are many different interactable terrain types found in the game.  These terrain types can be viewed in Components/Game/Map Variables/tileVariables.js, and are rendered in Tile.js.  Most of the logic for interacting with these tiles is found in Game.js.  These include:

  empty: empty tiles are the basic floor tiles with no terrain modifier,
  
  water: impassable unless a pushable boulder has first been pushed into the water to act as a permanent bridge,
  
  lava: routes user to Death.js, unless a pushable boulder has first been pushed into the lava to act as a temporary bridge for one turn,
  
  quicksand: begins a counter, which increments every time the character steps on quicksand, and routes to Death.js if character steps on quicksand four times IN A ROW.  Counter clears if character steps off of quicksand.  Pushing a boulder onto quicksand destroys the boulder,
  
  chest: contains a treasure chest with five possible levels.  Chests trigger the goldPile function (Game.js) which gives the player a random amount of gold, the limits of which depend on the level of the chest.  Chests also deposit an item into the player's inventory (Inventory.js), the level/rarity of which is also dependent on the level of the chest,
  
  monster: contains a monster.  Monsters have different types, levels, stats, and abilities. Stepping on a monster tile triggers the combat function and routes to CombatView.js.  Combat takes in player stats (modified by any equipped (Equipment.js) items), monster stats, and then modifies player stats with different attack abilities that are determined by the type of weapon equipped.  Successfully defeating a monster gives different experience points based on the level difference between the player and the monster.  Push a boulder onto a monster from a cliff destroys the monster and gives the player a set amount of experience points,
  
  gold-pile: similar to chest, but only deposits gold and no item,
  
  uneven: character can move across this terrain, but pushable boulders cannot,
  
  locked-door: contains a "door" that is only passable if player first finds the matching key,
  
  teleporter: if stepped on, will teleport the character to a pre-determined location on the map.  If a boulder is pushed onto the teleporter tile, the boulder will appear at that pre-determined location,
  
  lookout: will illuminate a pre-determined radius on the mini-map, so that player can see farther on the mini-map,
  exit: gives player set amount of experience points, and routes player back to Town.js,
  
  wall: display as black tiles and cannot be moved onto or pushed onto from any elevation.
  
  
In addition to terrain "types", there are additional properties to each Tile component that alter how they are rendered and how the character interacts with the Tile. These include:
  hidden: if true, hidden tiles display as black "wall" tiles, but can be moved or pushed onto.  Hidden tiles can be any elevation, and can contain any terrain or object modifiers.  If a "hidden door" tile is adjacent to hidden tiles, then stepping on the hidden door will reveal the adjacent hidden tiles, and then those hidden tiles will check for additional adjacent hidden tiles and reveal those, ad infinitum until the chain of adjacent hidden tiles is fully revealed,
  
  mist: if true, tile is displayed with a cloud/mist modifier which covers whatever terrain or objects lie beneath,
  
  pushable: determines whether or not the tile contains a pushable boulder,
  
  elevation: determines which of the three static elevations the tile has.
  
  
Game state saves to the SQL database anytime player returns to Town.js or creates a new character.  Redux is also saved to local storage to allow refreshing without logging the player out, and to allow the player to stay logged in even if they exit out of their browser.  Scroll, gold coin, and health bar animations were done with the GreenSock library.  Terrain animations (lava, quicksand) were done using CSS.  

Database was created using PostGreSQL.  Server was created using Node, Massive, and Express.

Game created by: 
  Ryan Aposhian: https://github.com/RAposhian,
  Noah Orr: https://github.com/Tallons,
  Jonathon Dehlin: https://github.com/jondeh
  

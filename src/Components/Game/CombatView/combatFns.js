//attack type for the button options
///////////////////////////////////////////

export function attackType (weapon) {
  let arr = [];
  console.log(weapon)
  switch(weapon) {
     case 'Iron Shortsword':
        return arr = ['Stab', 'Slash', 'Lunge']
     case 'Steel Shortsword':
        return arr = ['Stab', 'Slash', 'Lunge']
     case 'Iron Dagger':
        console.log('got to this point')
        return arr = ['Stab', 'Slash', 'Lunge']
     case 'Spear':
        return arr = ['Stab', 'Lunge']
     case 'Axe':
        return arr = ['Slash', 'Slash']
      default:
        return arr = ['punch', 'kick', 'block']
  }
  return arr
}

//Switch statement that changes the stats before attack damage is calculated
/////////////////////////////////////////////////////

export const weaponAttack = (weapon, attackType, {attack, strength, armor, agility}) => {
   switch(weapon) {
     case 'Iron Shortsword':
       switch(attackType){
         case 'Stab':
         console.log('iron sword stab')
           attack += 2
           strength += 2
           armor -= 1
           break;
         case 'Slash':
         console.log('iron sword slash')
           attack += 3
           strength += 1
           armor -= 0
           break;
         case 'Lunge':
         console.log('iron sword lunge')
           attack += 4
           strength += 4
           armor -= 3
       }
       break;
     case 'Steel Shortsword':
       switch(attack){
         case 'Stab':
         console.log('Steel sword stab')
           attack += 4
           strength += 4
           armor -= 1
           break;
         case 'Slash':
         console.log('Steel sword slash')
           attack += 6
           strength += 2
           armor -= 0
           break;
         case 'Lunge':
         console.log('Steel sword lunge')
           attack += 10
           strength += 10
           armor -= 6
           break;
       }
       break;
     case 'Iron Dagger':
       switch(attack){
         case 'Stab':
         console.log('dagger stab')
           attack += 1
           strength += 1
           armor -= 1
           break;
         case 'BackStab':
         console.log('dagger BackStab')
           attack += 5
           strength += 5
           armor -= 3
           break;
         case 'Counter':
         console.log('dagger counter')
           attack += 1
           strength += 0
           armor += 5 
           break;
       }
       break;
     case 'Spear':
       switch(attack){
         case 'Stab':
         console.log('spear stab')
           attack += 3
           strength += 3
           armor -= 0
           break;
         case 'Lunge':
         console.log('spear lunge')
           attack += 14
           strength += 6
           armor -= 5
           break;
         // case 'Lunge':
         //   attack += 4
         //   strength += 4
         //   armor -= 3
         //   break;
       }
       break;
     case 'Axe': 
       switch(attack){
         case 'Chop':
         console.log('axe chop')
           attack += 3
           strength += 9
           armor -= 3
           break;
         case 'Slash':
         console.log('axe slash')
           attack += 4
           strength += 4
           armor -= 1
           break;
         // case 'Lunge':
         //   attack += 4
         //   strength += 4
         //   armor -= 3
         //   break;
       }
       break;
       default:
         break;
   }
 }

//Monster attack
/////////////////////////////////////////////

export const monAttack = (monsterAttacks, {strength, agility, attack}, characterStats) => {
  let monDamage = 0;
  switch(monsterAttacks) {
    case 'Rogue':
      monDamage = monsterAttackRogue(strength, agility, attack, characterStats.armor)
      break;
    case 'Ranger':
      monDamage = monsterAttackRanger(strength, agility, attack, characterStats.armor)
      break;
    case 'Warrior':
      monDamage = monsterAttackWarrior(strength, agility, attack, characterStats.armor)
      break;
    default:
      break;
  }
  return monDamage
}

// character attack
/////////////////////////////////////////////

 export const charAttack = (classAttacks, weapon, attackType, monsterStats, {strength, agility, attack}) => {
  let damage = 0;
  switch(classAttacks) {
    case 'Warrior':
      weaponAttack(weapon, attackType)
      damage = warriorAttack(strength, agility, attack, monsterStats.armor);
      break;
    case 'Ranger':
      weaponAttack(weapon, attackType)
      damage = rangerAttack(strength, agility, attack, monsterStats.armor)
      break;
    case 'Rogue':
      weaponAttack(weapon, attackType)
      damage = rogueAttack(strength, agility, attack, monsterStats.armor)
      break;
    default:
      break;
  }
  return damage
}

//Combat functions
/////////////////////////////

const warriorAttack = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * 1000))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let block = Math.floor(Math.random() * 1000)
  if(block <= armor) {
     damage = 0
  } else {
    damage -= armor
    if(damage <= 0) {
      damage = 1
    }
  }
  return damage
};

const rogueAttack = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * ((200 - (agility/2)) + (agility/2))))
  console.log('crit', crit)
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  // console.log('str', strength)
  // console.log('att', attack)
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let block = Math.floor(Math.random() * 1000)
  if(block <= armor) {
     damage = 0
  } else {
    damage -= armor
    if(damage <= 0) {
      damage = 1
    }
  }
  return damage
};



const rangerAttack = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * 800))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let block = Math.floor(Math.random() * 1000)
  if(block <= armor) {
     damage = 0
  } else {
    damage -= armor
    if(damage <= 0) {
      damage = 1
    }
  }
  return damage
};



const monsterAttackRogue = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * 1000))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let dodge = Math.floor(Math.random() * 250)
  console.log('dodge', dodge)
  if(dodge <= (armor + agility)) {
     damage = 0
  } else {
    damage -= armor
    if(damage <= 0) {
      damage = 1
    }
  }
  return damage
};

const monsterAttackRanger = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * 1000))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let dodge = Math.floor(Math.random() * 250)
  console.log('dodge', dodge)
  if(dodge <= (armor + agility)) {
     damage = 0
  } else {
    damage -= armor
    if(damage <= 0) {
      damage = 1
    }
  }
  return damage
};

const monsterAttackWarrior = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * 1000))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let dodge = Math.floor(Math.random() * 250)
  console.log('dodge', dodge)
  if(dodge <= (armor + agility)) {
     damage = 0
  } else {
    damage -= armor
    if(damage <= 0) {
      damage = 1
    }
  }
  return damage
};
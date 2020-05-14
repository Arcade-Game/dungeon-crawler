//Stats for combat functions
/////////////////////////////

let cStrength = 0
let cArmor = 0
let cAgility = 0
let cAttack = 0
let cLevel = 0 
let mStrength = 0
let mAttack = 0
let mArmor = 0
let mAgility = 0
let mLevel = 0

//function to set the starting values for combat
///////////////////////////////////////////////

export const statSetupChar = ({attack, agility, strength, armor}) => {
  cStrength = +strength
  cArmor = +armor
  cAgility = +agility
  cAttack = +attack
  // cLevel  //need to add the character level as a parameter
}

export const statSetupMon = ({attack, strength, armor, agility}) => {
  mStrength = +strength
  mArmor = +armor
  mAgility = +agility
  mAttack = +attack
  // mLevel //need to add the monster level as a parameter
}


//attack type for the button options
///////////////////////////////////////////

export function attackType (weapon) {
  
  let arr = [];
  let weaponType;
  if(!weapon) {
    weapon = 'unarmed'
    weaponType ='unarmed'
  }
  weapon = weapon.toLowerCase()
  if (weapon.includes('sword')){
    weaponType = 'sword'
  } else if(weapon.includes('axe')) {
    weaponType = 'axe'
  } else if (weapon.includes('dagger')) {
    weaponType = 'dagger'
  } else if (weapon.includes('spear')) {
    weaponType = 'spear'
  } else if (weapon.includes('falchion')) {
    weaponType = 'dagger'
  } else if (weapon.includes('frostbite')) {
    weaponType = 'sword'
  } else if (weapon.includes('Echo')) {
    weaponType = 'sword'
  }
 

  switch(weaponType) {
    //  case 'shortsword':
    //     return arr = ['Stab' /*, 'Slash', 'Lunge'*/]
     case 'sword':
        return arr = ['Stab' , 'Slash'/*, 'Lunge'*/]
     case 'dagger':
        return arr = ['Stab'/*, 'Slash', 'Lunge'*/]
     case 'spear':
        return arr = ['Stab' /*, 'Lunge'*/]
     case 'axe':
        return arr = ['Chop', 'Slash']
    case 'unarmed':
        return arr = ['Punch', 'Kick', 'Block']
  }
}

//Switch statement that changes the stats before attack damage is calculated
/////////////////////////////////////////////////////

const weaponAttack = (weapon, attackType) => {
   switch(weapon) {
     case 'Iron Shortsword':
       switch(attackType){
         case 'Stab':
        //  console.log('iron sword stab')
           cAttack += 0
           cArmor -= 0
           break;
         case 'Slash':
        //  console.log('iron sword slash')
           cAttack += 3
           cArmor -= 0
           break;
         case 'Lunge':
        //  console.log('iron sword lunge')
           cAttack += 4
           cArmor -= 3
       }
       break;
     case 'Steel Shortsword':
       switch(attackType){
         case 'Stab':
        //  console.log('Steel sword stab')
           cAttack += 0
           cArmor -= 0
           break;
         case 'Slash':
        //  console.log('Steel sword slash')
           cAttack += 6
           cArmor -= 0
           break;
         case 'Lunge':
        //  console.log('Steel sword lunge')
           cAttack += 10
           cArmor -= 6
           break;
       }
       break;
     case 'Iron Dagger':
       switch(attackType){
         case 'Stab':
        //  console.log('dagger stab')
           cAttack += 0
           cArmor -= 0
           break;
         case 'BackStab':
        //  console.log('dagger BackStab')
           cAttack += 5
           cArmor -= 3
           break;
         case 'Counter':
        //  console.log('dagger counter')
           cAttack += 1
           cArmor += 5 
           break;
       }
       break;
     case 'Spear':
       switch(attackType){
         case 'Stab':
        //  console.log('spear stab')
           cAttack += 0
           cArmor -= 0
           break;
         case 'Lunge':
        //  console.log('spear lunge')
           cAttack += 14
           cArmor -= 5
           break;
         // case 'Lunge':
         //   cAttack += 4
         //   cStrength += 4
         //   cArmor -= 3
         //   break;
       }
       break;
     case 'Axe': 
       switch(attackType){
         case 'Chop':
        //  console.log('axe chop')
           cAttack += 0
           cArmor -= 0
           break;
         case 'Slash':
        //  console.log('axe slash')
           cAttack += 4
           cArmor -= 1
           break;
         // case 'Lunge':
         //   cAttack += 4
         //   cArmor -= 3
         //   break;
       }
       break;
       case '':
         switch(attackType){
          case 'punch':
            // console.log('punch')
              cAttack += 1
              cArmor -= 0
              break;
            case 'kick':
            // console.log('kick')
              cAttack += 2
              cArmor -= 1
              break;
            case 'block':
            // console.log('block')
              cAttack -= cAttack
              cStrength -= cStrength
              cArmor += 2
              break;
         }
         break;
         default:
           break;
   }
 }

//Monster attack
/////////////////////////////////////////////

export const monAttack = (monsterAttacks) => {
  let monDamage = 0;
  switch(monsterAttacks) {
    case 'Rogue':
      monDamage = monsterAttackRogue(mStrength, mAgility, mAttack, cArmor)
      break;
    case 'Ranger':
      monDamage = monsterAttackRanger(mStrength, mAgility, mAttack, cArmor)
      break;
    case 'Warrior':
      monDamage = monsterAttackWarrior(mStrength, mAgility, mAttack, cArmor)
      break;
    default:
      break;
  }
  return monDamage
}

// character attack
/////////////////////////////////////////////

 export const charAttack = (classAttacks, weapon, attackType) => {
  let damage = 0;
  switch(classAttacks) {
    case 'Warrior':
      weaponAttack(weapon, attackType , cStrength, cAgility, cAttack, cArmor)
      damage = warriorAttack(cStrength, cAgility, cAttack, mArmor);
      break;
    case 'Ranger':
      weaponAttack(weapon, attackType, cStrength, cAgility, cAttack, cArmor)
      damage = rangerAttack(cStrength, cAgility, cAttack, mArmor)
      break;
    case 'Rogue':
      weaponAttack(weapon, attackType, cStrength, cAgility, cAttack, cArmor)
      damage = rogueAttack(cStrength, cAgility, cAttack, mArmor)
      break;
    default:
      break;
  }
  return damage
}

//character attack functions
/////////////////////////////

const warriorAttack = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * ((mLevel - cLevel) * 100) + 1000))
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
  let crit = Math.floor((Math.random() * ((mLevel - cLevel) * 100) + 200))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  strength = (strength/2)
  strength += (agility/2)
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
  let crit = Math.floor((Math.random() * ((mLevel - cLevel) * 100) + 800))
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

//Monster attack functions
////////////////////////////////////////////

const monsterAttackRogue = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * 1000))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let dodge = Math.floor(Math.random() * 500)
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
  let block = Math.floor(Math.random() * 300)
  // console.log('dodge', dodge)
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

const monsterAttackWarrior = (strength, agility, attack, armor) => {  
  let crit = Math.floor((Math.random() * 1000))
  if (crit <= agility){
    strength += attack
    attack += attack
  }
  let damage = Math.floor((Math.random() * ((strength + attack) - attack) + attack))
  let block = Math.floor(Math.random() * 250)
  // console.log('dodge', dodge)
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
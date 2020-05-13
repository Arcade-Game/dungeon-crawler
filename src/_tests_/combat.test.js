import {attackType} from '../Components/Game/CombatView/combatFns';

test('Test checking to see if the correct array is returned', () => {
   expect(attackType('Iron Shortsword')).toStrictEqual(['Stab'])
})

test('Test checking to see if the correct array is returned', () => {
   expect(attackType('')).toStrictEqual(['punch'])
})



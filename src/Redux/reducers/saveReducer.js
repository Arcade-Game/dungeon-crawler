const initialState = {
   saveId: 0,
   inventory: [],
   equipped: []
}

export default function saveReducer (state = initialState, action) {
   const {type, payload} = action;
   switch(type) {
      default:
         return state;
   }
}
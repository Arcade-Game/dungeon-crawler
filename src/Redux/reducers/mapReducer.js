const initialState = {
    currentMap: null
};

const SELECT_MAP = "SELECT_MAP";


export const selectMap = (map) => {
    return {
        type: SELECT_MAP,
        payload: map
    }
};

export default function reducer (state = initialState, action) {
    // console.log("MAP REDUCER")
    const {type, payload} = action
    switch(type) {
        case SELECT_MAP:
            return {...state, currentMap: payload}
        
    default:
        return state;
    }
}
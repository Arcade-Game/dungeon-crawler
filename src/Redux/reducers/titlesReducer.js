const initialState = {
    honor: 0,
    title: 1
}

const SET_HONOR = 'SET_HONOR';
const SET_TITLE = 'SET_TITLE';

export const setHonor = (xp, level) => {
    let newTitle = initialState.title
    let newHonor = initialState.honor
    let addHonor = (xp/10)+(level*10)
    let honorNeeded = (initialState.title*1000)+((initialState.title-1)*500) 
    if(addHonor + initialState.honor > honorNeeded){
        let newTitle = newTitle + 1
        let newHonor = honorNeeded - (addHonor + initialState.honor)
    } else {
        newHonor = addHonor = initialState.honor
        newTitle = initialState.title
    }
    return {
        type: SET_HONOR, 
        payload: newHonor, newTitle
    }
}

export const setTitle = (honor) => {
    return {
        type: SET_TITLE,
        payload: data
    }
}

export default function reducer (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_HONOR:
            return {...state, honor: newHonor, title: newTitle};
        case SET_TITLE:
            return {...state, ...payload}
        default:
            return state;
    }
};
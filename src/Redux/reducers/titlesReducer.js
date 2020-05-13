const initialState = {
    honor: 0,
    titleNum: 0,
    titles: ["Peasant", "Knight", "Baron", "Duke", "Prince", "King", "Emperor"],
    title: "Peasant"

}

const SET_HONOR = 'SET_HONOR';
const SET_TITLE = 'SET_TITLE';

export const setHonor = (xp, level) => {
    let newTitleNum = initialState.titleNum
    let newHonor = initialState.honor
    let newTitles = [...initialState.titles]
    let addHonor = (xp/10)+(level*10)
    let honorNeeded = (initialState.titleNum*1000)+((initialState.titleNum-1)*500) 
    if(addHonor + initialState.honor > honorNeeded){
        newTitleNum = newTitleNum + 1
        newHonor = honorNeeded - (addHonor + initialState.honor)
    } else {
        newHonor = addHonor = initialState.honor
        newTitleNum = initialState.title
    }
    return {
        type: SET_HONOR, 
        payload: newHonor, newTitleNum
    }
}

// export const setTitle = (honor) => {
//     return {
//         type: SET_TITLE,
//         payload: data
//     }
// }

export default function reducer (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_HONOR:
            return {...state, honor: payload.newHonor, titleNum: payload.newTitleNum, title: initialState.titles[payload.newTitleNum]};
        default:
            return state;
    }
};
export default function searchReducer(state = [], action){
    switch(action.type){
        case 'SEACH_TAB':            
            return [...state, Object.assign({}, action.tabs)];
         default:
            return state;
    }
}
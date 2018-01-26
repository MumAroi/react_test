// step 30 : create cars reducer
export default function (state={}, action){
    // console.log(action);
    // return state;
    switch (action.type) {
        case "SEARCH_CARS":
            // console.log(action.payload);
            return {...state, list:action.payload, detail:[], color:false};
        case "CAR_DETAIL":
            // console.log(action.payload);
            return {...state, detail:action.payload, color:true};
        case "CLEAR_DETAIL":
            // console.log(action.payload);
            return {...state, detail:action.payload};
        case "LIST_CARS":
            // console.log(action.payload);
            return {...state, list:action.payload, detail:[], color:false};
        default:
            return state;
    }
}
// step 30 : create cars reducer
export default function (state=[], action){
    // console.log(action);
    // return state;
    switch (action.type) {
        case "SEARCH_CARS":
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
// step 50 : create cars detail reducer
export default function (state=[], action){
    // console.log(action);
    // return state;
    switch (action.type) {
        case "CAR_DETAIL":
            return action.payload;
        default:
            return state;
    }
}
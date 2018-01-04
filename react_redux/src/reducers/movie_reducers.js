// const data = {
//     type: 'MOVIE_LIST',
//     playload: [
//         {id: '1', name: 'PULP FICTION'}
//     ]
// }

export default function(state = null, action){
    switch (action.type) {
        case 'MOVIE_LIST':
            return action.playload;
        default:
            return state;
    }
}
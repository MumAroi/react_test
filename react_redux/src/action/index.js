// step 12 : create data 
export function moviesList(){
    return {
        type: 'MOVIE_LIST',
        playload: [
            {id:1,name:'Pulp Fiction'},
            {id:2,name:'Pacific Rim'},
            {id:3,name:'Rambo'}
        ]
    };
}